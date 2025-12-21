import * as ls from "./LocalStorageManager.js";

    let finish=JSON.parse(sessionStorage.getItem("finished"));
class StudentExams{

    constructor(student) {
        this.id=Date.now();
        this.stdId=student.id;
        this.finish=false;
        this.examId=student.current_exam;
        this.questions_id=this.shuffleQuestion();
       this.questions=[];
       this.totalScore=0;
        this.question();
        sessionStorage.setItem("currentExam",`${this.id}`);
        this.updateStudent();
    }

    shuffleQuestion(){
        let exam=ls.findById(this.examId,"exams");
         return this.questions_id=shuffle(exam.questions_id);
    }
    updateStudent(){
              let stud=ls.findById(this.stdId,"students");
              const index = stud.required_exams.indexOf(this.examId);

                if (index !== -1) {
                stud.required_exams.splice(index, 1);
                }
                stud.finished_exams.push(this.examId);
                ls.update(stud.id,stud,"students");
    }

    question(){
        for (let i=0;i<this.questions_id.length;++i){
            let qs=ls.findById(this.questions_id[i],"questions");
            qs.answers=shuffle(qs.answers);
            qs.choice=null;
            qs.correct=getCorrectAnswerIndex(qs.answers);
            this.questions.push(qs);
        }
    }

}
function getCorrectAnswerIndex(answers) {
  return answers.findIndex(answer => answer.correct === true);
}
    function shuffle(array) {
  return array
    .map(v => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ v }) => v);
}

function storeExam(std,key){
    if (std.current_exam){
        if(!ls.findExam(std.id,std.current_exam,key)){
            ls.saveItem(new StudentExams(std),key);
        }else{
            console.log("mawgod");
        }
        }
}

let examDuration;
let questionTimeLimit;
let timeRemaining;
  let questionTimer;
        let mainTimer;
        let userAnswers = {};
        let questionTimeLeft;
        let currentQuestion = 0;
        let totalScore = 0;
        let maxScore = 100;
        let answered = false;
let student=ls.findById((ls.getStringKey("user_id")),"students");
storeExam(student,"student_exam");


let studentExam=ls.findExam(student.id,student.current_exam,"student_exam");
const questions=studentExam.questions
function loadValues(){
            examDuration = +ls.findById(studentExam.examId,"exams").duration *60;
                 questionTimeLimit = examDuration/questions.length;
                          timeRemaining = examDuration;
        
        }

        const session=loadSession();
        let flag=sessionStorage.getItem("currentExam")
        console.log(session);
        if (session === 'result' || finish[1]) {
            showResult();
            updateMainTimer();


        }else if(!session && !flag && studentExam?.finish){
                showResult();
                updateMainTimer();
            }
         else {
             loadValues();
             loadSession();
            loadQuestion();
            updateMainTimer();
                        mainTimer = setInterval(() => {
                timeRemaining--;
                updateMainTimer();
                saveSession();
            }, 1000);
        }
        
function saveSession() {
    sessionStorage.setItem(
        "examSession",
        JSON.stringify({
            currentQuestion,
            totalScore,
            timeRemaining,
            answered,
            userAnswers,
            questionTimeLeft
        })
    );
}

function saveResult(){
    sessionStorage.setItem(
        "examSession",
        JSON.stringify({
        examFinished:true,
        totalScore,
        timeRemaining
    }));
}

function loadSession() {
    const data = sessionStorage.getItem("examSession");
    if (!data) return false;

    const session = JSON.parse(data);
    totalScore = session.totalScore;
    timeRemaining = session.timeRemaining;
    if (session.examFinished){
    return 'result';
    }    

    currentQuestion = session.currentQuestion;
    answered = session.answered;
    userAnswers = session.userAnswers || {};
    questionTimeLeft=session.questionTimeLeft;

    return 'exam';
}
console.log(studentExam.id);
console.log(studentExam.questions[currentQuestion]);


