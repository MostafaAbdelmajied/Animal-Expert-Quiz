import * as ls from "./LocalStorageManager.js"

let std=ls.findById(ls.getStringKey("user_id"),"students");
console.log(std);
const profileData = {
    name: std.name,
    email: std.email,
    phone: std.phone,
    grade: std.grade,
    avatar: std.image 
};

function initProfile() {
    const avatarUrl = profileData.avatar || 
        "./assets/avatar.png";
    
    const smallAvatarUrl = profileData.avatar || 
        `./assets/avatar.png`;

    document.getElementById('nav-avatar').src = smallAvatarUrl;
    document.getElementById('nav-user-name').textContent = profileData.name;
    document.getElementById('profile-avatar-large').src = avatarUrl;
    document.getElementById('profile-name-header').textContent = profileData.name;
    document.getElementById('profile-email-header').textContent = profileData.email;
    document.getElementById('profile-name').textContent = profileData.name;
    document.getElementById('profile-email').textContent = profileData.email;
    document.getElementById('profile-phone').textContent = profileData.phone;
    document.getElementById('profile-grade').textContent = profileData.grade;
}

document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {

        ls.deleteKey("user_id");
        sessionStorage.removeItem("currentExam");
        window.location.href = 'login.html'

    }
});




function renderExams(exams) {
    const container = document.getElementById('exams-container');
    container.innerHTML = ''; 

    console.log(exams);
    if(Array.isArray(exams) && exams[0]!= null ){
      console.log(exams);
      exams.forEach(exam => {
        let card;
        
        if (exam.finish) {
          console.log(exam);
          card = createCompletedExamCard(exam);
         } else  {
           card = createNotStartedExamCard(exam);
          }
           container.appendChild(card);
      });
    }
    

}

function createCompletedExamCard(exam) {

    const template = document.querySelector('[data-template="completed"]');
    const clone = template.cloneNode(true);
    console.log("inner",exam)

    clone.removeAttribute('data-template');
    clone.style.display = '';

    clone.querySelector('.exam-title').textContent = ls.findById(exam.examId,"exams").name;

    clone.querySelector('.exam-score').textContent = exam.totalScore + '%';
    const timestamp = exam.id;
const date = new Date(timestamp);

const formatted = date.toLocaleString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
});
    clone.querySelector('.exam-date').textContent = formatted;
    

    return clone;
}


function createNotStartedExamCard(exam) {

    const template = document.querySelector('[data-template="not-started"]');
    const clone = template.cloneNode(true);
    console.log("=======",exam)

    clone.removeAttribute('data-template');
    clone.style.display = '';
    

    clone.querySelector('.exam-title').textContent = exam.name;

    clone.querySelector('.exam-duration').textContent = exam.duration;
    

    const startBtn = clone.querySelector('.start-exam-btn');
    startBtn.dataset.index = exam.id;

    startBtn.addEventListener('click', function (e) {

 
        let stud=ls.findById(ls.getStringKey("user_id"),"students");
        stud.current_exam=Number(this.dataset.index);
        ls.update(stud.id,stud,"students");

        sessionStorage.setItem("finished",JSON.stringify([Number(this.dataset.index),false]))

      window.location.href = 'exam.html';
    
    }
    );
    
    return clone;
}

let finised=sessionStorage.getItem("finished");
if(finised){
    finised=JSON.parse(finised);
    finised[1]=true;
    sessionStorage.setItem("finished",JSON.stringify(finised))
}



function loadExams() {

    
  let exam=[]
  let completeExams=ls.completeExams(std.id,"student_exam");
  console.log(completeExams)
  if(completeExams){
    exam.push(...completeExams);
  }
  
    let questions=ls.findById(std.id,"students").required_exams;
    console.log(questions)
    
    if(questions.length>0){
      for(let i=0 ;i<questions.length;++i){
        exam.push(ls.findById(questions[i],"exams"))
      console.log(ls.findById(questions[i],"exams"));
      }
    }
    renderExams(exam);
    
}

let stud=ls.findById(ls.getStringKey("user_id"),"students");
stud.current_exam=null;
ls.update(stud.id,stud,"students")
document.addEventListener('DOMContentLoaded', function() {
    initProfile();
    loadExams();
});