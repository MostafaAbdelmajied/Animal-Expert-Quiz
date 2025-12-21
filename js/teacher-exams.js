import * as localStorageManager from "./LocalStorageManager.js";
import { Teacher } from "./Teacher.js";
let teacher = new Teacher(localStorageManager.getAll('user'));
let exams = localStorageManager.filterByAttribute('teacher_id', teacher.id, 'exams');
// console.log(exams);
let examsTableBody = document.getElementById('exams-table');
exams.forEach(exam => {
    examsTableBody.innerHTML += `
    <tr>
        <td class="text-center">${exam.name}</td>
        <td class="text-center">${new Date(exam.id).toLocaleString()}</td>
        <td class="text-center">
            <button onclick="reviewExam(${exam.id})" class="btn btn-sm btn-outline-primary me-2">
                <i class="fas fa-edit"></i> Edit
            </button>

            <button onclick="examResults(${exam.id})" class="btn btn-sm btn-outline-success">
                <i class="fas fa-chart-bar"></i> Results
            </button>
        </td>
        </tr>
    `;
});

window.reviewExam = function (examId) {
    localStorageManager.store('current_review_exam_id', examId);
    window.location.href = 'review-exam.html';
}

window.examResults = function(examId) {
    sessionStorage.setItem('current_exam_results_id', examId);
    window.location.href = 'exam-results.html';
}



