export class Question{
    constructor(data)
    {
        this.id = data.id;
        this.question = data.question;
        this.image = data.image;
        this.answers = data.answers;
    }
}