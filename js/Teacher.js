export class Teacher {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.image = data.image;
        this.password = data.password;
        this.email = data.email;
        this.phone = data.phone;
        this.courseName = data.courseName;
        this.exams_id = data.exams_id || [];
    }

    addExam(examId) {
        this.exams_id.push(examId);
    }

}
