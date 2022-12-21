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

hexagons.push(new Hexagon(ctx, {x: 450, y: 400}, 200, ['rgb(74, 190, 105)', 'rgb(34, 81, 91)'], '肝', [], ''))
hexagons.push(new Hexagon(ctx, {
    x: 450,
    y: 100
}, 100, ['rgb(176, 35, 36)', 'rgb(101, 23, 25)'], '肝藏', ['魂', '怒', '筋', '爪', '目', '泪'], '魂', '指肝主意识，思维活动以及梦幻活动。魂乃神之变，属神志活动的范畴。一是指伴随心神活动而做出的反应意识、思维活动，《灵枢 本神》：“随神往来者谓之魂”。二是指梦幻活动，《类经•藏象类》；“魂之言，如梦寐忧惚，令幻游行之境，皆是也。”魂由肝血化生和涵养，《灵枢 本神》：“肝藏血，血舍魂”'))
hexagons.push(new Hexagon(ctx, {
    x: 450,
    y: 700
}, 100, ['rgb(80, 172, 109)', 'rgb(51, 90, 88)'], '肝在志为', ['魂', '怒', '筋', '爪', '目', '泪'], '怒', '怒是人在情经激动时的反应状态，人皆有之。怒以肝之气血为生理基础，故肝之气血失调常可引起怒的情志改变。《素问•调经论）说：“血有余则怒。”《灵枢•本神》说：“肝气虚则恐．实则怒，当肝气过亢，或肝阴不足，肝阳偏亢时，常可表现出易于激动，情绪失控，易于发怒。肝气虚、肝血不足，则易产生郁怒之变。\n'))
hexagons.push(new Hexagon(ctx, {
    x: 150,
    y: 250
}, 100, ['rgb(39, 103, 163)', 'rgb(21, 64, 89)'], '肝在体合', ['魂', '怒', '筋', '爪', '目', '泪'], '筋', '筋，附着于骨而聚于关节，具有连接关节、肌肉，主司关节运动的功能。筋依赖肝血和旺气的滥养，压血充足。筋得其养，运动灵活而有力，《素问•阴阳应象大论》称为“肝生筋”'))
hexagons.push(new Hexagon(ctx, {
    x: 150,
    y: 550
}, 100, ['rgb(230, 240, 96)', 'rgb(126, 122, 67)'], '其华在', ['魂', '怒', '筋', '爪', '目', '泪'], '爪', '即爪甲。包括指甲和趾甲，乃筋之延续，故有“爪为筋之余”之说。《素问•六节藏象论》说：“肝者……其华在爪，爪甲依赖肝血和肝气的荣养，肝血、肝气的盛衰及其作用的强弱，可从爪甲的色泽和形态上表现出来。肝血充足，则爪甲坚韧，红润光泽；肝血不足，则爪甲萎软而薄，枯而色夭，甚则变形、脆裂。'))
hexagons.push(new Hexagon(ctx, {
    x: 750,
    y: 250
}, 100, ['rgb(224, 202, 110)', 'rgb(137, 119, 84)'], '肝在窍为', ['魂', '怒', '筋', '爪', '目', '泪'], '目', '目，又称“精明”为视觉器官，目的视觉功能，主要依赖肝血的濡养和肝气的疏泄。《素问•五脏生成篇》说：“肝之受血而能视”。《灵枢脉度》说“肝气通于目，肝和则目能视无色矣”。《灵枢•经脉》说：“肝足厥阴之脉......连目系。”肝血充足，肝气调和，循经上注眼目，则目能视物辨色。若肝阴、肝血不足，则易导致两目干涩、视物不清、目眩、目眶疼痛等症；肝经风热则见目赤疼痛；肝风内动则见目睛上吊、两目斜视；因情志不畅，致肝气郁结，久而火动生痰，蒙蔽清窍，可致两目昏蒙，视物不清。'))
hexagons.push(new Hexagon(ctx, {
    x: 750,
    y: 550
}, 100, ['rgb(170, 210, 108)', 'rgb(83, 106, 62)'], '肝在液为', ['魂', '怒', '筋', '爪', '目', '目'], '目', '泪从目出,由肝精、肝血经肝气疏泄于目而化生,有濡润眼球、保护眼睛的功能。肝脏功能失调常可导致泪液的分泌、排泄异常。如肝血不足,可见两目干涩;肝经风热或肝经湿热,则见目睁增多、迎风流泪等。'))

hexagons.forEach(hexagon => {
    hexagon.draw()
    hexagon.drawText()
})

let showQuestions = false

let questions = []
// fill in the blanks
questions.push(new Question(document.querySelector('.questions'), '(1)、肝藏（），肝在志为（），肝在体合（），其华在（），肝在窍为（），肝在液为（），肝应（）', '', ['魂', '怒', '筋', '爪', '目', '泪', '春'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(2)、随神往来者谓之（）（《灵枢 本神》）', '', ['魂'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(3)、肝藏（），血舍（）（《灵枢 本神》）', '', ['血', '魂'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(4)、血有余则（）', '', ['怒'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(5)、肝气虚则（）．实则（）', '', ['恐', '怒'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(6)、（）为筋之余', '', ['爪'], 'fillInTheBlank'))

// single choice
questions.push(new Question(document.querySelector('.questions'), '(7)、具有调节血量作用的脏是（ ）', ['心', '脾', '肝', '血脉', '肺'], ['肝'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(8)、肝的疏泄功能主要表现在（ ）', ['调畅气机', '促进脾胃的运化功能和胆汁的分泌排泄', '调畅情志', '女子的排卵和月经来潮、男子的排精', '以上都是'], ['以上都是'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(9)、在窍为目的是（ ）', ['肝', '心', '脾', '肺', '肾'], ['肝'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(10)、肝的主要生理功能是（ ）', ['疏泄', '运化', '通畅水道', '封藏'], ['疏泄'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(11)、主藏血的脏是（ ）', ['心', '脾', '肝', '肾'], ['肝'], 'singleChoice'))

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