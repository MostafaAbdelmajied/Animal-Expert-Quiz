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

// Start exam function
function startExam(examId) {
    console.log('Starting exam:', examId);
    // Redirect to exam page
    // window.location.href = `exam.html?id=${examId}`;
    alert(`Starting exam ${examId}...`);
}

// View exam results function
function viewExamResults(examId) {
    console.log('Viewing results for exam:', examId);
    // Redirect to results page
    // window.location.href = `results.html?id=${examId}`;
    alert(`Viewing results for exam ${examId}...`);
}



// Example exams data - Replace with your backend data
const examsData = [
    {
        id: 1,
        title: "Mammals Quiz",
        description: "Understanding mammal characteristics and behavior",
        duration: 30,
        status: "completed",
        score: 92,
        completedDate: "Dec 15, 2025"
    },
    {
        id: 2,
        title: "Birds & Flight",
        description: "Exploring avian species and their abilities",
        duration: 30,
        status: "not_started",
        score: null,
        completedDate: null
    },
    {
        id: 3,
        title: "Marine Life",
        description: "Ocean creatures and their ecosystems",
        duration: 45,
        status: "completed",
        score: 78,
        completedDate: "Dec 10, 2025"
    },
    {
        id: 4,
        title: "Reptiles & Amphibians",
        description: "Cold-blooded vertebrates study",
        duration: 45,
        status: "not_started",
        score: null,
        completedDate: null
    },
    {
        id: 5,
        title: "Insects & Arthropods",
        description: "Study of insects and their characteristics",
        duration: 40,
        status: "completed",
        score: 88,
        completedDate: "Dec 12, 2025"
    }
];

// Function to render exam cards using templates
function renderExams(exams) {
    const container = document.getElementById('exams-container');
    container.innerHTML = ''; // Clear existing cards
    
    exams.forEach(exam => {
        let card;
        if (exam.status === 'completed') {
            card = createCompletedExamCard(exam);
        } else {
            card = createNotStartedExamCard(exam);
        }
        container.appendChild(card);
    });
    
    // Update statistics
    // updateStatistics(exams);
}

// Function to create completed exam card
function createCompletedExamCard(exam) {
    // Get template and clone it
    const template = document.querySelector('[data-template="completed"]');
    const clone = template.cloneNode(true);
    
    // Remove template attribute and make visible
    clone.removeAttribute('data-template');
    clone.style.display = '';
    
    // Fill in the data
    clone.querySelector('.exam-title').textContent = exam.name;
    // clone.querySelector('.exam-description').textContent = exam.description;
    clone.querySelector('.exam-score').textContent = exam.score + '%';
    clone.querySelector('.exam-date').textContent = exam.completedDate;
    
    // Add click event for view results button
    const viewBtn = clone.querySelector('.view-results-btn');
    viewBtn.addEventListener('click', () => viewExamResults(exam.id));
    
    return clone;
}

// Function to create not started exam card
function createNotStartedExamCard(exam) {
    // Get template and clone it
    const template = document.querySelector('[data-template="not-started"]');
    const clone = template.cloneNode(true);
    
    // Remove template attribute and make visible
    clone.removeAttribute('data-template');
    clone.style.display = '';
    
    // Fill in the data
    clone.querySelector('.exam-title').textContent = exam.name;
    // clone.querySelector('.exam-description').textContent = exam.description;
    clone.querySelector('.exam-duration').textContent = exam.duration;
    
    // Add click event for start exam button
    const startBtn = clone.querySelector('.start-exam-btn');
    startBtn.addEventListener('click', () => startExam(exam.id));
    
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
    renderExams(examsData);
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initProfile();
    loadExams();
});