document.addEventListener("DOMContentLoaded", () => { 
 console.log("JS Loaded ✅"); 
 const form = document.getElementById("loginForm"); 
 if (form) { 
 form.addEventListener("submit", function (e) { 
 e.preventDefault(); 
   const user = document.getElementById("utmid").value.trim(); 
   const pass = document.getElementById("password").value.trim(); 
 
   if (user === "ahmedmohamed.m" && pass === "Momen1235") { 
     sessionStorage.setItem("isLoggedIn", "true"); 
     window.location.href = "home.html"; 
   } else { 
     showError("Invalid username or password"); 
   } 
 }); 
 
 } 
 }); 
 function showError(msg) { 
 let error = document.getElementById("error-msg"); 
 if (!error) { 
 error = document.createElement("div"); 
 error.id = "error-msg"; 
 error.style.color = "red"; 
 error.style.marginTop = "10px"; 
 document.querySelector(".login-card").appendChild(error); 
 } 
 error.innerText = msg; 
 } 
 function logout() { 
 sessionStorage.removeItem("isLoggedIn"); 
 window.location.href = "index.html"; 
 } 
