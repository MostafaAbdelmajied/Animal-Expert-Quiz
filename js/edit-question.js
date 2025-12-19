import { Exam } from "./Exam.js";
import * as localStorageManager from "./LocalStorageManager.js";
import {uploadImage} from "./cloud.js";
import {Question} from "./Question.js";
let questionDataForm = document.getElementById('question-data-form');
let errorDiv = document.querySelector(".error-div");


let questionId = localStorageManager.getStringKey('current_edit_question_id');
if(! questionId)
    window.location.href = "create-exam.html";
let question = new Question(localStorageManager.findById(questionId, "questions"));
fillQuestionData(question);


    questionDataForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        let questionData = getQuestionFormData();
        if(validateQuestionData(questionData)){
            if(questionData.image)
                question.image = await uploadImage(questionData.image);
            question.question = questionData.question;
            question.answers = questionData.answers;
            localStorageManager.update(question.id,question,"questions");
            localStorageManager.deleteKey("current_edit_question_id");
            window.location.href = "review-exam.html";
        }
    });


function showError(message)
{
    errorDiv.style.display = "block";
    errorDiv.querySelector('span').innerText = message;
}

function fillQuestionData(question){
    let questionCard = document.querySelector(".question-card");
    questionCard.querySelector('input[name="question"]').value = question.question;

    let answers = question.answers;
    questionCard.querySelectorAll('tbody tr').forEach((row, index) => {
        row.querySelector(`input[name="answers[${index}][text]"]`).value = answers[index].text;
        if(answers[index].correct){
            row.querySelector('input[name="correctAnswer"]').checked = true;
        }
    });
    document.getElementById("question-image").src = question.image;
}
function getQuestionFormData() {
    let questionCard = document.querySelector(".question-card");
    let questionText = questionCard.querySelector('input[name="question"]').value.trim();

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
