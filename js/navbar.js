import * as localStorageManager from "./LocalStorageManager.js";

let user  = localStorageManager.getAll('user');
let logoutBtn = document.getElementById('logoutBtn');

document.getElementById("nav-user-name").textContent = user.name;
logoutBtn.addEventListener('click', function () {
    localStorage.removeItem('user_id');
    localStorage.removeItem('user');
    window.location.href = "login.html";
});