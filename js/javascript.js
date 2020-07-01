
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOl199Tr3U5GXHaG2c9hQFMDdzfJbZMMA",
    authDomain: "travelbee--contact.firebaseapp.com",
    databaseURL: "https://travelbee--contact.firebaseio.com",
    projectId: "travelbee--contact",
    storageBucket: "travelbee--contact.appspot.com",
    messagingSenderId: "447907766830",
    appId: "1:447907766830:web:6fb756404a7a54cad0f5bf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

$(document).ready(function(){

    // 按鈕hover效果
    $('#btn_1').mouseenter(function(){
        $(this).attr("src","img/button_use_T.png");
    });
    $('#btn_1').mouseleave(function(){
        $(this).attr("src","img/button_use.png");
    });
    $('#btn_2').mouseenter(function(){
        $(this).attr("src","img/button_bebee_T.png");
    });
    $('#btn_2').mouseleave(function(){
        $(this).attr("src","img/button_bebee.png");
    });
    $('#btn_3').mouseenter(function(){
        $(this).attr("src","img/send_t.png");
    });
    $('#btn_3').mouseleave(function(){
        $(this).attr("src","img/send.png");
    });

});


// 「聯絡我們」簡易後端功能
let n = 0;
function send(){
    const nameElement = document.querySelector('[data-action="name"]');
    const name = nameElement.value;
    const mailElement = document.querySelector('[data-action="mail"]');
    const mail = mailElement.value;
    const tellElement = document.querySelector('[data-action="tell"]');
    const tell = tellElement.value;
    const textElement = document.querySelector('[data-action="text"]');
    const text = textElement.value;
    var now=new Date();;
    n = n + 1;
    db.collection("contact").doc(`${now}`).set({
        name: `${name}`,
        mail: `${mail}`,
        tell: `${tell}`,
        text: `${text}`,
        time: `${now}`,
    });
   
}