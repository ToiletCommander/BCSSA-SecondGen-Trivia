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
                <p className="lead" key={currentOption}>{currentOption}: {this.question.options[i]}</p>
            );
        }
        return <div key="question"><h2 key="questionText">问: {this.question.question}</h2>{allOptionDisplay}</div>;
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