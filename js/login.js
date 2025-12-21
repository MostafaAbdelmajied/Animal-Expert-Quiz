import {getAllStudents, getAllTeachers, validateEmail} from "./functions.js";
import * as localStorageManager from "./LocalStorageManager.js";
sessionStorage.removeItem("currentExam")
let loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById('email').value.trim();
    let password = document.getElementById("password").value.trim();
    let typeRadio  = document.querySelector("input[name=type]:checked");
    let errorDiv = document.querySelector(".error-div");
    if(!email || !password || !typeRadio){
        errorDiv.style.display = "block";
        errorDiv.querySelector('span').innerText = "type, email, password are required fields.";
        return;
    }

    let typeValue = typeRadio.value;
    try {
        switch (typeValue){
            case "student":
                let students = getAllStudents();
                if(! students)
                    window.location.href = "index.html";
                handleUserLogin(email, password, 'student', students);
                break;
            case "teacher": 
                let teachers = getAllTeachers();
                if(! teachers)
                    window.location.href = "index.html";
                handleUserLogin(email, password, 'teacher', teachers);
                break;
        }
    } catch (error) {
        errorDiv.style.display = "block";
        errorDiv.querySelector('span').innerText = error.message;
    }
    
});

function handleUserLogin(email, password, type, data)
{
    validateEmail(email);
    let user = data.find(user => user.email === email);
    if(! user)
    {
        throw new Error("wrong credentials.!");
    }
    let decodedPassword = atob(user.password);
    if(password != decodedPassword)
    {
        throw new Error("wrong credentials.!");
    }
    localStorageManager.store("user_id", user.id);
    localStorageManager.store('user', user);
    localStorageManager.store('user_type', type);
    switch (type){
        case "student":
            window.location.href = "student-profile.html";
            break;
        case "teacher": 
            window.location.href = "teacher-profile.html";
            break;
    }
}