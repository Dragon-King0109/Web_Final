const firebaseConfig = {
  apiKey: "AIzaSyB1NAivtTbBSNlmKKSCak3xORk6Nabh7To",
  authDomain: "webfinal-776ec.firebaseapp.com",
  databaseURL: "https://webfinal-776ec-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webfinal-776ec",
  storageBucket: "webfinal-776ec.appspot.com",
  messagingSenderId: "645031850170",
  appId: "1:645031850170:web:ec890cc918be1a182a1283"
};
const app = firebase.initializeApp(firebaseConfig);

var email = document.getElementById("username");
var password = document.getElementById("password");
var btn_login = document.getElementById("btn_login");
var btn_register = document.getElementById("btn_register");

btn_login.addEventListener("click", function (e) {
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then(() => {
    alert("登入成功");
    if(email.value == "f779849464977@gmail.com"){
      window.location.href="admin.html";
    }
    else {
      window.location.href="main.html";
    }
  })
  .catch((error) => {
    alert(error.message);
  });
});

btn_register.addEventListener("click", function (e) {
  window.location.href="register.html";
});
