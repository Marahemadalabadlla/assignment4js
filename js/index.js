
///////////////////////////////////////start programm/////////////////////////////////////////
var upBtn = document.querySelector('#btn1');
var mainSec = document.querySelector('.mainSec');
var userName = document.querySelector('#name');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var btn = document.querySelector('.btn');
var paragraph=document.querySelector(".paragraph");
var data = [];


/////////////////////////// events///////////////////////////////////////////
upBtn.addEventListener('click', function(e) {
  e.preventDefault();
  signUp();
});


btn.addEventListener('click', function() {
  addData();
});



////////////////////////////////////////// functions///////////////////////////////////
function signUp() {
window.location.href="index2.html"
}

function addData(){
  var data={
    email:email.value,
    password:password.value,
  }
  var users = JSON.parse(localStorage.getItem('data')) || []; 
  for (var i = 0; i < users.length; i++) {
      var user = users[i];
      
      if (email.value == users[i].Email && password.value ==users[i].Password) {
        localStorage.setItem('name',JSON.stringify(users[i].userName));
          paragraph.classList.add('d-none');
          window.location.href = "index3.html"; 
        
          return; 
      }
      else{
        alert("the password or the email is invalid")
        console.log(users);
        
      }
    
    }
  

}






