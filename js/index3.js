var btn=document.querySelector('.btn');

/////////////////////////////////////////////////events
btn.addEventListener('click',function(e){
    backToLogin();
    e.preventDefault();

    
})
/////////////////////////////////////////////////functions
function backToLogin(){
    window.location.href = "index.html";
}
var userName=localStorage.getItem('name')
console.log(userName);

document.getElementById('welcomeMessage').innerHTML =`<h1 id="username">Welcome ${userName}</h1>`;