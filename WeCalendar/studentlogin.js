
var config = {
    apiKey: "AIzaSyD3p5oI4AiM1tpfAg9CeijzSQM1ZJnfWEI",
    authDomain: "calendar-7d451.firebaseapp.com",
    projectId: "calendar-7d451",
    storageBucket: "calendar-7d451.appspot.com",
    messagingSenderId: "372482797700",
    appId: "1:372482797700:web:2e597b305cbda6060152d1",
    measurementId: "G-FFD5RJW44H"
  };
  // Initialize Firebase


  //refrence messages collection 
  var messagesRef = firebase.database().ref('messages') ;
// listen for form submit 
document.getElementById('studentinfo').addEventListener('submit', submitForm);
// function submit form 
function submitForm(e){
    e.preventDefault() ;
    //get values 
    var email = getInputVal('email') ;
    var password = getInputVal('password') ;
    //save message 
    saveMessages(email , password) ;

    
    
} 

//function to get form values 
function getInputVal(id){
    return document.getElementById(id).value ;
}

//function to save the sammesges to firebase
function saveMessages( email ,password){
    var newMessageRef = messagesRef.push() ;
    newMessageRef.set({
        email: email , 
        password: password 
    }) ;
}
