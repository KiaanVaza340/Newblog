// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAB08OXhbSCtRrj5QCNPEsjlbXu94aZqNA",
      authDomain: "kwitter-6bbe0.firebaseapp.com",
      databaseURL: "https://kwitter-6bbe0-default-rtdb.firebaseio.com",
      projectId: "kwitter-6bbe0",
      storageBucket: "kwitter-6bbe0.appspot.com",
      messagingSenderId: "882873901912",
      appId: "1:882873901912:web:964e76f7f124b4ec38fb2d"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
