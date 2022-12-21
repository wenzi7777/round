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

hexagons.push(new Hexagon(ctx, {x: 450, y: 400}, 200, ['rgb(74, 190, 105)', 'rgb(34, 81, 91)'], '肺', [], ''))
hexagons.push(new Hexagon(ctx, {
    x: 450,
    y: 100
}, 100, ['rgb(176, 35, 36)', 'rgb(101, 23, 25)'], '肺藏', ['魄', '忧', '皮', '鼻', '涕', '秋'], '魄', '《灵枢本神》：并精而出入者谓之魄，魄藏于气，由肺所主，肺气充盛，则体魄健壮；肺气虚弱，则言语无力，做事缺乏魄力，治疗当补精益气，使肺气充盛，以恢复健康的体魄和充沛的精力。'))
hexagons.push(new Hexagon(ctx, {
    x: 450,
    y: 700
}, 100, ['rgb(80, 172, 109)', 'rgb(51, 90, 88)'], '肺在志为', ['魄', '忧', '皮', '鼻', '涕', '秋'], '忧', '悲忧过度，可损伤肺气，出现呼吸气短等现象。悲则气消。反之，肺气虚弱或肺气宣降失调，机体对外来刺激耐受能力下降，也易于产生悲忧的情绪变化。'))
hexagons.push(new Hexagon(ctx, {
    x: 150,
    y: 250
}, 100, ['rgb(39, 103, 163)', 'rgb(21, 64, 89)'], '肺在体合', ['魄', '忧', '皮', '鼻', '涕', '秋'], '皮', '其华在毛。皮毛为一身之表，具有防御外邪，调节津液代谢与体温，以及辅助呼吸的作用。毛附于皮，故常皮毛合称。肺与皮毛存在相互为用关系，故称肺合皮毛。'))
hexagons.push(new Hexagon(ctx, {
    x: 150,
    y: 550
}, 100, ['rgb(230, 240, 96)', 'rgb(126, 122, 67)'], '肺在窍为', ['魄', '忧', '皮', '鼻', '涕', '秋'], '鼻', '喉为肺之门户。肺主呼吸，鼻是呼吸的通道，为呼吸道的最上端，肺通过鼻与自然界相贯通，肺之经脉与鼻相连，肺的生理和病理状况，可由鼻反应出来，故称肺开窍于鼻。鼻的主要生理功能是主通气和主嗅觉。肺津充足，肺气通畅，鼻窍得养而通利，嗅觉灵敏；肺津亏虚，肺失宣发，则鼻桥失润而干燥，或鼻塞不通，嗅觉迟钝。临床治疗鼻干生疮，嗅觉失常，多用滋养肺津以润燥之法，治疗鼻塞流涕，嗅觉失常，多用辛散宣肺之法。肺主呼吸，喉为呼吸之门户，手太阴肺经循咽喉而行 加强了肺与咽喉的联系。肺津充足，喉得滋养，或肺气充沛，宣降协调，则呼吸通畅，声音洪亮。若各种内伤或过用，耗损肺津，肺气，已至喉失滋养或推动，发音失常，出现声音嘶哑，低微，称为金破不鸣，治以津气双补；若外邪袭肺，导致肺气宣降失常，壅滞不畅，出现咽喉不利，声音嘶哑重浊，甚或失音，称为金实不破，治以宣肺袪邪。\n'))
hexagons.push(new Hexagon(ctx, {
    x: 750,
    y: 250
}, 100, ['rgb(224, 202, 110)', 'rgb(137, 119, 84)'], '肺在液为', ['魄', '忧', '皮', '鼻', '涕', '秋'], '涕', '涕，即鼻涕，有润泽鼻窍，防御外邪，利于呼吸的作用。鼻涕由肺津所化，有赖于肺气的宣发。'))
hexagons.push(new Hexagon(ctx, {
    x: 750,
    y: 550
}, 100, ['rgb(170, 210, 108)', 'rgb(83, 106, 62)'], '肺应', ['魄', '忧', '皮', '鼻', '涕', '秋'], '秋', '秋季，暑去而凉生，草木皆凋，属阳中之阴的少阴，人体肺气清肃下降，同气相求，应秋而旺。秋季也多肺系病变，故说肺与秋季相通应。'))

hexagons.forEach(hexagon => {
    hexagon.draw()
    hexagon.drawText()
})

let showQuestions = false

let questions = []
// fill in the blanks
questions.push(new Question(document.querySelector('.questions'), '(1)、肺气通于__，肺和则___能知臭香矣。—《灵枢•脉度》', '', ['鼻', '鼻'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(2)、西方生燥，燥生__，金生辛，辛生__，肺生皮毛，皮毛生肾，肺主鼻。其在天为燥，在地为金，在体为皮毛，在脏为肺，在色为__，在音为商，在声为哭，在变动为咳，在窍为__，在味为__，在志为___—《素问•阴阳应象大论》', '', ['金', '肺', '白', '鼻', '辛', '悲'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(3)、并精而出入者谓之__（魂 神 魄 意 志）—《灵枢•本神》', '', ['魄'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(4)、五脏化液，心为__，肺为__，肝为___，脾为__，肾为__，是谓五液。—《素问•宣明五气篇》', '', ['汗', '涕', '泪', '涎', '唾'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(5)、___三月，早卧早起，与鸡俱兴。—《素问•四气调神大论》', '', ['秋'], 'fillInTheBlank'))

// single choice
questions.push(new Question(document.querySelector('.questions'), '(7)、肺的生理功能是（ ）', ['主气', '调气', '行气', '纳气'], ['主气'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(8)、将水谷精微布散于皮毛的脏是（ ）', ['心', '肺', '脾', '肝'], ['肺'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(9)、下列哪项有误（ ）', ['心在体合脉', '肺在体合鼻', '脾在体合肉', '肝在体合筋', '肾在体合骨'], ['肺在体合鼻'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(10)、肺朝百脉主要是指（ ）', ['百脉由肺统帅', '肺将血液输送至全身', '百脉之血汇聚于肺，经气体交换，输布全身', '百脉汇聚于肺', '其功能与心主血脉一样'], ['百脉之血汇聚于肺，经气体交换，输布全身'], 'singleChoice'))

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