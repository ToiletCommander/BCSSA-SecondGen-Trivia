class ThemeMusicQuestion extends TriviaQuestion{
    constructor(options, timeLimit, numToReach) {
        super("看主题唱歌词");
        this.showAnswer = true;
        this.options = options;
        this.timeLimit = timeLimit;
        this.numToReach = numToReach;
    }

    getQuestion() {
        let ques = new Array();
        ques.push(<p className="lead" key="questionPrompt">请您在{this.timeLimit}秒内唱出{this.numToReach}个符合主题的歌曲段落</p>);
        ques.push(<p key="questionThemePrompt">下面是您的主题选项</p>);
        let optionJSXs = new Array();
        let optionOrders = ['A','B','C','D','E','F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R','S','T','U','V','W','X','Y','Z'];
        
        for(let i=0; i<this.options.length;i++){
            let currentOption = optionOrders[i];
            optionJSXs.push(<p className="lead" key={currentOption}>{currentOption}. {this.options[i]}</p>);
        }
        return <div key="questionDiv">{ques}{optionJSXs}</div>;
    }

    getTimeLimit(){
        return this.timeLimit;
    }

    getAnswerStr(){
        return "";
    }

    getAnswer() {
        return <p></p>;
    }

    tick(millis){

    }

    reset() {
        this.showAnswer = true;
        this.answerLogged = true;
    }
}