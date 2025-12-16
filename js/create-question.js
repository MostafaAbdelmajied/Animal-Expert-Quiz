import { Exam } from "./Exam.js";
import * as localStorageManager from "./LocalStorageManager.js";
import { Question } from "./Question.js";
let questionDataForm = document.getElementById('question-data-form');
let errorDiv = document.querySelector(".error-div");
let questionNumElement = document.getElementById("question-num");

let examId = localStorageManager.getStringKey('current_creation_exam_id');
if(! examId)
    window.location.href = "create-exam.html";
let exam = new Exam(localStorageManager.findById(examId, "exams"));

questionNumElement.innerText = "Question" + " " + (exam.questions_id.length + 1);



    questionDataForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let questionData = getQuestionFormData();
        if(validateQuestionData(questionData)){
            
            questionData.id = Date.now();
            exam.addQuestion(questionData.id);
            localStorageManager.update(exam.id, exam, "exams");
            localStorageManager.saveItem(questionData, "questions");

            if(exam.isComplete())
            {
                Swal.fire({title: "Success", text: "question saved successfully", icon: "success"});
                localStorageManager.deleteKey('current_creation_exam_id');
                window.location.href = "teacher-profile.html";
            }else{
                Swal.fire({title: "Success", text: "question saved successfully", icon: "success"});
                questionDataForm.reset();
            }
        }
    });


function showError(message)
{
    errorDiv.style.display = "block";
    errorDiv.querySelector('span').innerText = message;
}

function getQuestionFormData() {
    const questionCard = document.querySelector(".question-card");
    const questionText = questionCard.querySelector('input[name="question"]').value.trim();
    const degree = parseInt(questionCard.querySelector('input[name="degree"]').value);
    const level = questionCard.querySelector('select[name="level"]').value;

    const answers = [];
    questionCard.querySelectorAll('tbody tr').forEach((row, index) => {
        const answerText = row.querySelector(`input[name="answers[${index}][text]"]`).value.trim();
        const isCorrect = row.querySelector('input[name="correctAnswer"]:checked')?.dataset.rowIndex == index;
        answers.push({
            text: answerText,
            correct: isCorrect || false
        });
    });

    const imageInput = questionCard.querySelector('input[type="file"]');
    const imageFile = imageInput.files[0] || null;

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
