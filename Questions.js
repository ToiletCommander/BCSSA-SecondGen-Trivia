const Areas = [
    new FlipBoardTrivia("城市","长沙","茶颜悦色", 120, 2),
    new FlipBoardTrivia("城市","上海","东方明珠",120,2),
    new FlipBoardTrivia("城市","北京", "天安门", 120, 2),
    new FlipBoardTrivia("城市","成都","火锅",120,1),
    new FlipBoardTrivia("城市","武汉","周黑鸭",120,1),
    new FlipBoardTrivia("城市","深圳","南山必胜客",120,2),
    new FlipBoardTrivia("城市","广州","小蛮腰",120,2),
    new QuestionAns("城市","一望无际的大地","广州",40),
    new QuestionAns("城市","萤火虫, 亮晶晶", "昆明", 40),
    new QuestionAns("城市","双喜临门","重庆",40),
    new QuestionAns("城市","大力士","武汉",40),
    new QuestionAns("城市","春水碧如蓝","青海",40),
    new QuestionAns("城市","千里戈壁","长沙",40),
    new QuestionAns("城市","两个胖子摔跤","合肥",40),
    new QuestionAns("城市","东方有战事","西安",40),
    new QuestionAns("城市","船出长江口","上海",40),
    new QuestionAns("城市","金银铜铁铝","无锡",40)
];
const Colleges = [
    new FlipBoardTrivia("大学","哈佛","哈尔滨佛学院",120,2),
    new FlipBoardTrivia("大学","埃默里","可口可乐大学",120,2),
    new FlipBoardTrivia("大学","伯克利","熊孩子",120,1),
    new FlipBoardTrivia("大学","UCLA","比弗利山庄",120,2),
    new FlipBoardTrivia("大学","NYU","自由女神像",120,2),
    new FlipBoardTrivia("大学","UIUC","香槟分校",120,1),
    new FlipBoardTrivia("大学","北京大学","清华",120,1),
    new FlipBoardTrivia("大学","哈尔滨工业大学","规格严格 功夫到家",120,3),
    new FlipBoardTrivia("大学","西雅图大学","当北京遇到西雅图",120,3),
    new FlipBoardTrivia("大学","复旦大学","老番茄",120,1),
    new FlipBoardTrivia("大学","交通大学","蛤大",120,1),
    new FlipBoardTrivia("大学","斯坦福","伯克利下面",120,2),
    new FlipBoardTrivia("大学","UCSD","伯克利上面",120,2),
    new FlipBoardTrivia("大学","伯克利音乐学院","欧阳娜娜",120,1)
];
const Berkeley_Relates = [
    new FlipBoardTrivia("伯克利相关","Dead Week","裸奔",120,2),
    new FlipBoardTrivia("伯克利相关","Big Game Dress Code","Blue and Gold",120,1),
    new FlipBoardTrivia("伯克利相关","伯克利校歌","Hail to California",120,2),
    new FlipBoardTrivia("伯克利相关","停车位","诺贝尔奖专属",120,3),
    new MCQuestion("伯克利相关","Campanile(Sather) Tower是全世界第几高的钟楼?",["第一高", "第三高", "第五高", "第七高"],"第三高",40),
    new MCQuestion("伯克利相关","Bancroft Library收藏了多少本书?",["10万","1千万","1百万","2千万"],"1千万",40),
    new MCQuestion("伯克利相关","伯克利提供多少种第二语言的学习?",["11","213",">=50","大约100"],">=50",40)
];

const Movies = [
    new FlipBoardTrivia("电影","哪吒之魔童降世","我命由我不由天",75,2),
    new FlipBoardTrivia("电影","西红市首富","燃烧我的卡路里",75,1),
    new FlipBoardTrivia("电影","那些年我们一起追过的女孩","孔明灯",75,1),
    new FlipBoardTrivia("电影","寻梦环游记","奶奶",75,1),
    new FlipBoardTrivia("电影","寻龙诀","鬼吹灯",75,1),
    new FlipBoardTrivia("电影","喜剧之王","演员的自我修养",75,1),
    new FlipBoardTrivia("电影","大话西游之大圣娶亲","紫霞仙子",75,1),
    new FlipBoardTrivia("电影","红高粱","妹妹你大胆的向前走",75,2),
    new FlipBoardTrivia("电影","流浪地球","道路千万条 安全第一条",75,1),
    new FlipBoardTrivia("电影","流浪地球","行车不规范 亲人两行泪",75,1),
    new FlipBoardTrivia("电影","青蛇","法海",75,1)
]

const Musics = [
    new FlipBoardTrivia("音乐","凉凉","三生三世十里桃花",60,1),
    new FlipBoardTrivia("音乐","EIEI","百分九少年",60,2),
    new FlipBoardTrivia("音乐","情人","危险又迷人",60,1),
    new FlipBoardTrivia("音乐","江南","圈圈圆圆圈圈",60,2),
    new FlipBoardTrivia("音乐","明天你要嫁给我","手牵手 跟我一起走",60,1),
    new FlipBoardTrivia("音乐","如果这就是爱情","张靓颖",60,1),
    new FlipBoardTrivia("音乐","因为爱情","所以一切都是幸福的模样",60,1)
]

function generateRandomList(allLists, needNum){
    let allLengths = 0;
    for(let i=0; i<allLists.length;i++){
        allLengths+=allLists[i].length;
    }
    console.log("data length: " + allLengths);
    if(needNum > allLengths){
        return undefined;
    }
    let usedIndexes = new Array();
    let generatedArr = new Array();
    while(usedIndexes.length < needNum){
        let randomNum = Math.floor(Math.random() * allLengths);
        if(usedIndexes.includes(randomNum)){
            continue;
        }
        generatedArr.push(getListIndexVal(allLists,randomNum));
        usedIndexes.push(randomNum);
    }
    return generatedArr;
}
function getListIndexVal(allLists, index){
    let CurrentNum = 0;
    for(let i=0;i<allLists.length;i++){
        if(CurrentNum + allLists[i].length > index){
            return allLists[i][index-CurrentNum];
        }
        CurrentNum+=allLists[i].length;
    }
    return undefined;
}