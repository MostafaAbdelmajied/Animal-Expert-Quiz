import * as localStorageManager from "./LocalStorageManager.js";
import { Teacher } from "./Teacher.js";
let teacher = new Teacher(localStorageManager.getAll('user'));
let user_type = localStorageManager.getStringKey("user_type");
if(user_type != "teacher")
{
  sessionStorage.setItem("permission_denied", true);
  window.history.back();
}

document.getElementById("profile-name").textContent = teacher.name;
document.getElementById("profile-email").textContent = teacher.email;
document.getElementById("profile-phone").textContent = teacher.phone;
document.getElementById("profile-course-name").textContent = teacher.courseName;



