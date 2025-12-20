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
students = [
    {
        id: 1,
        name: "mostafa",
        email: "mostafa@gmail.com",
        password: btoa("password"),
        required_exams: [],
        phone:"+201017012231",
        "image": "https://res.cloudinary.com/dpjzyrtcp/image/upload/v1766255363/oxy1houfockkb7snf2ez.jpg",
        "finished_exams": [],
        "current_exam": null,
        grade:1
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
        password: btoa("password")
    },
    {
        id: 5,
        name: "ali",
        email: "ali@gmail.com",
        password: btoa("password")
    },
    {
        id: 6,
        name: "ahmed",
        email: "ahmed@gmail.com",
        password: btoa("password")
    },
];

localStorage.removeItem("students");
localStorage.removeItem("teachers");
localStorage.setItem('students',JSON.stringify(students));
localStorage.setItem('teachers',JSON.stringify(teachers));