import * as ls from "./js/LocalStorageManager.js"
/*{
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
 */

// let q=
// {
//     "question": "Lorem ipsum dolor sit amet.",
//     "degree": 25,"level": "easy","image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766160877/bvivdputxyu1lif4dbol.jpg",
//     "answers": [
//         {
//             "text": "Lorem ipsum dolor sit amet.",
//             "correct": true
//         },
//         {
//             "text": "Lorem ipsum dolor sit amet.",
//             "correct": false
//         },
//         {
//             "text": "Lorem ipsum dolor sit amet.",
//             "correct": false
//         },
//         {
//             "text": "Lorem ipsum dolor sit amet.",
//             "correct": false
//         }
//     ],
//     "id": 1766160875059
// };
/**
 * [
    {
        "id": 1766253025663,
        "stdId": 1766252222138,
        "finish": true,
        "examId": 1766251919266,
        "questions_id": [
            1766251933571,
            1766251960490,
            1766251946178
        ],
        "questions": [
            {
                "question": "Esse reprehenderit",
                "degree": 25,
                "level": "easy",
                "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766251936/of8bzyrzddfzgnqnufax.jpg",
                "answers": [
                    {
                        "text": "Veritatis amet dolo",
                        "correct": false
                    },
                    {
                        "text": "Vel itaque eum labor",
                        "correct": false
                    },
                    {
                        "text": "Fuga Ipsum volupta",
                        "correct": false
                    },
                    {
                        "text": "Quas sed labore magn",
                        "correct": true
                    }
                ],
                "id": 1766251933571,
                "choice": 3,
                "correct": 3
            },
            {
                "question": "Ab Nam deleniti magn",
                "degree": 50,
                "level": "hard",
                "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766251963/tjlhgvinozmqa2r4gmai.jpg",
                "answers": [
                    {
                        "text": "Lorem sed fugiat at",
                        "correct": false
                    },
                    {
                        "text": "Qui accusantium sint",
                        "correct": false
                    },
                    {
                        "text": "Eum quia modi volupt",
                        "correct": true
                    },
                    {
                        "text": "Nulla ut quisquam id",
                        "correct": false
                    }
                ],
                "id": 1766251960490,
                "choice": null,
                "correct": 2
            },
            {
                "question": "Aute dolorem dolor e",
                "degree": 25,
                "level": "medium",
                "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766251949/gr3ksdj9is3dufllf0hf.jpg",
                "answers": [
                    {
                        "text": "Molestiae adipisci e",
                        "correct": false
                    },
                    {
                        "text": "Et aut doloremque te",
                        "correct": false
                    },
                    {
                        "text": "Non ut quisquam dist",
                        "correct": true
                    },
                    {
                        "text": "Qui quis exercitatio",
                        "correct": false
                    }
                ],
                "id": 1766251946178,
                "choice": null,
                "correct": 2
            }
        ],
        "totalScore": 25
    }
]
 */
// Sample profile data - Replace with actual data from your backend
let std=ls.findById(ls.getStringKey("user_id"),"students");
// console.log(ls.getStringKey("user_id"));
console.log(std);
const profileData = {
    name: std.name,
    email: std.email,
    phone: std.phone,
    grade: std.grade,
    avatar: std.image // Set to image URL if available, otherwise will use default
};

// Function to initialize profile
function initProfile() {
    // Generate avatar URL
    const avatarUrl = profileData.avatar || 
        "./assets/avatar.png";
    
    const smallAvatarUrl = profileData.avatar || 
        `./assets/avatar.png`;

    // Update all profile elements
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

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        // Add logout logic here
        ls.deleteKey("user_id");
        window.location.href = 'login.html'
        // console.log('Logging out...');
        // window.location.href = 'login.html';
    }
});




// Example exams data - Replace with your backend data
// const examsData = [
//     {
//         id: 1,
//         title: "Mammals Quiz",
//         description: "Understanding mammal characteristics and behavior",
//         duration: 30,
//         status: "completed",
//         score: 92,
//         completedDate: "Dec 15, 2025"
//     },
//     {
//         id: 2,
//         title: "Birds & Flight",
//         description: "Exploring avian species and their abilities",
//         duration: 30,
//         status: "not_started",
//         score: null,
//         completedDate: null
//     },
//     {
//         id: 3,
//         title: "Marine Life",
//         description: "Ocean creatures and their ecosystems",
//         duration: 45,
//         status: "completed",
//         score: 78,
//         completedDate: "Dec 10, 2025"
//     },
//     {
//         id: 4,
//         title: "Reptiles & Amphibians",
//         description: "Cold-blooded vertebrates study",
//         duration: 45,
//         status: "not_started",
//         score: null,
//         completedDate: null
//     },
//     {
//         id: 5,
//         title: "Insects & Arthropods",
//         description: "Study of insects and their characteristics",
//         duration: 40,
//         status: "completed",
//         score: 88,
//         completedDate: "Dec 12, 2025"
//     }
// ];