function loadQuestion() {
    const q = questions[currentQuestion];
    console.log(q)
    answered = false;
    if(!studentExam.finish){

        studentExam.finish=true;
        ls.update(studentExam.id,studentExam,"student_exam");
    }

    document.getElementById('questionNumber').textContent =
        `Question ${currentQuestion + 1} from ${questions.length}:`;

    document.getElementById('levelBadge').textContent = q.level;
    document.getElementById('levelBadge').className = `level-badge ${q.level}`;

    document.getElementById('questionImage').src = q.image;
    document.getElementById('questionText').textContent = q.question;

    const container = document.getElementById('choicesContainer');
    container.innerHTML = '';
    q.answers.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = `${index}- ${choice.text}`;
        btn.dataset.index = index;
        container.appendChild(btn);
    });

    document.getElementById('nextBtn').disabled = true;

            if (userAnswers.hasOwnProperty(currentQuestion)) {
        answered = true;
        const selected = userAnswers[currentQuestion];
        const correct = q.correct;
        console.log(q.correct);

        document.querySelectorAll('.choice-btn').forEach((btn, i) => {
            btn.disabled = true;
            if (i==selected && i === correct) btn.classList.add('correct');
            if (i === selected && i !== correct) btn.classList.add('wrong');
        });

        document.getElementById('nextBtn').disabled = false;
        startQuestionTimer();
    } else {
        startQuestionTimer();
    }
}

        const container = document.getElementById('choicesContainer');
        container.addEventListener('click', function (e) {
            const btn = e.target.closest('.choice-btn');
            if (!btn || answered) return;
            const index = Number(btn.dataset.index);
                    sessionStorage.removeItem("currentExam");
            selectAnswer(index);
        });


        function selectAnswer(index) {
            if (answered) return;
            
            answered = true;
            userAnswers[currentQuestion]=index;

            const buttons = document.querySelectorAll('.choice-btn');
            const correct = questions[currentQuestion].correct;
            
            buttons.forEach((btn, i) => {
                btn.disabled = true;
                if (i === correct && i===index) {
                    btn.classList.add('correct');
                }
                if (i === index && i !== correct) {
                    btn.classList.add('wrong');
                }
            });
            studentExam.questions[currentQuestion].choice=index;
            document.getElementById('nextBtn').disabled = false;
            if (index === correct) {
                totalScore +=questions[currentQuestion].degree;
                studentExam.totalScore=totalScore;
                console.log(totalScore);
            }
            ls.update(studentExam.id,studentExam,"student_exam");
                saveSession();
        }

        function startQuestionTimer() {
            if(!questionTimeLeft){
                clearInterval(questionTimer);
                questionTimeLeft = questionTimeLimit;
            }
            questionTimer = setInterval(() => {
                questionTimeLeft--;
                if (questionTimeLeft <= 0) {
                    clearInterval(questionTimer);
                    nextQuestion();
                }
            }, 1000);
        }

        function nextQuestion() {
            clearInterval(questionTimer);
            currentQuestion++;
            saveSession();
            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                showResult();
            }
        }
        document.getElementById('nextBtn').addEventListener('click',nextQuestion)

                function showResult() {
            clearInterval(mainTimer);
            clearInterval(questionTimer);
            saveResult();
            document.getElementById('questionCard').style.display = 'none';
            document.getElementById('resultCard').style.display = 'block';
            document.getElementById('correctAnswers').textContent = studentExam.totalScore;
            document.getElementById('totalQuestions').textContent = 100;
            
            var circleColor;
            if (studentExam.totalScore < 50) {
                circleColor = '#ef4444'; 
            } else if (studentExam.totalScore < 70) {
                circleColor = '#f59e0b';
            } else {
                circleColor = '#22c55e'; 
            }
            
            var circle = new ProgressBar.Circle('#circleProgress', {
                color: circleColor,
                strokeWidth: 8,
                trailWidth: 8,
                trailColor: '#e5e7eb',
                duration: 2000,
                easing: 'easeInOut',
                text: {
                    value: '0',
                    style: {
                        color: '#1f2937',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        padding: 0,
                        margin: 0,
                        transform: {
                            prefix: true,
                            value: 'translate(-50%, -50%)'
                        },
                        fontSize: '48px',
                        fontWeight: 'bold'
                    },
                    autoStyleContainer: false
                },
                step: function(state, bar) {
                    bar.setText(Math.round(bar.value() * 100) + '%');
                }
            });
            
            circle.animate(studentExam.totalScore / 100);
        }


        function updateMainTimer() {
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            document.getElementById('timerText').textContent = 
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            
            const bar = (timeRemaining / examDuration) * 100;
            document.getElementById('timerFill').style.width = bar + '%';
            
            if (timeRemaining <= 0) {
                clearInterval(mainTimer);
                showResult();
            }
        }

const homeBtn = document.querySelector('.home-btn');

homeBtn.addEventListener('click', () => {
    sessionStorage.removeItem("examSession");
    // window.location.href = 'profile.html'; 
    window.location.replace('student-profile.html');

});



        