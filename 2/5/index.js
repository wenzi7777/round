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

hexagons.push(new Hexagon(ctx, {x: 450, y: 400}, 200, ['rgb(74, 190, 105)', 'rgb(34, 81, 91)'], '脾', [], ''))
hexagons.push(new Hexagon(ctx, {
    x: 450,
    y: 100
}, 100, ['rgb(176, 35, 36)', 'rgb(101, 23, 25)'], '脾藏', ['意', '思', '肉、四肢', '口、唇', '诞', '长夏、四时'], '意', '指脾具有思维、记忆、意念的功能。《灵枢·本神》：“心有所忆谓之意。”意，是将从外界获得的认识，经过思维取舍，保留下来形成回忆、意念的神志活动。《灵枢·本神》：“脾藏营，营舍意。”脾气健运，营气化源充足，气血充盈，即表现出思路清晰，意念丰富，记忆力强；反之，脾的功能失常，则善忘，呆钝。《中西汇通医经精义·上卷》：“脾阳不足则思虑短少，脾阴不足则记忆多忘。”'))
hexagons.push(new Hexagon(ctx, {
    x: 450,
    y: 700
}, 100, ['rgb(80, 172, 109)', 'rgb(51, 90, 88)'], '脾在志为', ['意', '思', '肉、四肢', '口、唇', '诞', '长夏、四时'], '思', '思，指思考、思虑。脾胃运化的水谷精微是思维活动的物质基础，故思为脾志。思又与心神有关，故有“思出于心，而脾应之”之说。思虑，是人皆有之的情志活动，对机体并无不良影响。但思虑过度，或所思不遂等情况下，则会影响机体正常的生理活动。脾气健运，化源充足，气血旺盛，则思虑、思考等心理活动正常。若脾虚则不耐思虑，思虑太过又易伤脾，致使脾胃之气结滞，脾气不能升清，胃气不能降浊，因而出现不思饮食、肮腹胀闷、头目眩晕等症状，即所谓“思伤脾”。'))
hexagons.push(new Hexagon(ctx, {
    x: 150,
    y: 250
}, 100, ['rgb(39, 103, 163)', 'rgb(21, 64, 89)'], '脾在体合，主', ['意', '思', '肉、四肢', '口、唇', '诞', '长夏、四时'], '肉、四肢', '肉，指肌肉，《内经》称为“分肉”。全身肌肉赖脾胃运化的水谷精微的营养滋润，才能壮实丰满，并发挥其运动功能，故说“脾在体合肉”。《素问·痿论》有“脾主身之肌肉”之论。张志聪注释《素问·五脏生成》明确指出：“脾主运化水谷之精，以生养肌肉，故主肉。”脾失健运，水谷精微生成和转输障碍，肌肉失养，必致瘦削，软弱无力，甚至痿废不用。临床上，肌肉痿废不用等疾患，常从脾胃治疗，如《素问·痿论》说“治痿独取阳明”。四肢与躯干相对而言，是人体之末，故又称“四末”。人体的四肢同样需要脾胃运化的水谷精微的营养滋润，以维持其正常的生理活动。脾气健运，则四肢营养充足，活动轻劲有力；若脾失健运，则四肢营养缺乏，可见倦怠无力，甚或痿废不用。所以《素问·太阴阳明论》说：“四肢皆禀气于胃而不得至经(径至)，必因于脾乃得禀也。今脾病不能为胃行其津液，四肢不得禀水谷气……筋骨肌肉皆无气以生，故不用焉。”\n'))
hexagons.push(new Hexagon(ctx, {
    x: 150,
    y: 550
}, 100, ['rgb(230, 240, 96)', 'rgb(126, 122, 67)'], '脾在窍为，其华在', ['意', '思', '肉、四肢', '口、唇', '诞', '长夏、四时'], '口、唇', '口主接纳和咀嚼食物，便于胃的受纳和腐熟。脾经“连舌本，散舌下”，食欲和口味均可反映脾的运化功能状态，故称“口为脾之窍”。脾气健运，则食欲旺盛，口味正常，如《灵枢·脉度》说：“脾气通于口、脾和则口能知五谷矣。”若脾气虚弱，则口淡乏昧；脾失健运，湿浊内生。则口中黏腻；饮食停滞，食积化热，则口臭。唇，指口唇。口唇受水谷精微及其化生气血的濡养，其色泽可以反映气血的盈亏、脾胃运化的强弱，故称“脾之华在唇”。如《素问·五脏生成》说：“脾之合，肉也；其荣，唇也。”《灵枢·五阅五使》说：“口唇者，脾之官也。”脾气健运，气血充足，则口唇红润光泽；脾失健运，则气血衰少，口唇淡白不泽。\n'))
hexagons.push(new Hexagon(ctx, {
    x: 750,
    y: 250
}, 100, ['rgb(224, 202, 110)', 'rgb(137, 119, 84)'], '脾在液为', ['意', '思', '肉、四肢', '口、唇', '诞', '长夏、四时'], '诞', '涎为口津，即睡液中较清稀的部分。由脾气布散脾精上溢于口而化生，故说“脾在液为涎”。挺具有保护口腔、润泽口腔的作用，在进食时分泌旺盛，以助食物的咀嚼和消化，故有“诞出手脾面溢于胃”之说。脾精、脾气充足，涎液化生适量，上行于口而不溢出口外。若脾胃不和，或脾气不摄，则导致涎液异常增多，可见口涎自出。若脾精亏虚，涎液分泌减少，则见口干舌燥。'))
hexagons.push(new Hexagon(ctx, {
    x: 750,
    y: 550
}, 100, ['rgb(170, 210, 108)', 'rgb(83, 106, 62)'], '脾应与脾主', ['意', '思', '肉、四肢', '口、唇', '诞', '长夏、四时'], '长夏、四时', '脾属土，与长夏相通应。长夏(夏至～处暑)之季，气候炎热，雨水较多，天气下迫，地气上腾，湿为热蒸，蕴酿生化，万物华实，合于土生万物之象；而人体的脾主运化，化生精气血津液，以奉生身，类于“土爱稼穑”之理，故脾与长夏，同气相求而相通应。长夏之湿虽主生化，而湿之太过，反困其脾，使脾运不展。故至夏秋之交，脾弱者易为湿伤，诸多湿病由此而起。又因时逢炎夏，湿与热兼，湿热交相为病，多见身热不扬、肢体困重、院闷不舒、纳呆泄泻等湿热交结不解等症状。治疗时应重在除湿，所谓“湿去热孤”。中医学理论中，亦有“脾主四时”之说，或称“脾不主时”。如《素问·太阴阳明论》说：“脾者土也，治中央，常以四时长四脏，各十八日寄治，不得独主于时也。”脾属土，居中央，主四时，以四季之末各十八日统领人体肝、心、肺、肾四脏，表明四时之中皆有土气，故脾不独主某一时令。人体生命活动的维持，依赖脾胃所化生的水谷精微的充养；心肺肝肾的生理功能，赖脾气及其化生的精微物质的支持。脾气健运，则四脏得养，功能正常发挥，人体康健，正气充足，不易得病，既病也易于康复，即所谓“四季脾旺不受邪”。\n'))

