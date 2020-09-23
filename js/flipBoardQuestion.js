class FlipBoardTrivia extends TriviaQuestion{
    constructor(topic, title, keyword, durationLimit, timePerWordDisplay){
        super(topic);
        this.question = {
            title: title,
            keyword: keyword,
            durationLimit: durationLimit,
            timePerWordDisplay: timePerWordDisplay
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
        
        this.timeLastFlip = 0;
    }
    flipNext() {
        let totalLength = this.question.title.length + this.question.keyword.length;
        let availableLength = totalLength - this.showedAnswers.length;
        if(this.availableLength === 0){
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
        return <div key="question"><h2 key="questionTitle">{titleDisplay}</h2><h3 key="questionKeyword">{keywordDisplay}</h3></div>;
    }

    tick(millis){
        if(this.timeLastFlip === 0 || (millis-this.timeLastFlip) >= this.question.timePerWordDisplay){
            this.flipNext();
            if(this.timeLastFlip !== 0){
                this.timeLastFlip += this.question.timePerWordDisplay;
            }else{
                this.timeLastFlip = millis;
            }
        }
    }

    getTimeLimit(){
        return this.question.durationLimit;
    }

    getAnswer() {
        return <div key="answer"><h2 key="answerTitle">{this.question.title}</h2><h3 key="answerKeyword">{this.question.keyword}</h3></div>;
    }

    getAnswerStr() {
        return this.question.title + ":" + this.question.keyword;
    }
}