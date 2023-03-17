const express = require("express");
const Router = express.Router();
const friends = require("../controllers/auth/friends.js");
const addfriend = require("../controllers/auth/addfriends.js");
const deletefriend = require("../controllers/auth/deletefriend.js");
const changestatus = require("../controllers/auth/changefriendstatus.js");


Router.post("/friends", friends);
Router.post("/addfriend", addfriend);
Router.post("/deletefriend", deletefriend);
Router.post("/changestatus", changestatus);


module.exports = Router;
