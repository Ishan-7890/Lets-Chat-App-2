
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyBVijfSdqhaqmWKYMJQwqiCmIyYq5B9S10",
      authDomain: "kwitter-58391.firebaseapp.com",
      databaseURL: "https://kwitter-58391-default-rtdb.firebaseio.com",
      projectId: "kwitter-58391",
      storageBucket: "kwitter-58391.appspot.com",
      messagingSenderId: "1078532896522",
      appId: "1:1078532896522:web:490131acaf19534c47ecf3"
    };
   // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() 
{

user_name = document.getElemantById("user name").value
firebase.database().ref("/").user(user_name).update({ purpose : "adding user" });
}

      
     
