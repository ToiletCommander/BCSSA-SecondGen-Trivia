class FlipBoardTrivia extends TriviaQuestion{
    constructor(topic, title, keyword, durationLimit, startWithPromptNum){
        super(topic);
        this.question = {
            title: title,
            keyword: keyword,
            durationLimit: durationLimit,
            timePerWordDisplay: 20
        };
        
        this.showedAnswers = [];
        for(let i=0;i<title.length;i++){
            if(title[i] === ' '){
                this.showedAnswers.push(i);
            }
        }
        for(let i=0;i<keyword.length;i++){
            let indexToStore = i + title.length;
            if(keyword[i] === ' '){
                this.showedAnswers.push(indexToStore);
            }
        }
        for(let i=0; i<startWithPromptNum;i++){
            this.flipNext();
        }
        let totalLength = this.question.title.length + this.question.keyword.length;
        let availableLength = totalLength - this.showedAnswers.length;
        this.question.timePerWordDisplay = this.question.durationLimit / availableLength;
        
        this.timeLastFlip = 0;
    }
    flipNext() {
        let totalLength = this.question.title.length + this.question.keyword.length;
        let availableLength = totalLength - this.showedAnswers.length;
        if(availableLength === 0){
            this.showAnswer = true;
            return;
        }
        let randomNum = Math.floor(Math.random() * availableLength);
        let availableIndexes = new Array();
        for(let i=0; i < totalLength; i++){
            if(!this.showedAnswers.includes(i)){
                availableIndexes.push(i);
            }
        }
        this.showedAnswers.push(availableIndexes[randomNum]);
    }

    getQuestion() {
        if(this.showAnswer){
            return;
        }
        let titleDisplay = "";
        for(let i=0; i<this.question.title.length;i++){
            if(this.showedAnswers.includes(i)){
                titleDisplay += this.question.title[i];
            }else{
                titleDisplay += "✖";
            }
        }
        let keywordDisplay = "";
        for(let i=0; i<this.question.keyword.length;i++){
            let currentIndex = i + this.question.title.length;
            if(this.showedAnswers.includes(currentIndex)){
                keywordDisplay += this.question.keyword[i];
            }else{
                keywordDisplay += "✖";
            }
        }
        return <div key="question"><h1 key="questionTitle">{titleDisplay}</h1><h2 key="questionKeyword">{keywordDisplay}</h2></div>;
    }

    tick(millis){
        if(this.timeLastFlip !== 0 && (millis-this.timeLastFlip) >= this.question.timePerWordDisplay){
            this.flipNext();
            this.timeLastFlip += this.question.timePerWordDisplay;
        }else if(this.timeLastFlip === 0){
            this.timeLastFlip = millis;
        }
    }

    getTimeLimit(){
        return this.question.durationLimit;
    }

    getAnswer() {
        return <div key="answer"><h1 key="answerTitle">{this.question.title}</h1><h2 key="answerKeyword">{this.question.keyword}</h2></div>;
    }

    getAnswerStr() {
        return this.question.title + ":" + this.question.keyword;
    }
}