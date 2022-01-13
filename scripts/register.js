const firebaseConfig = {
  apiKey: "AIzaSyB1NAivtTbBSNlmKKSCak3xORk6Nabh7To",
  authDomain: "webfinal-776ec.firebaseapp.com",
  projectId: "webfinal-776ec",
  storageBucket: "webfinal-776ec.appspot.com",
  messagingSenderId: "645031850170",
  appId: "1:645031850170:web:ec890cc918be1a182a1283"
};
const app = firebase.initializeApp(firebaseConfig);

var email = document.getElementById("email");
var password = document.getElementById("password");
var checkpassword = document.getElementById("checkpassword");
var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (e) {
  if(password.value == checkpassword.value) {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(() => {
      alert("註冊成功 現在為您跳轉到登入頁面");
      window.location.href="index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
  }
  else {
    alert("兩次輸入的密碼不一致");
  }
});
