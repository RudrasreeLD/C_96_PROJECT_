
const firebaseConfig = {
      apiKey: "AIzaSyAjgeIaPpSzTt1JTOQoG_YbpWTZ_xQQHQA",
      authDomain: "kwitterbornlippy.firebaseapp.com",
      databaseURL: "https://kwitterbornlippy-default-rtdb.firebaseio.com",
      projectId: "kwitterbornlippy",
      storageBucket: "kwitterbornlippy.appspot.com",
      messagingSenderId: "433563332559",
      appId: "1:433563332559:web:94ae60b792a81597742cba",
      measurementId: "G-780ER3SYFH"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");

document.getElementById("intro").innerHTML = "welcome " + username + " ✌";

function addRoom() {
      room_name = document.getElementById("addroom").value;

      firebase.database().ref("/").child(room_name).update
            ({
                  purpose: "adding room"
            });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("firebase").innerHTML = ""; snapshot.forEach(function (
                  childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("firebase").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(names)
{
      console.log(names);
      localStorage.setItem("room_name", names);

      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}