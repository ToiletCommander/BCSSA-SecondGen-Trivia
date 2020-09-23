class TriviaController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {question: null, currentNum: -1, timeMillis: 0, questionStartTime: 0, overallState: 0};
        this.successNum = 0;
        this.questionsStartTime = 0;
        this.handleShowAnsClick = this.handleShowAnsClick.bind(this);
        this.handleYesClick = this.handleYesClick.bind(this);
        this.handleNoClick = this.handleNoClick.bind(this);
        this.handleStartGame = this.handleStartGame.bind(this);
    }

    handleShowAnsClick(){
        if(this.state.question !== null){
            this.state.question.showAnswer = true;
        }
    }

    handleYesClick(){
        this.goToNext(true);
    }

    handleNoClick(){
        this.goToNext(false);
    }

    handleStartGame(){
        this.goToNext(false);
    }

    render() {
        if(this.state.question === null || this.state.question === undefined){
            //no questions loaded
            if(this.state.overallState === 0){
                //normal status
                return (
                <div>
                    <p className="text-center">游戏还未开始⊙o⊙</p>
                    <p><button className="btn btn-primary" onClick={this.handleStartGame}>开始游戏</button></p>
                </div>);
            }
        }
        if(this.state.overallState === 1){
            return <p className="lead">恭喜获胜!( •̀ ω •́ )y</p>
        }
        if(this.state.overallState === 2){
            return <p className="lead">挑战失败!下次再来吧!</p>
        }
        var currentMillis = this.state.timeMillis;
        var currentDuration = currentMillis - this.questionsStartTime;
        var remainingTime = this.props.totalDuration - currentDuration;
        var questionCurrentDuration = currentMillis - this.state.questionStartTime;
        var questionRemaining = this.state.question.getTimeLimit() == 0 ? null : this.state.question.getTimeLimit() - questionCurrentDuration;
        
        var renderedPage = [];
        renderedPage.push(<p key="totalTimeRemaining">总时间剩余: {Math.round(remainingTime)}秒, 已答对{this.successNum}/{this.props.numToWin}题, 当前第{(this.state.currentNum + 1)}/{this.props.questions.length}题</p>);
        if(questionRemaining !== null){
            renderedPage.push(<p key="currentQuestionRemaining">当前题目剩余时间: {Math.round(questionRemaining)}秒</p>);
        }
        renderedPage.push(this.state.question.render());
        if(!this.state.question.showAnswer){
            renderedPage.push(<p key="showAnsRow" className="text-center"><button className="btn btn-primary" onClick={this.handleShowAnsClick}>显示答案</button></p>);
        }else{
            renderedPage.push(
                <p key="passNoPassRow" className="text-center">
                    <button className="btn btn-success" onClick={this.handleYesClick}>Pass</button> 
                    <button className="btn btn-danger" onClick={this.handleNoClick}>No Pass</button>
                </p>
            );
        }
        return <div> {renderedPage} </div>;
    }

    tick() {
        var dateObj = new Date();
        var currentMillis = dateObj.getTime() / 1000.0;
        var currentDuration = currentMillis - this.questionsStartTime;
        var remainingTime = this.props.totalDuration - currentDuration;
        if(remainingTime <= 0 && this.state.currentNum >= 0 && this.state.overallState === 0){
            this.setState(
                {
                    question: null,
                    overallState: 2
                }
            );
        }
        if(this.state.question !== null && this.state.question !== undefined){
            this.state.question.tick(currentMillis);
            var questionCurrentDuration = currentMillis - this.state.questionStartTime;
            var questionRemaining = this.state.question.getTimeLimit() == 0 ? null : this.state.question.getTimeLimit() - questionCurrentDuration;
            if(questionRemaining !== null && questionRemaining <= 0){
                this.goToNext(false);
            }
        }
        this.setState({timeMillis: currentMillis});
        //check if needs to go to another question
    }

    componentDidMount() { 
        this.timerID = setInterval(
            () => this.tick(),
            200
        );
    }
    componentWillUnmount() { 
        clearInterval(this.timerID);
    }

    goToNext(successful) {
        var newNum = this.state.currentNum+1;
        var newQuestion = null;
        var dateObj = new Date();
        var currentMillis = dateObj.getTime() / 1000.0;
        if(this.newNum > this.props.questions.length - 1 || this.props.questions === null || this.props.questions === undefined){
            newQuestion = null;
            newNum = -1;
        }else{
            newQuestion = this.props.questions[newNum];
        }

        if(newNum === 0){
            
            this.questionsStartTime = currentMillis;
        }

        this.setState(
            {
                currentNum: newNum,
                questionStartTime: currentMillis,
                question: newQuestion
            }
        );
        if(successful){
            this.successNum++;
        }
        if(this.props.question !== null){
            if(this.props.questions[newNum] === undefined){
                //All questions answered, done!
                this.setState(
                    {
                        overallState: 2
                    }
                );
            }
            if(this.successNum >= this.props.numToWin){
                this.setState(
                    {
                        overallState: 1
                    }
                );
            }
        }
    }
}