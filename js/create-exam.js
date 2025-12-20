import { Exam } from "./Exam.js";
import * as localStorageManager from "./LocalStorageManager.js";
let examInfoForm = document.getElementById("exam-info-form");
let errorDiv = document.querySelector(".error-div");
let exam;

if(examInfoForm){
    examInfoForm.addEventListener("submit", function(e) {
        e.preventDefault(); 
        let examData = {
            name: examInfoForm.name.value,
            duration: examInfoForm.duration.value,
            questions_num: examInfoForm.questionNum.value
        };
        console.log(examData);

        if(validateExamData(examData))
        {
            examData.id = Date.now();
            localStorageManager.store('current_creation_exam_id', examData.id);
            localStorageManager.saveItem(examData, "exams");
            window.location.href = "create-question.html"
        }
        
    });
}



function validateExamData(data) {
    if(data.name === "") {
        showError('Exam name is required!');
        return false;
    }
    if(data.duration === "" || isNaN(data.duration) || Number(data.duration) <= 0) {
        showError('Enter a valid exam duration!');
        return false;
    }
    if(data.questions_num === "" || isNaN(data.questions_num) || Number(data.questions_num) < 3) {
        showError('Enter a valid number of questions! minimum number is 15');
        return false;
    }

    return true;
}

function showError(message)
{
    errorDiv.style.display = "block";
    errorDiv.querySelector('span').innerText = message;
}
