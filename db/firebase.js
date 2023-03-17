const { initializeApp, cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const serviceAccount = require('../creds/creds.json')

initializeApp({
    credential: cert(serviceAccount)
})

const db = getFirestore()
db.settings({ ignoreUndefinedProperties: true })

module.exports = { db }