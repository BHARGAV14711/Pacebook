const firebaseConfig = {
      apiKey: "AIzaSyAp8PAXLEmo9A1M9qC0ytgGqbIpsUKsZhQ",
      authDomain: "kwitterchatapp-93.firebaseapp.com",
      databaseURL: "https://kwitterchatapp-93-default-rtdb.firebaseio.com",
      projectId: "kwitterchatapp-93",
      storageBucket: "kwitterchatapp-93.appspot.com",
      messagingSenderId: "617370694893",
      appId: "1:617370694893:web:7bd82db0b3c95918ae88e4"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
