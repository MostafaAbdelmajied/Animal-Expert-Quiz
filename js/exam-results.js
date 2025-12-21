import * as localStorageManager from "./LocalStorageManager.js";
import { Teacher } from "./Teacher.js";
let teacher = new Teacher(localStorageManager.getAll('user'));
let examId = sessionStorage.getItem('current_exam_results_id');
let results = localStorageManager.filterByAttribute('examId', examId, 'student_exam');
let examsTableBody = document.getElementById('exams-table');

results.forEach(result => {
    // console.log(result);
    let exam = localStorageManager.findById(result.examId, 'exams');
    let student = localStorageManager.findById(result.stdId, 'students');
    examsTableBody.innerHTML += `
    <tr>
        <td class="text-center">${exam.name}</td>
        <td class="text-center">${student.name}</td>
        <td class="text-center">${new Date(result.id).toLocaleString()}</td>
        <td class="text-center">
            <button onclick="viewResult(${result.id})" class="btn btn-sm btn-outline-primary me-2">
                <i class="fas fa-eye"></i> view
            </button>
        </td>
        </tr>
    `;
});

window.viewResult = function (resultId) {
    sessionStorage.setItem('current_result_id', resultId);
    window.location.href = 'exam-result.html';
}



