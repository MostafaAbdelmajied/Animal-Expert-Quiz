students = [
    {
        id: 1,
        name: "mostafa",
        email: "mostafa@gmail.com",
        password: btoa("password"),
        required_exams: []
    },
    {
        id: 2,
        name: "ali",
        email: "ali@gmail.com",
        password: btoa("password"),
        required_exams: []
    },
    {
        id: 3,
        name: "ahmed",
        email: "ahmed@gmail.com",
        password: btoa("password"),
        required_exams: []
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

localStorage.removeItem("students");
localStorage.removeItem("teachers");
localStorage.removeItem("student_exam");
localStorage.setItem('students',JSON.stringify(students));
localStorage.setItem('teachers',JSON.stringify(teachers));
localStorage.setItem('student_exam',JSON.stringify(exam_results));

window.location.href = "login.html";