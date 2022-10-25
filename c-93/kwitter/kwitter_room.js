// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD6EDRgOKmfzebFIEMvI-lCT40kEis-w_o",
      authDomain: "c-93-1fab3.firebaseapp.com",
      projectId: "c-93-1fab3",
      storageBucket: "c-93-1fab3.appspot.com",
      messagingSenderId: "578549192986",
      appId: "1:578549192986:web:88222d6b56b0746045f4a3"
    };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localstorage.getItem("user_name");
room_name = localstorage.getItem("room_name");
function send() {

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            Like:0
      });

      document.getElementById("msg").value = "";

}

//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name)
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+room_name);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+= row;
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
      
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
      //End code
      });});}
getData();
