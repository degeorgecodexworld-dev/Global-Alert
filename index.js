function getLog() {
   document.getElementById("authModal").style.display = "flex";
   document.getElementById("app-container").style.display = "none";
}

// Toggle modal
function closelog(){  
   document.getElementById("authModal").style.display = "none";
   document.getElementById("app-container").style.display = "block";
}

// Switch tabs
function switchTab(tab) {
   const login = document.getElementById("loginForm");
   const register = document.getElementById("registerForm");
   const loginTab = document.getElementById("loginTab");
   const registerTab = document.getElementById("registerTab");

   if (tab === "login") {
   login.classList.add("active");
   register.classList.remove("active");
   loginTab.classList.add("active");
   registerTab.classList.remove("active");
   } else {
   register.classList.add("active");
   login.classList.remove("active");
   registerTab.classList.add("active");
   loginTab.classList.remove("active");
   }
}