hexagons.forEach(hexagon => {
    hexagon.draw()
    hexagon.drawText()
})

let showQuestions = false

let questions = []
// fill in the blanks
questions.push(new Question(document.querySelector('.questions'), '(1)、心有所忆谓之( ) ', '', ['意'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(2)、脾藏（ ），脾在志为（ ），脾在体合（ ），主（ ），脾在窍为（ ），其华在（ ），脾在液为（ )。', '', ['意', '思', '肉', '四肢', '口', '唇', '诞'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(3)、脾应（ ）与脾主（ ）', '', ['长夏', '四时'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(4)、四肢皆禀气于（ ）而不得至经( )，必因于（ ）乃得禀也。今（ ）病不能为（ ）行其津液，（ ）不得禀水谷气……筋骨肌肉皆无气以生，故不用焉。（《素问·太阴阳明论》）', '', ['胃', '径至', '脾', '脾', '胃', '四肢'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(5)、脾主（ ）水谷之精，以生养肌肉，故主（ ）。---（《素问·太阴阳明论》）', '', ['运化', '肉'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(6)、脾气通于（ ）、脾和则口能知五谷矣。（《灵枢·脉度》）', '', ['口'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(6)、口唇者，（ ）之官也。（《灵枢·五阅五使》）', '', ['脾'], 'fillInTheBlank'))
questions.push(new Question(document.querySelector('.questions'), '(6)、脾者（ ）也，治（ ），常以四时长四脏，各十八日寄治，不得独主于时也。', '', ['土', '中央'], 'fillInTheBlank'))

// single choice
questions.push(new Question(document.querySelector('.questions'), '(7)、主统血的是（ ）', ['肾', '脾', '小肠', '肺'], [''], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(8)、脾之华在（ ）', ['面', '毛', '唇', '爪'], [''], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(9)、脾的主要生理功能是（ ）', ['藏血', '统血', '血脉'], [''], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(10)、脾主运化是指脾能够（ ）', ['运化水液', '运化水谷', '化生血液', '化生气血', '运化水谷和水液'], ['运化水谷和水液'], 'singleChoice'))
questions.push(new Question(document.querySelector('.questions'), '(11)、心有所忆谓之（ ）', ['意', '志', '思', '虑'], [''], 'singleChoice'))

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