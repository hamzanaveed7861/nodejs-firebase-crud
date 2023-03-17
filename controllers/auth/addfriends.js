const { FieldValue } = require('firebase-admin/firestore')
const { db } = require('../../db/firebase.js')

const addfriend = async (req, res) => {
  try {
    console.log(req.body);
    const { name, status } = req.body 
    // console.log(name);
    // const name = req.body.name
    // const status = req.body.status
    const getdb = db.collection('people').doc('associates')
    const adddb = await getdb.set({
        [name]: status
    }, { merge: true })
    const savefriend = await getdb.get()
    const showfriend = savefriend.data()
    // res.status(200).send(showfriend)
    res.json({ status: "ok", friends: showfriend});
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

module.exports = addfriend;
