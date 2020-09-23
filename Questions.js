const Areas = [
    new FlipBoardTrivia("城市","长沙","茶颜悦色", 120, 15),
    new FlipBoardTrivia("城市","上海","东方明珠",120,15),
    new FlipBoardTrivia("城市","北京", "天安门", 120, 15),
    new FlipBoardTrivia("城市","成都","火锅",120,15),
    new FlipBoardTrivia("城市","武汉","周黑鸭",120,15),
    new FlipBoardTrivia("城市","深圳","南山必胜客",120,15),
    new FlipBoardTrivia("城市","广州","小蛮腰",120,15)
];
const Colleges = [
    new FlipBoardTrivia("大学","哈佛","哈尔滨佛学院",120,15),
    new FlipBoardTrivia("大学","埃默里","可口可乐大学",120,15),
    new FlipBoardTrivia("大学","伯克利","熊孩子",120,15),
    new FlipBoardTrivia("大学","UCLA","比弗利山庄",120,15),
    new FlipBoardTrivia("大学","NYU","自由女神像",120,15),
    new FlipBoardTrivia("大学","UIUC","香槟分校",120,15),
    new FlipBoardTrivia("大学","北大","清华",120,15),
    new FlipBoardTrivia("大学","哈工大","规格严格 功夫到家",120,15),
    new FlipBoardTrivia("大学","西雅图大学","当北京遇到西雅图",120,15),
    new FlipBoardTrivia("大学","复旦大学","老番茄",120,15),
    new FlipBoardTrivia("大学","交通大学","蛤大",120,15),
    new FlipBoardTrivia("大学","斯坦福","伯克利下面",120,15),
    new FlipBoardTrivia("大学","UCSD","伯克利上面",120,15),
    new FlipBoardTrivia("大学","伯克利音乐学院","欧阳娜娜",120,15)
];
const Berkeley_Relates = [
    new FlipBoardTrivia("伯克利相关","Dead Week","裸奔",120,10),
    new FlipBoardTrivia("伯克利相关","Big Game Dress Code","Blue and Gold",120,10),
    new FlipBoardTrivia("伯克利相关","伯克利校歌","Hail to California",120,10),
    new FlipBoardTrivia("伯克利相关","诺贝尔奖","停车位",120,15)
];

const Movies = [
    new FlipBoardTrivia("电影","哪吒之魔童降世","我命由我不由天",75,15),
    new FlipBoardTrivia("电影","西红市首富","燃烧我的卡路里",75,15),
    new FlipBoardTrivia("电影","那些年我们一起追过的女孩","孔明灯",75,15),
    new FlipBoardTrivia("电影","寻梦环游记","奶奶",75,30),
    new FlipBoardTrivia("电影","寻龙诀","鬼吹灯",75,30),
    new FlipBoardTrivia("电影","喜剧之王","演员的自我修养",75,20),
    new FlipBoardTrivia("电影","大话西游之大圣娶亲","紫霞仙子",75,15),
    new FlipBoardTrivia("电影","红高粱","妹妹你大胆的向前走",75,10),
    new FlipBoardTrivia("电影","流浪地球","道路千万条 安全第一条",75,10),
    new FlipBoardTrivia("电影","流浪地球","行车不规范 亲人两行泪",75,10),
    new FlipBoardTrivia("电影","青蛇","法海",75,15),
    new FlipBoardTrivia("电影", "红高粱", "妹妹你大胆向前走",75,15),

]

const Musics = [
    new FlipBoardTrivia("音乐","凉凉","三生三世十里桃花",60,10),
    new FlipBoardTrivia("音乐","EIEI","百分九少年",60,10),
    new FlipBoardTrivia("音乐","情人","危险又迷人",60,10),
    new FlipBoardTrivia("音乐","江南","圈圈圆圆圈圈",60,10),
    new FlipBoardTrivia("音乐","明天你要嫁给我","手牵手 跟我一起走",60,10),
    new FlipBoardTrivia("音乐","如果这就是爱情","张靓颖",60,10),
    new FlipBoardTrivia("音乐","因为爱情","所以一切都是幸福的模样",60,10),
]

function generateRandomList(allLists, needNum){
    var allLengths = 0;
    for(var i=0; i<allLists.length;i++){
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