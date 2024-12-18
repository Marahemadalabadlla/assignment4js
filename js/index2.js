var inBtn = document.querySelector("#btn2");
var signUpsection = document.querySelector(".signUpsection");
var userName = document.querySelector("#userName");
var Email = document.querySelector("#Email");
var Password = document.querySelector("#Password");
var btn = document.querySelector(".btn2");


var storedData = [];
////////////////////////events
inBtn.addEventListener("click", function (e) {
   e.preventDefault();
  signIn();
});
btn.addEventListener("click", function () {
  addData();
  
});
/////////////////////////////////functions

function addData() {
  console.log(validation(userName), validation(Email), validation(Password));

  if (validation(userName) & validation(Email) & validation(Password)) {
    var userData = {
      userName: userName.value,
      Email: Email.value,
      Password: Password.value,
    };
    storedData.push(userData);
    console.log(storedData);

    localStorage.setItem("data", JSON.stringify(storedData));
    console.log(storedData);
    clear();
  }
}


  //localStorage.setItem("email", JSON.stringify(Email.value));
 // localStorage.setItem("password", JSON.stringify(Password.value));


function validation(e) {
  var validRegexes = {
    userName: /^[A-Za-z]{3,10}$/,
    Email: /^[A-Za-z0-9._%+-]+@(gmail|yahoo)\.com$/,
    Password: /^.{6,15}$/,
  };

  if (validRegexes[e.id].test(e.value)) {
    e.classList.remove("is-invalid");
    e.classList.add("is-valid");
    e.nextElementSibling.classList.add("d-none");
    return true;
  } else {
    e.classList.remove("is-valid");
    e.classList.add("is-invalid");
    e.nextElementSibling.classList.remove("d-none");
    return false;
  }
}
function clear() {
  userName.value = "";
  Email.value = "";
  Password.value = "";
}

function signIn() {
  window.location.href = "index.html";
}
