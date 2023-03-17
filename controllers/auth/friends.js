const { FieldValue } = require('firebase-admin/firestore')
const { db } = require('../../db/firebase.js')

async function friends() {
    const peopleRef = db.collection('people').doc('associates')
    const dbdata = await peopleRef.get()
    const showfriend = dbdata.data()
    return showfriend;
  }

const showfriends = async (req, res) => {
  try {
    const dbdata = await friends()
    if(!dbdata) {
        return res.sendStatus(404)
    }
    // res.status(200).send(dbdata)
    res.json({ status: "ok", friends: dbdata});
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

module.exports = showfriends;
