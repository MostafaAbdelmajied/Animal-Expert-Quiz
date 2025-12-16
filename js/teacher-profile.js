import * as localStorageManager from "./LocalStorageManager.js";
import { Teacher } from "./Teacher.js";
let teacher = new Teacher(localStorageManager.getAll('user'));
let logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', function () {
    localStorage.setItem('user_id', null);
    localStorage.setItem('user', null);
    window.location.href = "login.html";
});

document.getElementById("nav-user-name").textContent = teacher.name;

document.getElementById("profile-name").textContent = teacher.name;
document.getElementById("profile-email").textContent = teacher.email;
document.getElementById("profile-phone").textContent = teacher.phone;
document.getElementById("profile-course-name").textContent = teacher.courseName;
