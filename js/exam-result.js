import * as localStorageManager from "./LocalStorageManager.js";

let resultId = sessionStorage.getItem('current_result_id');
let examResult = localStorageManager.findById(resultId, 'student_exam');
let exam = localStorageManager.findById(examResult.examId, 'exams');
let student = localStorageManager.findById(examResult.stdId, 'students');

let container = document.getElementById("examResultContainer");
let template = document.getElementById("questionTemplate");

renderExam(examResult);

function renderExam(data) {

    let header = document.createElement("div");
    header.className = "mb-4";

    header.innerHTML = `
        <div class="card shadow-sm">
            <div class="card-body d-flex justify-content-between flex-wrap">
                <div>
                    <h4 class="fw-bold mb-1">${student.name}</h4>
                    <span class="text-muted">Student</span>
                </div>

                <div class="text-end">
                    <p class="mb-1"><strong>Exam Time:</strong></p>
                    <span class="text-muted">${exam.duration}</span>
                </div>
            </div>

            <div class="card-footer text-center fw-bold">
                Total Score: ${data.totalScore}
            </div>
        </div>
    `;

    container.appendChild(header);

    data.questions.forEach((q, index) => {

        let questionCard = template.cloneNode(true);
        questionCard.classList.remove("d-none");
        questionCard.removeAttribute("id");

        questionCard.querySelector(".question-title").innerHTML = `
            <span>Q${index + 1}. ${q.question}</span>
            <span class="badge bg-secondary ms-2">${q.degree} marks</span>
        `;

        let img = questionCard.querySelector(".question-image");
        if (q.image) {
            img.src = q.image;
            img.classList.remove("d-none");
        }

        let answersList = questionCard.querySelector(".answers-list");

        q.answers.forEach((answer, aIndex) => {
            let li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = answer.text;

            if (q.choice !== null) {
                if (aIndex === q.correct) {
                    li.classList.add("list-group-item-success");
                } else if (aIndex === q.choice) {
                    li.classList.add("list-group-item-danger");
                }
            }

            answersList.appendChild(li);
        });

        if (q.choice === null) {
            questionCard.querySelector(".no-answer")
                .classList.remove("d-none");
        }

        container.appendChild(questionCard);
    });
}
