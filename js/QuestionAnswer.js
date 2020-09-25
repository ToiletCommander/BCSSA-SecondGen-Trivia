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
        return <div key="question"><h2 key="questionText">问: {this.question.question}</h2></div>;
    }

    tick(millis){
        
    }

    getTimeLimit(){
        return this.question.durationLimit;
    }

    getAnswer() {
        return <div key="answer"><h2 className="lead" key="answerText">答案: {this.question.answer}</h2></div>;
    }

    getAnswerStr() {
        return this.question.answer;
    }
}