import * as localStorageManager from "./LocalStorageManager.js";
import { Exam } from "./Exam.js";

let tableBody = document.getElementById("students-table");
let errorDiv = document.querySelector(".error-div span");
let saveStudentsBtn = document.getElementById("saveStudentsBtn");

let examId = localStorageManager.getStringKey("current_creation_exam_id");
if (!examId) window.location.href = "create-exam.html";

let exam = new Exam(localStorageManager.findById(examId, "exams"));

if(! exam.isComplete()) window.location.href = "create-question.js";

renderStudents();

saveStudentsBtn.addEventListener("click", function(){
    document.querySelectorAll("input[type=checkbox]:checked")
    .forEach((checkbox) => {
        let student = localStorageManager.findById(checkbox.dataset.studentId, "students");
        student.required_exams.push(exam.id);
        localStorageManager.update(student.id, student, "students");
    });
    localStorageManager.deleteKey("current_creation_exam_id");
    window.location.href = "teacher-profile.html";
});

function renderStudents(){
    tableBody.innerHTML = "";
    let students = localStorageManager.getAll("students");
    for(let student of students){
        tableBody.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td class="text-center">
                <div class="form-check form-switch d-flex justify-content-center">
                    <input class="form-check-input" type="checkbox" role="switch" data-student-id=${student.id}  name="add-student-${student.id}">
                </div>
            </td>
        </tr>
        `;
    }
}