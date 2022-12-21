// get element
const canvas = document.querySelector('#canvas')

// set styles
canvas.width = 900
canvas.height = 800

// get context
const ctx = canvas.getContext('2d')

// mouse info
let targetPosition = {
    x: '',
    y: ''
}

// event listener
canvas.addEventListener('click', (e) => {
    targetPosition.x = e.x
    targetPosition.y = e.y
})

// the array to store all the hexagons
let hexagons = []

hexagons.push(new Hexagon(ctx, {x: 450, y: 400}, 200, ['rgb(74, 190, 105)', 'rgb(34, 81, 91)'], '肾', [], ''))
hexagons.push(new Hexagon(ctx, {
    x: 450,
    y: 100
}, 100, ['rgb(176, 35, 36)', 'rgb(101, 23, 25)'], '肾藏', ['志', '恐', '骨', '耳', '唾', '冬'], '志', '指肾主意志和记忆的功能。《灵枢本神》：意志所存为之志。志：意志和记忆。肾藏精，精舍志。肾精充盛，则表现为意志坚定，情绪稳定，有毅力，对外界事物有较强的分析识别和记忆能力。若肾精不足，则意志消沉，情感淡漠，对外界事物分析识别和记忆能力下降。'))
hexagons.push(new Hexagon(ctx, {
    x: 450,
    y: 700
}, 100, ['rgb(80, 172, 109)', 'rgb(51, 90, 88)'], '肾在志为', ['志', '恐', '骨', '耳', '唾', '冬'], '恐', '恐是肾精肾气对外在环境的应答而产生的恐惧害怕的情志活动。过度恐惧可导致恐伤肾，恐则气下等病理变化，出现二便失禁，甚则遗精滑精等症。'))
hexagons.push(new Hexagon(ctx, {
    x: 150,
    y: 250
}, 100, ['rgb(39, 103, 163)', 'rgb(21, 64, 89)'], '肾在体合', ['志', '恐', '骨', '耳', '唾', '冬'], '骨', '荣齿，其华在发：肾精具有生髓而充养骨骼的功能。肾精充足，骨髓生化有源，髓以养骨，则骨骼坚韧有力；若肾精不足，骨髓生化无源，骨骼失养，则可以出现小儿杏门迟闭，骨软无力，老年人骨质脆弱，易骨折等。\n' +
    '齿，为骨之延续，亦由肾中精气充养，故称“齿为骨之余”\n' +
    '发之色泽荣枯是肾脏功能的反应。发为血之余。由于肾藏精，精生血，精血旺盛，则毛发粗壮，浓密而润泽。\n'))
hexagons.push(new Hexagon(ctx, {
    x: 150,
    y: 550
}, 100, ['rgb(230, 240, 96)', 'rgb(126, 122, 67)'], '肾在窍为', ['志', '恐', '骨', '耳', '唾', '冬'], '耳', '肾精濡养于耳而维持听觉功能。人到老年，由于肾精及肾气衰少，多表现为听力减退。'))
hexagons.push(new Hexagon(ctx, {
    x: 750,
    y: 250
}, 100, ['rgb(224, 202, 110)', 'rgb(137, 119, 84)'], '肾在液为', ['志', '恐', '骨', '耳', '唾', '冬'], '唾', '唾为口津，具有润泽口腔，滋润食物及滋养肾精的作用。肾精在肾气的作用下，沿足少阴肾经到达舌下或齿缝，分泌津液而出则为唾。'))
hexagons.push(new Hexagon(ctx, {
    x: 750,
    y: 550
}, 100, ['rgb(170, 210, 108)', 'rgb(83, 106, 62)'], '肾应', ['志', '恐', '骨', '耳', '唾', '冬'], '冬', '肾五行属水，为阴中之阴，与冬气相通应。冬季属阴中之太阴，是一年中最寒冷的季节，自然界的物类，则静谧闭藏以度冬时。肾藏精而为封藏之本。'))

hexagons.forEach(hexagon => {
    hexagon.draw()
    hexagon.drawText()
})

let showQuestions = false

let questions = []
// fill in the blanks
questions.push(new Question(document.querySelector('.questions'), '(1)、肾气通于__，肾和则__能闻五音矣。—《灵枢•脉度》', '', ['耳'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(2)、北方生寒，寒生水，水生咸，咸生__，肾生骨髓，髓生肝，肾主耳。其在天为寒，在地为水，在体为骨，在脏为肾，在色为__（青赤黄白黑）在音为__（角徵宫商羽）在声为呻，在变动为栗，在窍为__（目舌口鼻耳）在味为__（酸苦甘辛咸）在志为__（怒喜思悲恐）—《素问•阴阳应象大论》', '', ['肾', '黑', '羽', '耳', '咸', '恐'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(3)、意之所存谓之__（魂神魄意志）肾盛__而不止则伤志，志伤则喜忘其前言。—《灵枢•本神》', '', ['志', '怒'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(4)、肾者，主蛰封藏之本，精之处也，其华在__，其充在骨，为阴中之少阴，通于__气。—《素问•六节藏象论》', '', ['发', '冬'], 'fillInTheBlank'))

// single choice
questions.push(new Question(document.querySelector('.questions'), '(5)、主司二便的脏是（ ）', ['肾', '脾', '小肠', '肺'], ['肾'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(6)、最易导致肾气不固的情志因素是（ ）', ['喜', '怒', '忧', '恐'], ['恐'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(7)、肾的主要生理功能是（ ）', ['主气', '纳气', '调气', '行气'], ['纳气'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(8)、《素问•水热穴论》称为“胃之关”的是（ ）', ['脾', '肾', '贲门', '幽门'], ['肾'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(9)、各脏阴阳的根本在于（ ）', ['肝', '心', '脾', '肾'], ['肾'], 'singleChoice'))

document.querySelector('#submitQuestions').addEventListener('click', () => {
    questions.forEach(question => {
        question.judge()
    })
})

document.querySelector('#redoQuestions').addEventListener('click', () => {
    questions.forEach(question => {
        question.redo()
    })
})

const f = (element) => {
    if (element.isCorrect) {
        return true
    } else {
        return false
    }
}

const animate = () => {
    requestAnimationFrame(animate)
    showQuestions = hexagons.every(f)
    hexagons.forEach(hexagon => {
        hexagon.update(targetPosition)
        document.querySelector('.questions').style.display = showQuestions ? 'block' : 'none'
    })
}

animate()