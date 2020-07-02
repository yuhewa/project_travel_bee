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


function need(){
    const purposeElement = document.querySelector('[data-action="purpose"]');
    const purpose = purposeElement.value;
    const money1_1Element = document.querySelector('[data-action="money1_1"]');
    const money1_1 = money1_1Element.value;
    const money1_2Element = document.querySelector('[data-action="money1_2"]');
    const money1_2 = money1_2Element.value;
    var now=new Date();;
    
    db.collection("your_need").doc(`${now}`).set({
        purpose: `${purpose}`,
        money1_1:`${money1_1}`,
        money1_2:`${money1_2}`,
        time: `${now}`
    });
   
}