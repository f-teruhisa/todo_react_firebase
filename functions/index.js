const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const addRecentUpdate = (uid, todoId, text, eventType) => {
  return admin.database().ref('/users/' + uid + '/displayName').once('value').then((snapshot) => {
    const displayName = snapshot.val();
    return (admin.database().ref('/recentUpdatedTodos/' + todoId).set({
      uid,
      displayName,
      text,
      eventType,
      _updatedAt: admin.database.ServerValue.TIMESTAMP
    }));
  });
}

exports.addRecentUpdateOnCreate = functions.database.ref('/todos/{uid}/{todoId}/text')
  .onCreate((snapshot, context) => {
    const uid = context.params.uid;
    const todoId = context.params.todoId;
    const text = snapshot.val();

    return addRecentUpdate(uid, todoId, text, 'CREATE');
  })

exports.addRecentUpdateOnUpdateCompleted = functions.database.ref('/todos/{uid}/{todoId}/completed')
  .onUpdate((change, context) => {
    const todoId = context.params.todoId;
    const uid = context.params.uid;

    return change.after.ref.parent.child('text').once('value').then((snapshot) => {
      const text = snapshot.val();
      return addRecentUpdate(uid, todoId, text, 'UPDATE');
    });
  })
