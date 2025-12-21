import * as localStorageManager from "./LocalStorageManager.js";
import { Exam } from "./Exam.js";

let tableBody = document.getElementById("questions-table");
let totalDegreeEl = document.getElementById("total-degree");
let errorDiv = document.getElementById("error-div");
let publishBtn = document.getElementById("publishExamBtn");
let addQuestionBtn = document.getElementById("addQuestion");
let creationExamId = localStorageManager.getStringKey("current_creation_exam_id");

let examId = localStorageManager.getStringKey("current_review_exam_id");
if (!examId) window.location.href = "create-exam.html";
if( ! creationExamId)
    addQuestionBtn.remove();

let exam = new Exam(localStorageManager.findById(examId, "exams"));

if(! exam.isComplete()) addQuestionBtn.hidden = false;

let totalDegree = 0, easyLevelExists = 0, mediumLevelExists = 0, hardLevelExists = 0;

renderQuestions();


function renderQuestions() {
    tableBody.innerHTML = "";
    totalDegree = 0;

    exam.questions_id.forEach((qid, index) => {
        let question = localStorageManager.findById(qid, "questions");
        if(question.level === "easy" && !easyLevelExists){
            easyLevelExists = 1;
        }else if(question.level === "medium" && !mediumLevelExists){
            mediumLevelExists = 1;
        }else if(question.level === "hard" && !hardLevelExists){
            hardLevelExists = 1;
        }
        totalDegree += Number(question.degree);

        tableBody.innerHTML += `
        <tr>
            <td class="text-center">${index + 1}</td>

            <td>${question.question}</td>

            <td>
                <input type="number" 
                       min="1"
                       value="${question.degree}"
                       class="form-control form-control-sm"
                       onchange="updateDegree(${qid}, this.value)">
            </td>

            <td>
                <select class="form-select form-select-sm"
                        onchange="updateLevel(${qid}, this.value)">
                    <option value="easy" ${question.level === "easy" ? "selected" : ""}>Easy</option>
                    <option value="medium" ${question.level === "medium" ? "selected" : ""}>Medium</option>
                    <option value="hard" ${question.level === "hard" ? "selected" : ""}>Hard</option>
                </select>
            </td>

            <td class="text-center">
                <button class="btn btn-sm btn-outline-info" onclick="editQuestion(${qid})">
                    <i class="fa fa-pen-alt"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteQuestion(${qid})">
                    <i class="fa fa-trash-alt"></i>
                </button>
            </td>
        </tr>
        `;
    });

    totalDegreeEl.innerText = totalDegree;
}


window.deleteQuestion = function (questionId) {
    // TODO need to change to 15
    if(exam.questions_id.length <= 1) {
        Swal.fire("Error", "Exam must have at least one question", "error");
        return;
    }
    Swal.fire({
        title: "Are you sure?",
        text: "This question will be deleted",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete"
    }).then(result => {
        if (result.isConfirmed) {
            exam.questions_id = exam.questions_id.filter(id => id !== questionId);
            localStorageManager.update(exam.id, exam, "exams");
            localStorageManager.deleteItem(questionId, "questions");
            window.location.reload();
            renderQuestions();
        }
    });
};

publishBtn.addEventListener("click", function () {
    errorDiv.innerText = "";

    if (totalDegree !== 100) {
        errorDiv.innerText = "Total exam degree must be exactly 100";
        return;
    }

    if(! easyLevelExists){
        errorDiv.innerText = "exam should have question with easy level";
        return;
    }
    if(! mediumLevelExists){
        errorDiv.innerText = "exam should have question with medium level";
        return;
    }
    if(! hardLevelExists){
        errorDiv.innerText = "exam should have question with hard level";
        return;
    }

    if(! exam.isComplete()) {
        exam.questions_num = exam.questions_id.length;
        localStorageManager.update(exam.id, exam, "exams");
    }

    Swal.fire({
        title: "Success",
        text: "Exam saved successfully",
        icon: "success"
    });

    if(! creationExamId || creationExamId != examId){
        window.location.href = "teacher-exams.html";
        return;
    }
    window.location.href = "add-students.html";
});


window.updateDegree = function (questionId, newDegree) {
    if (newDegree <= 0 || isNaN(newDegree)) {
        Swal.fire("Error", "Degree must be greater than 0", "error");
        return;
    }

    let question = localStorageManager.findById(questionId, "questions");
    question.degree = Number(newDegree);

    localStorageManager.update(questionId, question, "questions");
    renderQuestions();
};

window.updateLevel = function (questionId, newLevel) {
    let levels = ["easy", "medium", "hard"];
    if (!levels.includes(newLevel)) return;

    let question = localStorageManager.findById(questionId, "questions");
    question.level = newLevel;

    localStorageManager.update(questionId, question, "questions");
    renderQuestions();
};

window.editQuestion = function (questionId){
    localStorageManager.store("current_edit_question_id", questionId);
    window.location.href = "edit-question.html";
}
