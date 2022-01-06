const firebaseConfig = {
    apiKey: "AIzaSyBoVLAkvr4_jGgKJLYT8euy9Ryd1TZc2o4",
    authDomain: "project-94-43c63.firebaseapp.com",
    databaseURL: "https://project-94-43c63-default-rtdb.firebaseio.com",
    projectId: "project-94-43c63",
    storageBucket: "project-94-43c63.appspot.com",
    messagingSenderId: "92529044647",
    appId: "1:92529044647:web:6f3a31864594d1891fff82"
  };

firebase.initializeApp(firebaseConfig);





user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "Cakebook_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
          });
    });

}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "Cakebook_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}