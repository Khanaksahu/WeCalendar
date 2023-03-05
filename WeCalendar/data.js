const firebaseConfig = {
    apiKey: "AIzaSyCXEaesSBLoouI4wyooVYgMOkfznjx2VNM",
  authDomain: "wecalendar-5c205.firebaseapp.com",
  databaseURL: "https://wecalendar-5c205-default-rtdb.firebaseio.com",
  projectId: "wecalendar-5c205",
  storageBucket: "wecalendar-5c205.appspot.com",
  messagingSenderId: "733180631957",
  appId: "1:733180631957:web:9737de2367e6b03465f49c",
  measurementId: "G-Y2B07CR9VH"
  };
  //initialize firebase 
  firebase.initializeApp(firebaseConfig) ;
// reference your database 
var regForm = firebase.database().ref('contactForm') ;
document.getElementById('regform').addEventListener('submit', submitForm) ;
function submitForm(e){
    e.preventDefault() ;

    var name = getElementVal("name") ;
    var email = getElementVal("email") ;
    var password = getElementVal("password") ;
    console.log(name , email , password) ;
}
const getElementVal = (id)=>{
    return document.getElementById(id).value ;
}