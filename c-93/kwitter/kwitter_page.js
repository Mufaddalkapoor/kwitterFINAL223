//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyD6EDRgOKmfzebFIEMvI-lCT40kEis-w_o",
      authDomain: "c-93-1fab3.firebaseapp.com",
      databaseURL: "https://c-93-1fab3-default-rtdb.firebaseio.com",
      projectId: "c-93-1fab3",
      storageBucket: "c-93-1fab3.appspot.com",
      messagingSenderId: "578549192986",
      appId: "1:578549192986:web:88222d6b56b0746045f4a3"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
 Name = mesaage_data['Name'];
 message = message_data['message'];
like = message_data['like'];

name_with_tag = "<h4>" +Name+ "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" +message+ "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row = name_with_tag + message_with_tag + span_with_tag + like_button;
document.getElementById("output").innerHTML+= row;

function updateLike(message_id) {

      console.log("clicked on like button-"+message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

       firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
       });


}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
//End code
      } });  }); }
getData();

