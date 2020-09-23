class MCQuestion extends TriviaQuestion{
    constructor(topic, question, options, answer, durationLimit){
        super(topic);
        this.question = {
            question: question,
            options: options,
            durationLimit: durationLimit,
            answer: answer
        };
    }

    getQuestion() {
        let allOptionDisplay = new Array();
        let optionOrders = ['A','B','C','D','E','F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R','S','T','U','V','W','X','Y','Z'];
        
        for(let i=0;i<this.question.options.length;i++){
            let currentOption = optionOrders[i];
            allOptionDisplay.push(
                <p key={currentOption}>{currentOption}: {this.question.options[i]}</p>
            );
        }
        return <div key="question"><p className="lead" key="questionText">问: {this.question.question}</p>{allOptionDisplay}</div>;
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