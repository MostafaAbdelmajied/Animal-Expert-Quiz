/**{
    "id": 1766255358291,
    "name": "jogumir",
    "password": "UGEkJHcwcmQh",
    "email": "kylatecym@mailinator.com",
    "phone": "+201017012231",
    "grade": "2",
    "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766255363/oxy1houfockkb7snf2ez.jpg",
    "required_exams": [],
    "finished_exams": [],
    "current_exam": null
} */
// localStorage.setItem("student_exam",JSON.stringify(
//     [
//     {
//         "id": 1766253085663,
//         "stdId": 1,
//         "finish": true,
//         "examId": 1766251919266,
//         "questions_id": [
//             1766251933571,
//             1766251960490,
//             1766251946178
//         ],
//         "questions": [
//             {
//                 "question": "Esse reprehenderit",
//                 "degree": 25,
//                 "level": "easy",
//                 "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766251936/of8bzyrzddfzgnqnufax.jpg",
//                 "answers": [
//                     {
//                         "text": "Veritatis amet dolo",
//                         "correct": false
//                     },
//                     {
//                         "text": "Vel itaque eum labor",
//                         "correct": false
//                     },
//                     {
//                         "text": "Fuga Ipsum volupta",
//                         "correct": false
//                     },
//                     {
//                         "text": "Quas sed labore magn",
//                         "correct": true
//                     }
//                 ],
//                 "id": 1766251933571,
//                 "choice": 3,
//                 "correct": 3
//             },
//             {
//                 "question": "Ab Nam deleniti magn",
//                 "degree": 50,
//                 "level": "hard",
//                 "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766251963/tjlhgvinozmqa2r4gmai.jpg",
//                 "answers": [
//                     {
//                         "text": "Lorem sed fugiat at",
//                         "correct": false
//                     },
//                     {
//                         "text": "Qui accusantium sint",
//                         "correct": false
//                     },
//                     {
//                         "text": "Eum quia modi volupt",
//                         "correct": true
//                     },
//                     {
//                         "text": "Nulla ut quisquam id",
//                         "correct": false
//                     }
//                 ],
//                 "id": 1766251960490,
//                 "choice": null,
//                 "correct": 2
//             },
//             {
//                 "question": "Aute dolorem dolor e",
//                 "degree": 25,
//                 "level": "medium",
//                 "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766251949/gr3ksdj9is3dufllf0hf.jpg",
//                 "answers": [
//                     {
//                         "text": "Molestiae adipisci e",
//                         "correct": false
//                     },
//                     {
//                         "text": "Et aut doloremque te",
//                         "correct": false
//                     },
//                     {
//                         "text": "Non ut quisquam dist",
//                         "correct": true
//                     },
//                     {
//                         "text": "Qui quis exercitatio",
//                         "correct": false
//                     }
//                 ],
//                 "id": 1766251946178,
//                 "choice": null,
//                 "correct": 2
//             }
//         ],
//         "totalScore": 25
//     }
// ]
// ))
students = [
  {
    id: 1,
    name: "mostafa",
    email: "mostafa@gmail.com",
    password: btoa("password"),
    required_exams: [101, 102, 103],
    phone: "+201017012231",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766255363/oxy1houfockkb7snf2ez.jpg",
    finished_exams: [],
    current_exam: null,
    grade: 1,
  },
  {
    id: 2,
    name: "ali",
    email: "ali@gmail.com",
    password: btoa("password"),
    required_exams: [103, 104, 105],
    phone: "+201017012231",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766255363/oxy1houfockkb7snf2ez.jpg",
    finished_exams: [],
    current_exam: null,
    grade: 3,
  },
  {
    id: 3,
    name: "ahmed",
    email: "ahmed@gmail.com",
    password: btoa("password"),
    required_exams: [101, 104, 105],
    phone: "+201017012231",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766255363/oxy1houfockkb7snf2ez.jpg",
    finished_exams: [],
    current_exam: null,
    grade: 2,
  },
];

teachers = [
  {
    id: 4,
    name: "mostafa",
    email: "mostafa@gmail.com",
    password: btoa("password"),
    courseName: "JavaScript",
  },
  {
    id: 5,
    name: "ali",
    email: "ali@gmail.com",
    password: btoa("password"),
    courseName: "HTML",
  },
  {
    id: 6,
    name: "ahmed",
    email: "ahmed@gmail.com",
    password: btoa("password"),
    courseName: "CSS",
  },
];

