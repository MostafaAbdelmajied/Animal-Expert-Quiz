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