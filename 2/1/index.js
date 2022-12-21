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

hexagons.push(new Hexagon(ctx, {x: 450, y: 400}, 200, ['rgb(74, 190, 105)', 'rgb(34, 81, 91)'], '心', [], ''))
hexagons.push(new Hexagon(ctx, {
    x: 450,
    y: 100
}, 100, ['rgb(176, 35, 36)', 'rgb(101, 23, 25)'], '心藏', ['神', '汗', '舌', '脉', '笑', '喜'], '神', '《灵枢·口问》："心者，五脏六腑之大主也，精神之所舍也。"'))
hexagons.push(new Hexagon(ctx, {
    x: 450,
    y: 700
}, 100, ['rgb(80, 172, 109)', 'rgb(51, 90, 88)'], '心在体合', ['神', '汗', '舌', '脉', '笑', '喜'], '脉', '《素问·五脏生成》："心之合，脉也；其荣，色也。"'))
hexagons.push(new Hexagon(ctx, {
    x: 150,
    y: 250
}, 100, ['rgb(39, 103, 163)', 'rgb(21, 64, 89)'], '心在液为', ['神', '汗', '舌', '脉', '笑', '喜'], '汗', '《素问·宣明五气》："五脏化液，心为汗。"'))
hexagons.push(new Hexagon(ctx, {
    x: 150,
    y: 550
}, 100, ['rgb(230, 240, 96)', 'rgb(126, 122, 67)'], '心在窍为', ['神', '汗', '舌', '脉', '笑', '喜'], '舌', '《灵枢·脉度》："心气通与舌，心合则舌能知无味矣。"<br />《灵枢·忧患无言》："舌者，音点之机也。"'))
hexagons.push(new Hexagon(ctx, {
    x: 750,
    y: 250
}, 100, ['rgb(224, 202, 110)', 'rgb(137, 119, 84)'], '心在志为', ['神', '汗', '舌', '脉', '笑', '喜'], '喜', '《素问·阴阳应象大论》："在脏为心......在志为喜。"<br />《素问·举痛论》："喜则气和志达，荣卫通利。"'))
hexagons.push(new Hexagon(ctx, {
    x: 750,
    y: 550
}, 100, ['rgb(170, 210, 108)', 'rgb(83, 106, 62)'], '心在声为', ['神', '汗', '舌', '脉', '笑', '喜'], '笑', '《素问·阴阳应象大论》："在脏为心......在声为笑"'))

hexagons.forEach(hexagon => {
    hexagon.draw()
    hexagon.drawText()
})

let showQuestions = false

let questions = []
// fill in the blanks
questions.push(new Question(document.querySelector('.questions'), '(1)、__者，五脏六腑之大主也，精神之所舍也。 《灵枢.口问》', '', ['心'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(2)、南方生热，热生火，火生苦，苦生¬__，心生血，血生脾，心主舌。其在天为热，在地为火，在体为脉，在藏为心，在色为赤，在音为__，在声为笑，在变动为__，在窍为舌，在味为苦，在志为__，喜伤心，__胜喜；热伤气，寒胜热，苦伤气，咸胜苦。《素问·阴阳应象大论》', '', ['心', '徵', '忧', '喜', '恐'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(3)、心之合，__也；其荣，__也。《素问·五藏生成》', '', ['脉', '色'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(4)、心气通于__，心和则舌能知五味矣。 《灵枢·脉度》', '', ['舌'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(5)、五脏化液：心为__。《素问·宣明五气》', '', ['汗'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(6)、__者，君主之官也，神明出焉。《素问·灵兰秘典论》', '', ['心'], 'fillInTheBlank'))

// single choice
questions.push(new Question(document.querySelector('.questions'), '(7)、据《灵枢•邪客》所述，“五藏六府之大主”的藏是（ ）', ['心', '肝', '脾', '肺', '肾'], ['心'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(8)、《灵枢•本神》篇指出，心藏脉，脉舍（ ）', ['志', '魄', '神', '意', '婚'], ['神'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(9)、《素问•灵兰秘典论》指出心的主要生理功能是（ ）', ['谋虑出焉', '伎巧出焉', '神明出焉', '喜乐出焉', '治节出焉'], ['神明出焉'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(10)、《素问·宣明五气》中，五脏化液：心为（ ）', ['泪', '汗', '涎', '涕', '唾'], ['汗'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(11)、《素问·阴阳应象大论》中，心在窍（ ）', ['目', '舌', '口', '鼻', '耳'], ['舌'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(12)、《素问·阴阳应象大论》中，心在志为（ ）', ['怒', '思', '悲', '喜', '恐'], ['喜'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(13)、《素问·阴阳应象大论》中，心在体合（ ）', ['皮', '骨', '筋', '脉', '肉'], ['脉'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(14)、《黄帝内经》中，心五行属（ ）', ['木', '水', '土', '金', '火'], ['火'], 'singleChoice'))

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