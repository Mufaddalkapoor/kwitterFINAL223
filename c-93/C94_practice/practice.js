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
//ADD YOUR FIREBASE LINKS

function adduser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
    
}