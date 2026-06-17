// =======================================
// SHOW / HIDE PASSWORD
// Works on Login & Register Pages
// =======================================

function togglePassword() {

    // Find password field
    let passwordField =
        document.getElementById("password");

    // Check if field exists
    if (!passwordField) {

        return;

    }

    // Toggle visibility
    if (passwordField.type === "password") {

        passwordField.type = "text";

    } else {

        passwordField.type = "password";

    }

}


// =======================================
// REGISTER PAGE VALIDATION
// =======================================

function validateRegister() {

    let password =
        document.getElementById("password").value;

    let confirmPassword =
        document.getElementById("confirmPassword").value;

    // Check passwords match
    if (password !== confirmPassword) {

        alert("Passwords do not match ❌");

        return false;

    }

    alert("Registration Successful 🚀");

    return true;

}


// =======================================
// LOGIN PAGE VALIDATION
// =======================================

function validateLogin() {

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    // Check empty fields
    if (email === "" || password === "") {

        alert("Fill all fields first");

        return false;

    }

    alert("Login Successful 🚀");

    // Move to dashboard
    window.location.href = "dashboard.html";

}


// =======================================
// DASHBOARD SAVE PROGRESS
// =======================================

function saveProgress() {

    let arrays =
        document.getElementById("arrays").value;

    let strings =
        document.getElementById("strings").value;

    let dp =
        document.getElementById("dp").value;

    localStorage.setItem(
        "arrays",
        arrays
    );

    localStorage.setItem(
        "strings",
        strings
    );

    localStorage.setItem(
        "dp",
        dp
    );

    let total =
        Number(arrays)
        +
        Number(strings)
        +
        Number(dp);

    localStorage.setItem(
        "total",
        total
    );

    document.getElementById(
        "totalSolved"
    ).innerText =
        "Total Solved : "
        + total;

    alert("Progress Saved 🚀");

}


// =======================================
// LOAD SAVED PROGRESS
// =======================================

function loadProgress() {

    // Check dashboard exists
    if (!document.getElementById("arrays")) {

        return;

    }

    document.getElementById("arrays").value =
        localStorage.getItem("arrays") || "";

    document.getElementById("strings").value =
        localStorage.getItem("strings") || "";

    document.getElementById("dp").value =
        localStorage.getItem("dp") || "";

    document.getElementById("totalSolved").innerText =
        "Total Solved : "
        +
        (localStorage.getItem("total") || 0);

}


// =======================================
// RUN WHEN PAGE LOADS
// =======================================

window.onload = function () {

    loadProgress();

};
window.location.href = "dashboard.html";
localStorage.setItem("userEmai",email);
localStorage.setItem("email",email);
let user = localStorage.getItem("username");
let savedEmail = localStorage.getItem("email");
document.getElementById("welcome").innerText="welcome"+user;
localStorage.setItem()
localStorage.getItem()
function animateValue(id,endValue){

    let count=0;

    let element=document.getElementById(id);

    let interval=setInterval(function(){

        count+=10;

        element.innerText=count+"+";

        if(count>=endValue){

            element.innerText=endValue+"+";

            clearInterval(interval);
        }

    },20);
}

animateValue("students",5000);

animateValue("questions",10000);

animateValue("interviews",200);
let students = 250;
let dsa = 1200;
let interviews = 85;

document.getElementById("studentsPlaced").innerText = students;
document.getElementById("dsaCount").innerText = dsa;
document.getElementById("interviewCount").innerText = interviews;
function animateValue(id, start, end, duration){

    let current = start;

    let increment = end / 100;

    let timer = setInterval(()=>{

        current += increment;

        document.getElementById(id).innerText =
        Math.floor(current);

        if(current >= end){

            document.getElementById(id).innerText = end;

            clearInterval(timer);
        }

    }, duration/100);
}

animateValue("studentsPlaced",0,250,2000);
animateValue("dsaCount",0,1200,2000);
animateValue("interviewCount",0,85,2000);
document.querySelector(".hero button")
.addEventListener("click",()=>{

    window.location.href="register.html";

});
const observer =
new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }

    });

});

document
.querySelectorAll(".feature-card")
.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);
});
localStorage.setItem(
    "email",
    email
);

