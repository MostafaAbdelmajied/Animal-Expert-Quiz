
let exam=
    {
        "id": 1766160800350,
        "name": "test",
        "questions_num": "3",
        "duration": "10",
        "questions_id": [
            1766160875059,
            1766161012736,
            1766161044098
        ]
    }
;


        const questions = [
            {
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
                question: "Lorem ipsum dolor sit amet.",
                choices: ["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet."],
                correct: 0,
                level: "easy",
                score:40
            },
            {
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop",
                question: "Lorem ipsum dolor sit amet.",
                choices: ["5", "6", "7", "8"],
                correct: 2,
                level: "easy",
                score:10
            },
            {
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
                question: "Can u cry plz?",
                choices: ["أفريقيا", "آسيا", "أوروبا", "أمريكا"],
                correct: 1,
                level: "middle",
                score:15
            },
            {
                image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=400&fit=crop",
                question: "كم عدد ألوان قوس قزح؟",
                choices: ["5", "6", "7", "8"],
                correct: 2,
                level: "middle",
                score:15
            },
            {
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
                question: "ما هو أطول نهر في العالم؟",
                choices: ["النيل", "الأمازون", "المسيسبي", "الفرات"],
                correct: 0,
                level: "hard",
                score:10
            }
        ];
        
        let min=5
        let currentQuestion = 0;
        let totalScore = 0;
        let maxScore = 100;
        let answered = false;
        const examDuration = min *60;
        // const questionTimeLimit = examDuration/questions.length; // 
        const questionTimeLimit = 5; // 
        let timeRemaining = examDuration;
        let questionTimer;
        let mainTimer;
        let userAnswers = {};
        let questionTimeLeft; 

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
    // console.log("resultttt from saving func");
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
    // console.log(data);
    // console.log(session)
    // console.log(session.examFinished)
    totalScore = session.totalScore;
    timeRemaining = session.timeRemaining;
    if (session.examFinished){
    // console.log(session.examFinished,"examFinih");    
    return 'result';
    }    

    currentQuestion = session.currentQuestion;
    answered = session.answered;
    userAnswers = session.userAnswers || {};
    questionTimeLeft=session.questionTimeLeft;

    return 'exam';
}

function loadQuestion() {
    answered = false;
    const q = questions[currentQuestion];

    document.getElementById('questionNumber').textContent =
        `Question ${currentQuestion + 1} from ${questions.length}:`;

    document.getElementById('levelBadge').textContent = q.level;
    document.getElementById('levelBadge').className = `level-badge ${q.level}`;

    document.getElementById('questionImage').src = q.image;
    document.getElementById('questionText').textContent = q.question;

    const container = document.getElementById('choicesContainer');
    container.innerHTML = '';

    q.choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice;
        btn.dataset.index = index;
        container.appendChild(btn);
    });

    document.getElementById('nextBtn').disabled = true;

        // console.log(userAnswers.hasOwnProperty(currentQuestion));
        // console.log(Object.getOwnPropertyNames(userAnswers));
    if (userAnswers.hasOwnProperty(currentQuestion)) {
        answered = true;
        const selected = userAnswers[currentQuestion];
        const correct = q.correct;

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
            selectAnswer(index);
        });


        function selectAnswer(index) {
            if (answered) return;
            
            answered = true;
            userAnswers[currentQuestion]=index;
            // console.log(currentQuestion);
            // console.log(userAnswers);
            const buttons = document.querySelectorAll('.choice-btn');
            const correct = questions[currentQuestion].correct;
            
            buttons.forEach((btn, i) => {
                btn.disabled = true;
                // if (i === correct ) { to choose the right too
                if (i === correct && i===index) {
                    btn.classList.add('correct');
                }
                if (i === index && i !== correct) {
                    btn.classList.add('wrong');
                }
            });
            
            document.getElementById('nextBtn').disabled = false;
            if (index === correct) {
                totalScore +=questions[currentQuestion].score;
                console.log(totalScore);
            }
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
            document.getElementById('correctAnswers').textContent = totalScore;
            document.getElementById('totalQuestions').textContent = maxScore;
            
            var circleColor;
            if (totalScore < 50) {
                circleColor = '#ef4444'; 
            } else if (totalScore < 70) {
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
            
            circle.animate(totalScore / 100);
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
    window.location.href = 'profile.html'; 
});



        const session=loadSession();

        // console.log(session);
        if (session === 'result') {
            showResult();
            updateMainTimer();


        } else {
            loadQuestion();
            updateMainTimer();
                        mainTimer = setInterval(() => {
                timeRemaining--;
                updateMainTimer();
                saveSession();
            }, 1000);
        }
