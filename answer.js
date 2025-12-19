
        const questions = [
            {
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
                question: "Lorem ipsum dolor sit amet.",
                choices: ["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet."],
                correct: 0,
                level: "easy",
                score:40,
                choice:2
            },
            {
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop",
                question: "Lorem ipsum dolor sit amet.",
                choices: ["5", "6", "7", "8"],
                correct: 2,
                level: "easy",
                score:10,
                choice:2
                
            },
            {
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
                question: "Can u cry plz?",
                choices: ["أفريقيا", "آسيا", "أوروبا", "أمريكا"],
                correct: 1,
                level: "middle",
                score:15,
                choice:0
            },
            {
                image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=400&fit=crop",
                question: "كم عدد ألوان قوس قزح؟",
                choices: ["5", "6", "7", "8"],
                correct: 2,
                level: "middle",
                score:15,
                choice:3
            },
            {
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
                question: "ما هو أطول نهر في العالم؟",
                choices: ["النيل", "الأمازون", "المسيسبي", "الفرات"],
                correct: 0,
                level: "hard",
                score:10,
                choice:1
            }
        ];
let totalScore=50
currentQuestion=0;
        function loadQuestion() {
    const containerExam = document.querySelector('.exam-container');


  const q = questions[currentQuestion];

    document.getElementById('questionNumber').textContent =
        `Question ${currentQuestion + 1} from ${questions.length}:`;

    document.querySelector('#levelBadge').textContent = q.level;
    document.querySelector('#levelBadge').className = `level-badge ${q.level}`;
    document.querySelector('#score').textContent=`${q.score} Point`
    document.querySelector('#score').className = `level-badge ${q.level}`;
    document.querySelector('#questionImage').src = q.image;
    document.querySelector('#questionText').textContent = q.question;

    const containerChoices = document.getElementById('choicesContainer');
    containerChoices.innerHTML = '';

    q.choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice;
        btn.dataset.index = index;
        containerChoices.appendChild(btn);
    });
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.correct ) { 
      // if (i === correct && i===q.choice) {
          btn.classList.add('correct');
      }
      if (i === q.choice && i !== q.correct) {
          btn.classList.add('wrong');
      }
  });


          }

loadQuestion();
/////////////////////////////////////
    function cloneQuestion() {
    const answers = document.querySelector('.answers');

    // console.log(clone)
    // console.log(clone.querySelector('#levelBadge'))
    for (let i = 1; i < questions.length; i++) {
      const clone = document.querySelector('.exam-container').cloneNode(true);


  const q = questions[i];

    clone.querySelector('#questionNumber').textContent =
        `Question ${i + 1} from ${questions.length}:`;

    clone.querySelector('#levelBadge').textContent = q.level;
    clone.querySelector('#levelBadge').className = `level-badge ${q.level}`;
    clone.querySelector('#score').textContent=`${q.score} Point`
    clone.querySelector('#score').className = `level-badge ${q.level}`;
    clone.querySelector('#questionImage').src = q.image;
    clone.querySelector('#questionText').textContent = q.question;

    const containerChoices = clone.querySelector('#choicesContainer');
    containerChoices.innerHTML = '';

    q.choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice;
        btn.dataset.index = index;
        containerChoices.appendChild(btn);
    });
    const buttons = clone.querySelectorAll('.choice-btn');
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.correct ) { 
      // if (i === correct && i===q.choice) {
          btn.classList.add('correct');
      }
      if (i === q.choice && i !== q.correct) {
          btn.classList.add('wrong');
      }
      answers.appendChild(clone);
  });
    }

          }
          cloneQuestion();
function showResult() {
              document.getElementById('resultCard').style.display = 'block';

      document.getElementById('correctAnswers').textContent = totalScore;
      document.getElementById('totalQuestions').textContent = 100;
      
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
  showResult();