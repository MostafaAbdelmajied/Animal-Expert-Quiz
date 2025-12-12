import * as localStorageManager from "./LocalStorageManager.js";
let teacher = localStorageManager.getAll('user');

document.getElementById("nav-user-name").textContent = teacher.name;

document.getElementById("profile-name").textContent = teacher.name;
document.getElementById("profile-email").textContent = teacher.email;
document.getElementById("profile-phone").textContent = teacher.phone;
document.getElementById("profile-grade").textContent = teacher.grade;