//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function Send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            names: user_name,
            msg: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout1()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
