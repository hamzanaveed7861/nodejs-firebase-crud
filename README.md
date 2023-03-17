***Detail***
This is a simple ***Crud Operation Backend File*** which is based on Nodejs, Expressjs and Firebase.


***Package To Be Installed***
npm init
npm i firebase-admin --save 
npm i express 


***Run File***
npm run dev


***Create Database in Firebase and go to project setting and then go to Service Account and Generate new primary key and it start downloding a file save this file into the creds folder with the name creds.json***


***To Test in Postman***
***GET FRIENDs***
GET http://localhost:8383/friends


***ADD A FRIEND***
POST http://localhost:8383/addfriend
Content-Type: body/json

{
    "name": "Hamza",
    "status": "frieind"
}

***Change Status***
PATCH http://localhost:8383/changestatus
Content-Type: body/json

{
    "name": "Hamza",
    "newStatus": "not a friend"
}


***DELETE A FRIEND***
DELETE http://localhost:8383/deletefriends
Content-Type: body/json

{
    "name": "Hamza"
}



