export function getAllStudents()
{
    return JSON.parse(localStorage.getItem("students"));
}

export function getAllTeachers()
{
    return JSON.parse(localStorage.getItem("teachers"))
}

export function validateEmail(email)
{
    let mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email || !mailRegex.test(email)){
        throw new Error("Please enter a valid email address.");
    }
    return true;
}