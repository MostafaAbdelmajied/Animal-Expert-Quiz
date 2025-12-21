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
        required_exams: [101,102,103],
        phone:"+201017012231",
        "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766255363/oxy1houfockkb7snf2ez.jpg",
        finished_exams: [],
        "current_exam": null,
        grade:1
    },
    {
        id: 2,
        name: "ali",
        email: "ali@gmail.com",
        password: btoa("password"),
required_exams: [103,104,105],
        phone:"+201017012231",
        "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766255363/oxy1houfockkb7snf2ez.jpg",
        finished_exams: [],
        "current_exam": null,
        grade:3    },
    {
        id: 3,
        name: "ahmed",
        email: "ahmed@gmail.com",
        password: btoa("password"),
        required_exams: [101,104,105],
        phone:"+201017012231",
        "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766255363/oxy1houfockkb7snf2ez.jpg",
        finished_exams: [],
        "current_exam": null,
        grade:2
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


let exam_results = [
    {
    "id": 1766253025663,
    "stdId": 1,
    "finish": true,
    "examId": 1766263614885,
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
},
{
    "id": 1766253025663,
    "stdId": 2,
    "finish": true,
    "examId": 1766263614885,
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
];

// {
//     "id": 1766251919266,
//     "name": "tst",
//     "questions_num": "3",
//     "duration": "15",
//     "questions_id": [
//         1766251933571,
//         1766251946178,
//         1766251960490
//     ]
// }

// {
//     "question": "Esse reprehenderit",
//     "degree": 25,
//     "level": "easy",
//     "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766251936/of8bzyrzddfzgnqnufax.jpg",
//     "answers": [
//         {
//             "text": "Fuga Ipsum volupta",
//             "correct": false
//         },
//         {
//             "text": "Vel itaque eum labor",
//             "correct": false
//         },
//         {
//             "text": "Veritatis amet dolo",
//             "correct": false
//         },
//         {
//             "text": "Quas sed labore magn",
//             "correct": true
//         }
//     ],
//     "id": 1766251933571
// }


const exams=[
  {
    "id": 101,
    "name": "Math Quiz 1",
    "questions_num": "5",
    "duration": "30",
    "questions_id": [201, 202, 203, 204, 205]
  },
  {
    "id": 102,
    "name": "Science Quiz 1",
    "questions_num": "5",
    "duration": "30",
    "questions_id": [206, 207, 208, 209, 210]
  },
  {
    "id": 103,
    "name": "History Quiz 1",
    "questions_num": "5",
    "duration": "45",
    "questions_id": [211, 212, 213, 214, 215]
  },
  {
    "id": 104,
    "name": "General Knowledge 1",
    "questions_num": "5",
    "duration": "20",
    "questions_id": [216, 217, 218, 219, 220]
  },
  {
    "id": 105,
    "name": "Logic & IQ 1",
    "questions_num": "5",
    "duration": "40",
    "questions_id": [221, 222, 223, 224, 225]
  }
];

const questions=[
  { "id": 201, "question": "What is 2+2?", "degree": 10, "level": "easy", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859452/samples/cup-on-a-table.jpg", "answers": [{ "text": "4", "correct": true }, { "text": "5", "correct": false }, { "text": "52", "correct": false }, { "text": "55", "correct": false }] },
  { "id": 202, "question": "Capital of France?", "degree": 10, "level": "easy", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859458/cld-sample-4.jpg", "answers": [{ "text": "Paris", "correct": true }, { "text": "Lyon", "correct": false }, { "text": "Lyon", "correct": false }, { "text": "Lyon", "correct": false }] },
  { "id": 203, "question": "Square root of 144?", "degree": 20, "level": "medium", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859457/cld-sample-2.jpg", "answers": [{ "text": "12", "correct": true }, { "text": "14", "correct": false }, { "text": "14", "correct": false }, { "text": "14", "correct": false }] },
  { "id": 204, "question": "Value of Pi to 2 decimal places?", "degree": 30, "level": "medium", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859452/samples/coffee.jpg", "answers": [{ "text": "3.14", "correct": true }, { "text": "3.16", "correct": false }, { "text": "3.16", "correct": false }, { "text": "3.16", "correct": false }] },
  { "id": 205, "question": "Solve: 2x + 5 = 15", "degree": 30, "level": "hard", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859451/samples/chair-and-coffee-table.jpg", "answers": [{ "text": "5", "correct": true }, { "text": "10", "correct": false }, { "text": "10", "correct": false }, { "text": "10", "correct": false }] },

  { "id": 206, "question": "Water formula?", "degree": 10, "level": "easy", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859449/samples/breakfast.jpg", "answers": [{ "text": "H2O", "correct": true }, { "text": "CO2", "correct": false }, { "text": "CO2", "correct": false }, { "text": "CO2", "correct": false }] },
  { "id": 207, "question": "Red Planet?", "degree": 15, "level": "easy", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859442/samples/landscapes/nature-mountains.jpg", "answers": [{ "text": "Mars", "correct": true }, { "text": "Venus", "correct": false }, { "text": "Venus", "correct": false }, { "text": "Venus", "correct": false }] },
  { "id": 208, "question": "Human bone count?", "degree": 25, "level": "medium", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859440/samples/ecommerce/leather-bag-gray.jpg", "answers": [{ "text": "206", "correct": true }, { "text": "210", "correct": false }, { "text": "210", "correct": false }, { "text": "210", "correct": false }] },
  { "id": 209, "question": "Speed of light?", "degree": 25, "level": "medium", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859439/samples/landscapes/beach-boat.jpg", "answers": [{ "text": "300k km/s", "correct": true }, { "text": "150k km/s", "correct": false }, { "text": "150k km/s", "correct": false }, { "text": "150k km/s", "correct": false }] },
  { "id": 210, "question": "Who proposed Relativity?", "degree": 25, "level": "hard", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859440/samples/ecommerce/car-interior-design.jpg", "answers": [{ "text": "Einstein", "correct": true }, { "text": "Newton", "correct": false }, { "text": "Newton", "correct": false }, { "text": "Newton", "correct": false }] },

  { "id": 211, "question": "First Man on Moon?", "degree": 10, "level": "easy", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859438/samples/people/boy-snow-hoodie.jpg", "answers": [{ "text": "Armstrong", "correct": true }, { "text": "Aldrin", "correct": false }, { "text": "Aldrin", "correct": false }, { "text": "Aldrin", "correct": false }] },
  { "id": 212, "question": "WW2 End Year?", "degree": 20, "level": "easy", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859436/samples/food/pot-mussels.jpg", "answers": [{ "text": "1945", "correct": true }, { "text": "1940", "correct": false }, { "text": "1940", "correct": false }, { "text": "1940", "correct": false }] },
  { "id": 213, "question": "Who built Pyramids?", "degree": 20, "level": "medium", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859436/samples/sheep.jpg", "answers": [{ "text": "Egyptians", "correct": true }, { "text": "Romans", "correct": false }, { "text": "Romans", "correct": false }, { "text": "Romans", "correct": false }] },
  { "id": 214, "question": "French Revolution Year?", "degree": 25, "level": "medium", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859435/samples/animals/reindeer.jpg", "answers": [{ "text": "1789", "correct": true }, { "text": "1799", "correct": false }, { "text": "1799", "correct": false }, { "text": "1799", "correct": false }] },
  { "id": 215, "question": "Ottoman Empire Founder?", "degree": 25, "level": "hard", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859427/sample.jpg", "answers": [{ "text": "Osman I", "correct": true }, { "text": "Mehmed II", "correct": false }, { "text": "Mehmed II", "correct": false }, { "text": "Mehmed II", "correct": false }] },

  { "id": 216, "question": "Largest Ocean?", "degree": 10, "level": "easy", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859433/samples/animals/cat.jpg", "answers": [{ "text": "Pacific", "correct": true }, { "text": "Atlantic", "correct": false }, { "text": "Atlantic", "correct": false }, { "text": "Atlantic", "correct": false }] },
  { "id": 217, "question": "Smallest Continent?", "degree": 15, "level": "easy", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859427/sample.jpg", "answers": [{ "text": "Australia", "correct": true }, { "text": "Europe", "correct": false }, { "text": "Europe", "correct": false }, { "text": "Europe", "correct": false }] },
  { "id": 218, "question": "Currency of Japan?", "degree": 25, "level": "medium", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859436/samples/landscapes/girl-urban-view.jpg", "answers": [{ "text": "Yen", "correct": true }, { "text": "Won", "correct": false }, { "text": "Won", "correct": false }, { "text": "Won", "correct": false }] },
  { "id": 219, "question": "Tallest Mountain?", "degree": 25, "level": "medium", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765863873/ouywovd3cif1zswbjebm.jpg", "answers": [{ "text": "Everest", "correct": true }, { "text": "K2", "correct": false }, { "text": "K2", "correct": false }, { "text": "K2", "correct": false }] },
  { "id": 220, "question": "Amazon River Location?", "degree": 25, "level": "hard", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765863784/pblyqsadgaydtw04t3uj.jpg", "answers": [{ "text": "S. America", "correct": true }, { "text": "Africa", "correct": false }, { "text": "Africa", "correct": false }, { "text": "Africa", "correct": false }] },

  { "id": 221, "question": "Binary for 2?", "degree": 10, "level": "easy", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765863754/xsepnxwkmwg0d30s3r2g.jpg", "answers": [{ "text": "10", "correct": true }, { "text": "01", "correct": false }, { "text": "01", "correct": false }, { "text": "01", "correct": false }] },
  { "id": 222, "question": "CPU Full Form?", "degree": 15, "level": "easy", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765863838/pphwk9r4gx3snantu3ky.jpg", "answers": [{ "text": "Central Processing Unit", "correct": true }, { "text": "Control Unit", "correct": false }, { "text": "Control Unit", "correct": false }, { "text": "Control Unit", "correct": false }] },
  { "id": 223, "question": "Primary Colors?", "degree": 25, "level": "medium", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766253465/cehqa4iizoxf8bklrqhd.jpg", "answers": [{ "text": "Red Blue Yellow", "correct": true }, { "text": "Red Green Blue", "correct": false }, { "text": "Red Green Blue", "correct": false }, { "text": "Red Green Blue", "correct": false }] },
  { "id": 224, "question": "Fastest Land Animal?", "degree": 25, "level": "medium", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766267086/dqcuwnwp4wpohmmxai2m.jpg", "answers": [{ "text": "Cheetah", "correct": true }, { "text": "Lion", "correct": false }, { "text": "Lion", "correct": false }, { "text": "Lion", "correct": false }] },
  { "id": 225, "question": "Earth Layers Count?", "degree": 25, "level": "hard", "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1765859455/samples/canvas.jpg", "answers": [{ "text": "3", "correct": true }, { "text": "5", "correct": false }, { "text": "5", "correct": false }, { "text": "5", "correct": false }] }
];



localStorage.removeItem("students");
localStorage.removeItem("teachers");
// localStorage.removeItem("student_exam");
localStorage.setItem("exams",JSON.stringify(exams));
localStorage.setItem("questions",JSON.stringify(questions));
localStorage.setItem('students',JSON.stringify(students));
localStorage.setItem('teachers',JSON.stringify(teachers));
// localStorage.setItem('student_exam',JSON.stringify(exam_results));

window.location.href = "login.html";