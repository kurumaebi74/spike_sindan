document.getElementById('answer-area').style.display = 'none';
let judgeNum = 0;
let Num = 0;
let judgelist = []
const questionTagObj = document.getElementById('question-text');
// 質問リスト
const questionList = [{
        question: '短距離？'
    },
    {
        question: 'なんか飛んだりする？'
    },
    {
        question: '曲がるのは好き'
    },
    {
        question: 'ドMである'
    }
];

questionTagObj.innerText = questionList[0].question;

function clickYes() {
    judgelist[judgeNum] = 1
    judgeNum++;
    if (judgeNum == questionList.length) {
        if (JSON.stringify(judgelist) == JSON.stringify([0,0,0,0])) {
            questionTagObj.innerText = "長距離とかフィールドの人は興味ないんだ"
        } else if (JSON.stringify(judgelist) == JSON.stringify([0,0,0,0])) {
            questionTagObj.innerText = "50m走とかやってるの（笑）"
        } else if (JSON.stringify(judgelist) == JSON.stringify([0,0,0,0])) {
            questionTagObj.innerText = "110mH"
        } else if (JSON.stringify(judgelist) == JSON.stringify([1,1,1,1])) {
            questionTagObj.innerText = "400mH"
        } else if (JSON.stringify(judgelist) == JSON.stringify([0,0,0,0])) {
            questionTagObj.innerText = "100m"
        } else if (JSON.stringify(judgelist) == JSON.stringify([0,0,0,0])){
            questionTagObj.innerText = "往復層が好きな人ですかね"
        } else if (JSON.stringify(judgelist) == JSON.stringify([0,0,0,0])) {
            questionTagObj.innerText = "400m"
        } else {
            questionTagObj.innerText = "かけっこクラブ"
        };
    } else {
        questionTagObj.innerText = questionList[judgeNum].question;
    };
};

function clickNo() {
    judgeNum++;
    if (judgeNum == questionList.length) {
        if (Num == 0) {
            questionTagObj.innerText = "長距離とかフィールドの人は興味ないんだ"
        } else if (Num == 1) {
            questionTagObj.innerText = "50m走とかやってるの（笑）"
        } else if (Num == 3) {
            questionTagObj.innerText = "110mH"
        } else if (Num == 10) {
            questionTagObj.innerText = "400mH"
        } else if (Num == 4) {
            questionTagObj.innerText = "100m"
        } else if (Num == 8) {
            questionTagObj.innerText = "往復層が好きな人ですかね"
        } else if (Num == 5) {
            questionTagObj.innerText = "400m"
        } else {
            questionTagObj.innerText = "かけっこクラブ"
        };
    } else {
        questionTagObj.innerText = questionList[judgeNum].question;
    };
};