localStorage.setItem(
    "password",
    password
);
let savedEmail =
localStorage.getItem("email");

let savedPassword =
localStorage.getItem("password");
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

localStorage.setItem("name", name);
localStorage.setItem("email", email);
localStorage.setItem("password", password);

alert("Registration Successful!");
window.location.href = "login.html";
let savedEmail = localStorage.getItem("email");
let savedPassword = localStorage.getItem("password");

if(email === savedEmail &&
   password === savedPassword){

    window.location.href = "dashboard.html";

}else{

    alert("Invalid Credentials");

}
let name = localStorage.getItem("name");

document.getElementById("welcome")
.innerText = "Welcome, " + name;
function saveProgress(){

    localStorage.setItem(
        "arrays",
        document.getElementById("arrays").value
    );

    localStorage.setItem(
        "strings",
        document.getElementById("strings").value
    );

    localStorage.setItem(
        "dp",
        document.getElementById("dp").value
    );

    alert("Progress Saved!");
}
document.getElementById("arrays").value =
localStorage.getItem("arrays") || "";

document.getElementById("strings").value =
localStorage.getItem("strings") || "";

document.getElementById("dp").value =
localStorage.getItem("dp") || "";
let total =
Number(arrays)+
Number(strings)+
Number(dp);

document.getElementById("progressBar")
.value = total;
document.getElementById("resume")
.addEventListener("change",()=>{

    alert("Resume Uploaded Successfully");

});
function logout(){

    window.location.href="login.html";

}
//register page working 
function registerUser(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);

    alert("Registration Successful");

    window.location.href="login.html";
}
//login authentication 
function loginUser(){

    let email =
    document.getElementById("email").value;

    let password =
    document.getElementById("password").value;

    let savedEmail =
    localStorage.getItem("email");

    let savedPassword =
    localStorage.getItem("password");

    if(
        email===savedEmail &&
        password===savedPassword
    ){

        window.location.href=
        "dashboard.html";

    }else{

        alert("Invalid Credentials");
    }
}
//welcome user 
let name =
localStorage.getItem("name");

document.getElementById("welcome")
.innerText =
"Welcome, " + name;
//save progress 
function saveProgress(){

    localStorage.setItem(
        "arrays",
        document.getElementById("arrays").value
    );

    localStorage.setItem(
        "strings",
        document.getElementById("strings").value
    );

    localStorage.setItem(
        "dp",
        document.getElementById("dp").value
    );

    alert("Progress Saved");
}
//progress bar 
let arrays =
Number(localStorage.getItem("arrays")) || 0;

let strings =
Number(localStorage.getItem("strings")) || 0;

let dp =
Number(localStorage.getItem("dp")) || 0;

document.getElementById("progressBar")
.value =
arrays + strings + dp;
//resume upload 
document
.getElementById("resume")
.addEventListener("change",()=>{

    alert("Resume Uploaded");
});
//logout 
function logout(){

    window.location.href=
    "login.html";
}
document.getElementById("userEmail").innerText =
localStorage.getItem("email");
//prgress percentage 
let totalSolved = arrays + strings + dp;

let percentage =
((totalSolved / 191) * 100).toFixed(1);

document.getElementById("percentage")
.innerText = percentage + "%";
//prpgress calculation
let arrays =
Number(localStorage.getItem("arrays")) || 0;

let strings =
Number(localStorage.getItem("strings")) || 0;

let dp =
Number(localStorage.getItem("dp")) || 0;

let totalSolved =
arrays + strings + dp;

document.getElementById("totalQuestions")
.innerText = totalSolved;
//prevent form submission (dashboard page )
function saveProgress(event){

    event.preventDefault();

    // save code here
}
//IDs od array str and dp should match 
let arrays =
document.getElementById("arrays").value;

let strings =
document.getElementById("strings").value;

let dp =
document.getElementById("dp").value;
//wprking exmple
function saveProgress(){

    let arrays =
    document.getElementById("arrays").value;

    let strings =
    document.getElementById("strings").value;

    let dp =
    document.getElementById("dp").value;

    localStorage.setItem("arrays", arrays);
    localStorage.setItem("strings", strings);
    localStorage.setItem("dp", dp);

    alert("Progress Saved Successfully!");
}