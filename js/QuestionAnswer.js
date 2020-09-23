class QuestionAns extends TriviaQuestion{
    constructor(topic, question, answer, durationLimit){
        super(topic);
        this.question = {
            question: question,
            durationLimit: durationLimit,
            answer: answer
        };
    }

    getQuestion() {
        return <div key="question"><p className="lead" key="questionText">问: {this.question.question}</p></div>;
    }

    tick(millis){
        
    }

    getTimeLimit(){
        return this.question.durationLimit;
    }

    getAnswer() {
        return <div key="answer"><p className="lead" key="answerText">答案: {this.question.answer}</p></div>;
    }

    getAnswerStr() {
        return this.question.answer;
    }
}