class TriviaQuestion {
    constructor(topic) {
        this.showAnswer = false;
        this.topic = topic;
        this.answerLogged = false;
    }

    getQuestion() {
        return <p key="question">Sample Question</p>;
    }

    getTimeLimit(){
        return 0;
    }

    render() {
        if(!this.answerLogged){
            console.log("当前题目答案 = " + this.getAnswerStr());
            this.answerLogged = true;
        }
        var returnVal = [];
        returnVal.push(<p className="lead" key="questionTitle">此题是一个<b>{this.topic}</b>题目</p>)
        returnVal.push(this.getQuestion());
        if(this.showAnswer){
            returnVal.push(this.getAnswer());
        }
        return <div key="triviaQuestionRender" className="container-fluid"> {returnVal} </div>;
    }

    getAnswerStr(){
        return "";
    }

    getAnswer() {
        return <p key="answer"></p>;
    }

    tick(millis){

    }

    reset() {
        this.showAnswer = false;
        this.answerLogged = false;
    }
}