let exams = [
  {
    id: 1766314902049,
    teacher_id: "4",
    name: "test exam",
    questions_num: "15",
    duration: "30",
    questions_id: [
      1766315133467, 1766315311651, 1766315501798, 1766315615853, 1766315841256,
      1766315934662, 1766316101829, 1766316252089, 1766316338956, 1766316452285,
      1766316514624, 1766316600147, 1766316652837, 1766316724499, 1766316777410,
    ],
  },
];

let questions = [
  {
    question: "How can you tell the age of a Blue-throated Macaw?",
    degree: 8,
    level: "hard",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766315132/r2kz83lyjstruwjxyank.jpg",
    answers: [
      {
        text: "By their size",
        correct: false,
      },
      {
        text: "By the colour of their eyes",
        correct: true,
      },
      {
        text: "By the length of their tail feathers",
        correct: false,
      },
      {
        text: "By their feet",
        correct: false,
      },
    ],
    id: 1766315133467,
  },
  {
    question: "To what country are Tenkiles endemic?",
    degree: 6,
    level: "medium",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766315310/ywcr0yuxyvdttfkriyrh.png",
    answers: [
      {
        text: "Indonesia",
        correct: false,
      },
      {
        text: "Russia",
        correct: false,
      },
      {
        text: "Peru",
        correct: false,
      },
      {
        text: "Papua New Guinea",
        correct: true,
      },
    ],
    id: 1766315311651,
  },
  {
    question: "Where does the Persian Leopard spend most of its time?",
    degree: 6,
    level: "easy",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766315500/ldtfakucvf7v9mkxjpmf.jpg",
    answers: [
      {
        text: "In and around water",
        correct: false,
      },
      {
        text: "In the desert",
        correct: false,
      },
      {
        text: "In trees",
        correct: true,
      },
      {
        text: "In bushes",
        correct: false,
      },
    ],
    id: 1766315501798,
  },
  {
    question: "What is the difference between turtles and tortoises?",
    degree: 8,
    level: "hard",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766315614/tdbifhacxw0lndhhtpma.jpg",
    answers: [
      {
        text: "Turtles are green and tortoises are not",
        correct: false,
      },
      {
        text: "Tortoises live on land and turtles do not",
        correct: true,
      },
      {
        text: "Turtles cannot swim and tortoises can",
        correct: false,
      },
      {
        text: "There is no difference between them",
        correct: false,
      },
    ],
    id: 1766315615853,
  },
  {
    question: "A Dugong is closely related to what animal?",
    degree: 8,
    level: "hard",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766315840/sq1lfm54hzqsbnlqhzvg.jpg",
    answers: [
      {
        text: "An elephant",
        correct: true,
      },
      {
        text: "A cow",
        correct: false,
      },
      {
        text: "A dolphin",
        correct: false,
      },
      {
        text: "A shark",
        correct: false,
      },
    ],
    id: 1766315841256,
  },
  {
    question: "On what tourist spot can you find the Barbary Macaque?",
    degree: 6,
    level: "easy",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766315933/qulceq2cinybkxy3amhc.jpg",
    answers: [
      {
        text: "The Rock of Gibraltar",
        correct: true,
      },
      {
        text: "The Grand Canyon",
        correct: false,
      },
      {
        text: "Machu Picchu",
        correct: false,
      },
      {
        text: "The Taj Mahal",
        correct: false,
      },
    ],
    id: 1766315934662,
  },
  {
    question:
      "What resembles the golden patch on the chest of Sun Bears according to legend?",
    degree: 7,
    level: "medium",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766316100/qxhgzn0yamvqpghjmdz1.jpg",
    answers: [
      {
        text: "A sunflower",
        correct: false,
      },
      {
        text: "The shape of South East Asia",
        correct: false,
      },
      {
        text: "A wave of water",
        correct: false,
      },
      {
        text: "A rising sun",
        correct: true,
      },
    ],
    id: 1766316101829,
  },
  {
    question:
      "What makes the Togo Slippery Frog visibly different from most other frogs?",
    degree: 7,
    level: "medium",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766316251/vikjzjbgstxansgm4iuc.jpg",
    answers: [
      {
        text: "Their eyes",
        correct: false,
      },
      {
        text: "Their skin",
        correct: false,
      },
      {
        text: "Their eardrums",
        correct: true,
      },
      {
        text: "Their nose",
        correct: false,
      },
    ],
    id: 1766316252089,
  },
  {
    question: "How much does the biggest ever recorded lion weigh?",
    degree: 5,
    level: "easy",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766316337/lpehw4hiw5c554pdis8i.jpg",
    answers: [
      {
        text: "250 kg",
        correct: false,
      },
      {
        text: "375 kg",
        correct: true,
      },
      {
        text: "443 kg",
        correct: false,
      },
      {
        text: "578 kg",
        correct: false,
      },
    ],
    id: 1766316338956,
  },
  {
    question:
      "What’s the first thing a caterpillar usually eats after it’s born?",
    degree: 8,
    level: "medium",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766316451/vtosbyrsvrgxecyg7ogg.jpg",
    answers: [
      {
        text: "Other bugs",
        correct: false,
      },
      {
        text: "Grass",
        correct: false,
      },
      {
        text: "Its own eggshell",
        correct: false,
      },
      {
        text: "Cheerios",
        correct: true,
      },
    ],
    id: 1766316452285,
  },
  {
    question:
      "The trumpeter swan—North America’s largest waterfowl—weighs about how many pounds?",
    degree: 5,
    level: "easy",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766316513/qvxqxopqbz15ety0ezai.jpg",
    answers: [
      {
        text: "10",
        correct: false,
      },
      {
        text: "30",
        correct: true,
      },
      {
        text: "50",
        correct: false,
      },
      {
        text: "70",
        correct: false,
      },
    ],
    id: 1766316514624,
  },
  {
    question: "Which of the following animals is not nocturnal?",
    degree: 6,
    level: "easy",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766316598/cn2cdkani3gtrekpykcn.png",
    answers: [
      {
        text: "sheep",
        correct: true,
      },
      {
        text: "dog",
        correct: false,
      },
      {
        text: "cat",
        correct: false,
      },
      {
        text: "caw",
        correct: false,
      },
    ],
    id: 1766316600147,
  },
  {
    question: "Walruses can eat about how many clams in one day?",
    degree: 8,
    level: "hard",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766316651/ggozronucr2cznq1yt7n.jpg",
    answers: [
      {
        text: "5000",
        correct: true,
      },
      {
        text: "10000",
        correct: false,
      },
      {
        text: "12000",
        correct: false,
      },
      {
        text: "15000",
        correct: false,
      },
    ],
    id: 1766316652837,
  },
  {
    question: "What is a baby rabbit called?",
    degree: 5,
    level: "easy",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766316723/kogmeixdftjwcflqwmfy.png",
    answers: [
      {
        text: "doe",
        correct: false,
      },
      {
        text: "kit",
        correct: true,
      },
      {
        text: "Buck",
        correct: false,
      },
      {
        text: "hare",
        correct: false,
      },
    ],
    id: 1766316724499,
  },
  {
    question:
      "How many koalas stacked on top of one another does it take to reach the height of a male giraffe—the world’s tallest land animal?",
    degree: 7,
    level: "medium",
    image:
      "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766316776/su7lmdvgzdryrzjnrrdf.png",
    answers: [
      {
        text: "2",
        correct: false,
      },
      {
        text: "4",
        correct: false,
      },
      {
        text: "7",
        correct: true,
      },
      {
        text: "50",
        correct: false,
      },
    ],
    id: 1766316777410,
  },
];

