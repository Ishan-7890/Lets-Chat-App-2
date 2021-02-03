
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC7KA2EPs_qn7syV6vfc9cb8-HL6DBudEY",
    authDomain: "lets-chat-a7be1.firebaseapp.com",
    databaseURL: "https://lets-chat-a7be1-default-rtdb.firebaseio.com",
    projectId: "lets-chat-a7be1",
    storageBucket: "lets-chat-a7be1.appspot.com",
    messagingSenderId: "588818620702",
    appId: "1:588818620702:web:6dba77cfef69571cca690f",
    measurementId: "G-LEHHRN9PJE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
