const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addRecentUpdateOnCreate = functions.database.ref('/todos/{uid}/{todoId}/text')
  .onCreate((snapshot, context) => {
    const uid = context.params.uid;
    const todoId = context.params.todoId;
    const text = snapshot.val();

    return admin.database().ref('/users/' + uid + '/displayName').once('value').then((snapshot) => {
      const displayName = snapshot.val();
      return admin.database().ref('/recentUpdatedTodos/' + todoId).set({
        uid,
        displayName,
        text,
        eventType: 'CREATE',
        _updatedAt: admin.database.ServerValue.TIMESTAMP
      });
    });
  })

exports.addRecentUpdateOnUpdateCompleted = functions.database.ref('/todos/{uid}/{todoId}/completed')
  .onUpdate((change, context) => {
    const todoId = context.params.todoId;
    const uid = context.params.uid;

    console.log('addRecentUpdateOnUpdateCompleted called. uid=' + uid + ', todoId=' + todoId);

    return null;
  })
