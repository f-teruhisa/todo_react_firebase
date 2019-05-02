const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addRecentUpdateOnCreate = functions.database.ref('/todos/{uid}/{todoId}/text')
  .onCreate((snapshot, context) => {
    const uid = context.params.uid;
    const todoId = context.params.todoId;

    console.log('addRecentUpdateOnCreate called. uid=' + uid + ', todoId=' + todoId);

    return null;
  })

exports.addRecentUpdateOnUpdateCompleted = functions.database.ref('/todos/{uid}/{todoId}/completed')
  .onUpdate((change, context) => {
    const todoId = context.params.todoId;
    const uid = context.params.uid;

    console.log('addRecentUpdateOnUpdateCompleted called. uid=' + uid + ', todoId=' + todoId);

    return null;
  })
