const firebaseConfig = {
  apiKey: "AIzaSyB1NAivtTbBSNlmKKSCak3xORk6Nabh7To",
  authDomain: "webfinal-776ec.firebaseapp.com",
  databaseURL: "https://webfinal-776ec-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webfinal-776ec",
  storageBucket: "webfinal-776ec.appspot.com",
  messagingSenderId: "645031850170",
  appId: "1:645031850170:web:ec890cc918be1a182a1283"
};
firebase.initializeApp(firebaseConfig);
const tableID = 'comments'
const path = '/comments'
const type = 'value'

firebase.database().ref(path).on(type, snapshot => {
    const comments = snapshot.val()
    let tableInfo = '<tr><th class="user">用戶</th><th class="comment">留言</th><th class="time">時間</th></tr>'
    Object.keys(comments).map((content) => {
        const info = comments[content]
        tableInfo += `<tr><td>${info.Name}</td><td>${info.content}</td><td>${info.Time}</td></tr>`
    })
    document.getElementById(tableID).innerHTML = tableInfo
})

var comment_submit = document.getElementById("comment_submit_Btn");
var user_id = document.getElementById("userid");
var comment_content = document.getElementById("comment");
const database = firebase.database();

comment_submit.addEventListener("click", function (e) {
  if (user_id.value == "管理員") {
    alert("您不是管理員，請勿使用管理員的名義發表留言")
  }
  else {
    var temp = new Date();
    var time = temp.getFullYear() + '/' + (temp.getMonth()+1) + '/' + temp.getDate() + ' ' + temp.getHours() + ':' + temp.getMinutes() + ':' + temp.getSeconds();
    var id = temp.getTime();
    database.ref('/comments/' + id).set({Name:user_id.value,Time:time,content:comment_content.value});
    comment_content.value = "";
  }
})

var LogOut_Btn = document.getElementById('LogOut_Btn');
LogOut_Btn.onclick = function() {
  firebase.auth().signOut().then(function() {
    alert("成功登出");
    window.location.href="index.html";
  })
}
