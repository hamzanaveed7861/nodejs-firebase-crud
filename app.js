const express = require('express')
const { FieldValue } = require('firebase-admin/firestore')
const app = express()
const port = 4500
const routes = require("./routes/auth.js");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", routes);

app.listen(port, () => console.log(`Server has started on port: ${port}`))