let exam_results = [
  {
    id: 1766253025663,
    stdId: 1,
    finish: true,
    examId: 1766263614885,
    questions_id: [1766251933571, 1766251960490, 1766251946178],
    questions: [
      {
        question: "Esse reprehenderit",
        degree: 25,
        level: "easy",
        image:
          "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766251936/of8bzyrzddfzgnqnufax.jpg",
        answers: [
          {
            text: "Veritatis amet dolo",
            correct: false,
          },
          {
            text: "Vel itaque eum labor",
            correct: false,
          },
          {
            text: "Fuga Ipsum volupta",
            correct: false,
          },
          {
            text: "Quas sed labore magn",
            correct: true,
          },
        ],
        id: 1766251933571,
        choice: 3,
        correct: 3,
      },
      {
        question: "Ab Nam deleniti magn",
        degree: 50,
        level: "hard",
        image:
          "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766251963/tjlhgvinozmqa2r4gmai.jpg",
        answers: [
          {
            text: "Lorem sed fugiat at",
            correct: false,
          },
          {
            text: "Qui accusantium sint",
            correct: false,
          },
          {
            text: "Eum quia modi volupt",
            correct: true,
          },
          {
            text: "Nulla ut quisquam id",
            correct: false,
          },
        ],
        id: 1766251960490,
        choice: null,
        correct: 2,
      },
      {
        question: "Aute dolorem dolor e",
        degree: 25,
        level: "medium",
        image:
          "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766251949/gr3ksdj9is3dufllf0hf.jpg",
        answers: [
          {
            text: "Molestiae adipisci e",
            correct: false,
          },
          {
            text: "Et aut doloremque te",
            correct: false,
          },
          {
            text: "Non ut quisquam dist",
            correct: true,
          },
          {
            text: "Qui quis exercitatio",
            correct: false,
          },
        ],
        id: 1766251946178,
        choice: null,
        correct: 2,
      },
    ],
    totalScore: 25,
  },
  {
    id: 1766253025663,
    stdId: 2,
    finish: true,
    examId: 1766263614885,
    questions_id: [1766251933571, 1766251960490, 1766251946178],
    questions: [
      {
        question: "Esse reprehenderit",
        degree: 25,
        level: "easy",
        image:
          "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766251936/of8bzyrzddfzgnqnufax.jpg",
        answers: [
          {
            text: "Veritatis amet dolo",
            correct: false,
          },
          {
            text: "Vel itaque eum labor",
            correct: false,
          },
          {
            text: "Fuga Ipsum volupta",
            correct: false,
          },
          {
            text: "Quas sed labore magn",
            correct: true,
          },
        ],
        id: 1766251933571,
        choice: 3,
        correct: 3,
      },
      {
        question: "Ab Nam deleniti magn",
        degree: 50,
        level: "hard",
        image:
          "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766251963/tjlhgvinozmqa2r4gmai.jpg",
        answers: [
          {
            text: "Lorem sed fugiat at",
            correct: false,
          },
          {
            text: "Qui accusantium sint",
            correct: false,
          },
          {
            text: "Eum quia modi volupt",
            correct: true,
          },
          {
            text: "Nulla ut quisquam id",
            correct: false,
          },
        ],
        id: 1766251960490,
        choice: null,
        correct: 2,
      },
      {
        question: "Aute dolorem dolor e",
        degree: 25,
        level: "medium",
        image:
          "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766251949/gr3ksdj9is3dufllf0hf.jpg",
        answers: [
          {
            text: "Molestiae adipisci e",
            correct: false,
          },
          {
            text: "Et aut doloremque te",
            correct: false,
          },
          {
            text: "Non ut quisquam dist",
            correct: true,
          },
          {
            text: "Qui quis exercitatio",
            correct: false,
          },
        ],
        id: 1766251946178,
        choice: null,
        correct: 2,
      },
    ],
    totalScore: 25,
  },
];


if(localStorage.getItem("exams") || localStorage.getItem("questions") || localStorage.getItem("teachers")){
  console.log("data found");
  if(localStorage.getItem("user_id") && localStorage.getItem("user_type")){
    console.log("login found insert");
    switch (localStorage.getItem("user_type")) {
      case "teacher":
        window.location.href = "teacher-profile.html";
        break;
      case "student":
        window.location.href = "student-profile.html";
      default:
        break;
    }
  }else{
    window.location.href = "login.html";
  }
}

// localStorage.removeItem("student_exam");
localStorage.setItem("exams", JSON.stringify(exams));
localStorage.setItem("questions", JSON.stringify(questions));
localStorage.setItem("students", JSON.stringify(students));
localStorage.setItem("teachers", JSON.stringify(teachers));
// localStorage.setItem('student_exam',JSON.stringify(exam_results));

window.location.href = "login.html";
