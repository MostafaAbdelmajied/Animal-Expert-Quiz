import { Exam } from "./Exam.js";
import * as localStorageManager from "./LocalStorageManager.js";
import {uploadImage} from "./cloud.js";
let questionDataForm = document.getElementById('question-data-form');
let errorDiv = document.querySelector(".error-div");
let questionNumElement = document.getElementById("question-num");
let totalDegreeSpan = document.getElementById("total-degree");

let examId = localStorageManager.getStringKey('current_creation_exam_id');
if(! examId)
    window.location.href = "create-exam.html";
let exam = new Exam(localStorageManager.findById(examId, "exams"));
let totalDegree = 0;



    questionDataForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        let questionData = getQuestionFormData();
        if(validateQuestionData(questionData)){
            questionData.image = await uploadImage(questionData.image);
            questionData.id = Date.now();
            exam.addQuestion(questionData.id);
            localStorageManager.update(exam.id, exam, "exams");
            localStorageManager.saveItem(questionData, "questions");
            totalDegree += questionData.degree;

            if(exam.isComplete())
            {
                localStorageManager.store("current_review_exam_id", exam.id);
                window.location.href = "review-exam.html";
            }else{
                Swal.fire({title: "Success", text: "question saved successfully", icon: "success"});
                questionDataForm.reset();
                questionNumElement.innerText = "Question" + " " + (exam.questions_id.length + 1);
                totalDegreeSpan.innerText = totalDegree;
                errorDiv.style.display = "none";
            }
        }
    });


function showError(message)
{
    errorDiv.style.display = "block";
    errorDiv.querySelector('span').innerText = message;
}

function getQuestionFormData() {
    let questionCard = document.querySelector(".question-card");
    let questionText = questionCard.querySelector('input[name="question"]').value.trim();
    let degree = parseInt(questionCard.querySelector('input[name="degree"]').value);
    let level = questionCard.querySelector('select[name="level"]').value;

    let answers = [];
    questionCard.querySelectorAll('tbody tr').forEach((row, index) => {
        let answerText = row.querySelector(`input[name="answers[${index}][text]"]`).value.trim();
        let isCorrect = row.querySelector('input[name="correctAnswer"]:checked')?.dataset.rowIndex == index;
        answers.push({
            text: answerText,
            correct: isCorrect || false
        });
    });

    let imageInput = questionCard.querySelector('input[type="file"]');
    let imageFile = imageInput.files[0] || null;

    return {
        question: questionText,
        degree: degree,
        level: level,
        image: imageFile,
        answers: answers
    };
}

function validateQuestionData(data)
{
    if(data.question === "" || data.question.length < 6)
    {
        showError("question text should be string with 6 characters at least");
        return false;
    }

    if(data.degree === "" || isNaN(data.degree) || Number(data.degree) <= 0)
    {
        showError("question degree should be number more than 0");
        return false;
    }

    let levels = ['easy', 'medium', 'hard'];
    if(! levels.includes(data.level))
    {
        showError("question level should be in easy, medium, hard");
        return false;
    }

    if(! data.image){
        showError("image is required");
        return false;
    }

    let correctChosen = 0;
    for(let answer of data.answers)
    {
        if(answer.text === "")
        {
            showError("question answers should be text");
            return false;
        }
        if(answer.correct == true)
        {
            if(correctChosen){
                showError("question should have only one correct answer");
                return false;
            }
            correctChosen = true;
        }
    }
    if(! correctChosen){
        showError("you should choose one answer as correct");
        return false;
    }

    return true;
}
