import {getAllStudents, getAllTeachers, validateEmail} from "./functions.js";

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
                handleUserLogin(email, password, students);
                break;
            case "teacher": 
                let teachers = getAllTeachers();
                handleUserLogin(email, password, teachers);
                break;
        }
    } catch (error) {
        errorDiv.style.display = "block";
        errorDiv.querySelector('span').innerText = error.message;
    }
    
});

function handleUserLogin(email, password, data)
{
    // if(! validateEmail)
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
    localStorage.setItem("user_id", user.id);
    localStorage.setItem("user", user);
}