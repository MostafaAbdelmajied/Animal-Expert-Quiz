import * as localStorageManager from "./LocalStorageManager.js";

let user  = localStorageManager.getAll('user');
let logoutBtn = document.getElementById('logoutBtn');

document.getElementById("nav-user-name").textContent = user.name;
logoutBtn.addEventListener('click', function () {
    localStorage.setItem('user_id', null);
    localStorage.setItem('user', null);
    window.location.href = "login.html";
});