export class Question{
    constructor(data)
    {
        this.id = data.id;
        this.question = data.question;
        this.degree = data.degree;
        this.level = data.level;
        this.image = data.image;
        this.answers = data.answers;
    }
}