export class Exam{
    constructor(data)
    {
        this.id = data.id;
        this.name = data.name;
        this.questions_num = data.questions_num;
        this.duration = data.duration;
        this.questions_id = data.questions_id || [];
    }

    addQuestion(questionId)
    {
        this.questions_id.push(questionId);
    }

    isComplete() {
        return this.questions_id.length == this.questions_num;
    }
}