// Function to render exam cards using templates
function renderExams(exams) {
    const container = document.getElementById('exams-container');
    container.innerHTML = ''; // Clear existing cards

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
    
    // Update statistics
    // updateStatistics(exams);
}

// Function to create completed exam card
function createCompletedExamCard(exam) {
    // Get template and clone it
    const template = document.querySelector('[data-template="completed"]');
    const clone = template.cloneNode(true);
    console.log("inner",exam)
    // Remove template attribute and make visible
    clone.removeAttribute('data-template');
    clone.style.display = '';
    // ls.findById(exam.examId,"exams");
    // Fill in the data
    // console.log(ls.findById(exam.examId,"exams").name);
    clone.querySelector('.exam-title').textContent = ls.findById(exam.examId,"exams").name;
    // clone.querySelector('.exam-description').textContent = exam.description;
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
    
    // Add click event for view results button
    // const viewBtn = clone.querySelector('.view-results-btn');
    // viewBtn.addEventListener('click', () => viewExamResults(exam.id));
    
    return clone;
}
// {
//   "id": 1766251919266,
//   "name": "tst",
//   "questions_num": "3",
//   "duration": "15",
//   "questions_id": [
//     1766251933571,
//     1766251946178,
//     1766251960490
//   ]
// }
// Function to create not started exam card
function createNotStartedExamCard(exam) {
    // Get template and clone it
    const template = document.querySelector('[data-template="not-started"]');
    const clone = template.cloneNode(true);
    console.log("=======",exam)
    // Remove template attribute and make visible
    clone.removeAttribute('data-template');
    clone.style.display = '';
    
    // Fill in the data
    clone.querySelector('.exam-title').textContent = exam.name;
    // clone.querySelector('.exam-description').textContent = exam.description;
    clone.querySelector('.exam-duration').textContent = exam.duration;
    
    // Add click event for start exam button
    const startBtn = clone.querySelector('.start-exam-btn');
    startBtn.dataset.index = exam.id;

    startBtn.addEventListener('click', function (e) {

      // console.log(e);
      // console.log(this);
      // console.log(Number(this.dataset.index));
    //   sessionStorage.setItem("currentExam",Number(this.dataset.index));
      let stud=ls.findById(ls.getStringKey("user_id"),"students");
        stud.current_exam=Number(this.dataset.index);
        ls.update(stud.id,stud,"students");
      window.location.href = 'exam.html';
    //   window.location.replace('exam.html');
    //   window.location.replace('student-profile.html');
    }
    );
    
    return clone;
}

// Function to update statistics
// function updateStatistics(exams) {
//     const totalExams = exams.length;
//     const completedExams = exams.filter(e => e.status === 'completed');
//     const completedCount = completedExams.length;
    
//     // Calculate average score
//     let avgScore = 0;
//     if (completedCount > 0) {
//         const totalScore = completedExams.reduce((sum, exam) => sum + exam.score, 0);
//         avgScore = Math.round(totalScore / completedCount);
//     }
    
//     document.getElementById('total-exams').textContent = totalExams;
//     document.getElementById('completed-exams').textContent = completedCount;
//     document.getElementById('avg-score').textContent = avgScore + '%';
// }

// Load exams when page loads
function loadExams() {
  // let id=ls.getStringKey("user_id");
  // console.log(std.id);
  let exam=[]
  let completeExams=ls.completeExams(std.id,"student_exam");
  console.log(completeExams)
  if(completeExams){
    exam.push(...completeExams);
  }
  // if(completeExams){

  //   renderExams(completeExams);
  // }
    let questions=ls.findById(std.id,"students").required_exams;
    console.log(questions)
    // 1766251933571
    
    if(questions.length>0){
      for(let i=0 ;i<questions.length;++i){
        exam.push(ls.findById(questions[i],"exams"))
      console.log(ls.findById(questions[i],"exams"));
      }
    }
    renderExams(exam);
    
    // renderExams();
}

let stud=ls.findById(ls.getStringKey("user_id"),"students");
stud.current_exam=null;
ls.update(stud.id,stud,"students")
// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initProfile();
    loadExams();
});