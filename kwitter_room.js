
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyC_BunQDfPYLcZx8v7-Vp4oSdFgTbrlSsc",
      authDomain: "class-test-19c0c.firebaseapp.com",
      databaseURL: "https://class-test-19c0c-default-rtdb.firebaseio.com",
      projectId: "class-test-19c0c",
      storageBucket: "class-test-19c0c.appspot.com",
      messagingSenderId: "698328242556",
      appId: "1:698328242556:web:b8892e31cf7cbe8e75acf9",
      measurementId: "G-R75CECC0E2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+" ! ";
    console.log(user_name);

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
     console.log("check"+name);
     localStorage.setItem("room_name",name);
     window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
