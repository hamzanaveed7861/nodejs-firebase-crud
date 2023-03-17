const { FieldValue } = require('firebase-admin/firestore')
const { db } = require('../../db/firebase.js')

const deletefriend = async (req, res) => {
  try {
    const { name } = req.body
    const peopleRef = db.collection('people').doc('associates')
    const res2 = await peopleRef.update({
        [name]: FieldValue.delete()
    })
    const savefriend = await peopleRef.get()
    const showfriend = savefriend.data()
    // res.status(200).send(showfriend)
    res.json({ status: "ok", friends: showfriend});
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

module.exports = deletefriend;
