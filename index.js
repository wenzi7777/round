class Select {
    constructor(rootElement, position, rotate, items) {
        this.rootElement = rootElement
        this.itemsHtmlCode = '<option value="default">【】</option>'
        items.forEach(item => {
            this.itemsHtmlCode += `<option value="${item}">${item}</option>`
        })
        this.htmlCode = `<select style="left: ${position.left + 'px'}; top: ${position.top + 'px'}; rotate: ${rotate}deg">${this.itemsHtmlCode}</select>`
    }
    mount() {
        this.rootElement.insertAdjacentHTML('beforeend', this.htmlCode)
    }
}

// store all selectors
let selects = []

// create them
selects.push(new Select(document.body, {left: 634, top: 175}, 5, ['豆', '咸', '冬', '膀胱', '水', '呻', '寒', '黑', '唾', '恐', '耳']))
selects.push(new Select(document.body, {left: 772, top: 210}, 30, ['豆', '咸', '冬', '膀胱', '水', '呻', '寒', '黑', '唾', '恐', '耳']))
selects.push(new Select(document.body, {left: 886, top: 320}, 50, ['豆', '咸', '冬', '膀胱', '水', '呻', '寒', '黑', '唾', '恐', '耳']))
selects.push(new Select(document.body, {left: 980, top: 650}, 100, ['豆', '咸', '冬', '膀胱', '水', '呻', '寒', '黑', '唾', '恐', '耳']))
selects.push(new Select(document.body, {left: 675, top: 960}, 167, ['豆', '咸', '冬', '膀胱', '水', '呻', '寒', '黑', '唾', '恐', '耳']))
selects.push(new Select(document.body, {left: 515, top: 976}, 190, ['豆', '咸', '冬', '膀胱', '水', '呻', '寒', '黑', '唾', '恐', '耳']))
selects.push(new Select(document.body, {left: 250, top: 820}, 232, ['豆', '咸', '冬', '膀胱', '水', '呻', '寒', '黑', '唾', '恐', '耳']))
selects.push(new Select(document.body, {left: 175, top: 655}, 255, ['豆', '咸', '冬', '膀胱', '水', '呻', '寒', '黑', '唾', '恐', '耳']))
selects.push(new Select(document.body, {left: 175, top: 470}, 285, ['豆', '咸', '冬', '膀胱', '水', '呻', '寒', '黑', '唾', '恐', '耳']))
selects.push(new Select(document.body, {left: 240, top: 330}, 305, ['豆', '咸', '冬', '膀胱', '水', '呻', '寒', '黑', '唾', '恐', '耳']))
selects.push(new Select(document.body, {left: 634, top: 230}, 7, ['稻', '秋', '西', '金', '燥', '鼻', '皮毛']))
selects.push(new Select(document.body, {left: 853, top: 364}, 55, ['稻', '秋', '西', '金', '燥', '鼻', '皮毛']))
selects.push(new Select(document.body, {left: 918, top: 498}, 75, ['稻', '秋', '西', '金', '燥', '鼻', '皮毛']))
selects.push(new Select(document.body, {left: 786, top: 849}, 145, ['稻', '秋', '西', '金', '燥', '鼻', '皮毛']))
selects.push(new Select(document.body, {left: 528, top: 916}, 190, ['稻', '秋', '西', '金', '燥', '鼻', '皮毛']))
selects.push(new Select(document.body, {left: 309, top: 790}, 232, ['稻', '秋', '西', '金', '燥', '鼻', '皮毛']))
selects.push(new Select(document.body, {left: 292, top: 387}, 305, ['稻', '秋', '西', '金', '燥', '鼻', '皮毛']))
selects.push(new Select(document.body, {left: 391, top: 286}, 330, ['稻', '秋', '西', '金', '燥', '鼻', '皮毛']))
selects.push(new Select(document.body, {left: 721, top: 330}, 30, ['甘', '中', '胃', '土', '歌', '唇', '涎', '思']))
selects.push(new Select(document.body, {left: 847, top: 498}, 75, ['甘', '中', '胃', '土', '歌', '唇', '涎', '思']))
selects.push(new Select(document.body, {left: 850, top: 616}, 100, ['甘', '中', '胃', '土', '歌', '唇', '涎', '思']))
selects.push(new Select(document.body, {left: 745, top: 790}, 145, ['甘', '中', '胃', '土', '歌', '唇', '涎', '思']))
selects.push(new Select(document.body, {left: 646, top: 842}, 167, ['甘', '中', '胃', '土', '歌', '唇', '涎', '思']))
selects.push(new Select(document.body, {left: 442, top: 813}, 210, ['甘', '中', '胃', '土', '歌', '唇', '涎', '思']))
selects.push(new Select(document.body, {left: 313, top: 631}, 255, ['甘', '中', '胃', '土', '歌', '唇', '涎', '思']))
selects.push(new Select(document.body, {left: 309, top: 516}, 285, ['甘', '中', '胃', '土', '歌', '唇', '涎', '思']))
selects.push(new Select(document.body, {left: 739, top: 445}, 55, ['黍', '夏', '心包·心', '火', '笑', '暑', '汗', '喜', '舌']))
selects.push(new Select(document.body, {left: 759, top: 676}, 120, ['黍', '夏', '心包·心', '火', '笑', '暑', '汗', '喜', '舌']))
selects.push(new Select(document.body, {left: 698, top: 728}, 145, ['黍', '夏', '心包·心', '火', '笑', '暑', '汗', '喜', '舌']))
selects.push(new Select(document.body, {left: 615, top: 776}, 167, ['黍', '夏', '心包·心', '火', '笑', '暑', '汗', '喜', '舌']))
selects.push(new Select(document.body, {left: 533, top: 768}, 190, ['黍', '夏', '心包·心', '火', '笑', '暑', '汗', '喜', '舌']))
selects.push(new Select(document.body, {left: 383, top: 616}, 255, ['黍', '夏', '心包·心', '火', '笑', '暑', '汗', '喜', '舌']))
selects.push(new Select(document.body, {left: 375, top: 516}, 285, ['黍', '夏', '心包·心', '火', '笑', '暑', '汗', '喜', '舌']))
selects.push(new Select(document.body, {left: 426, top: 450}, 305, ['黍', '夏', '心包·心', '火', '笑', '暑', '汗', '喜', '舌']))
selects.push(new Select(document.body, {left: 616, top: 370}, 7, ['黍', '夏', '心包·心', '火', '笑', '暑', '汗', '喜', '舌']))
selects.push(new Select(document.body, {left: 657, top: 484}, 30, ['酸', '东', '胆', '肝', '呼', '风', '爪', '泪', '目', '筋']))
selects.push(new Select(document.body, {left: 715, top: 551}, 75, ['酸', '东', '胆', '肝', '呼', '风', '爪', '泪', '目', '筋']))
selects.push(new Select(document.body, {left: 673, top: 609}, 100, ['酸', '东', '胆', '肝', '呼', '风', '爪', '泪', '目', '筋']))
selects.push(new Select(document.body, {left: 689, top: 659}, 120, ['酸', '东', '胆', '肝', '呼', '风', '爪', '泪', '目', '筋']))
selects.push(new Select(document.body, {left: 596, top: 705}, 167, ['酸', '东', '胆', '肝', '呼', '风', '爪', '泪', '目', '筋']))
selects.push(new Select(document.body, {left: 548, top: 653}, 190, ['酸', '东', '胆', '肝', '呼', '风', '爪', '泪', '目', '筋']))
selects.push(new Select(document.body, {left: 494, top: 686}, 210, ['酸', '东', '胆', '肝', '呼', '风', '爪', '泪', '目', '筋']))
selects.push(new Select(document.body, {left: 456, top: 584}, 255, ['酸', '东', '胆', '肝', '呼', '风', '爪', '泪', '目', '筋']))
selects.push(new Select(document.body, {left: 515, top: 500}, 305, ['酸', '东', '胆', '肝', '呼', '风', '爪', '泪', '目', '筋']))
selects.push(new Select(document.body, {left: 523, top: 445}, 330, ['酸', '东', '胆', '肝', '呼', '风', '爪', '泪', '目', '筋']))

// mount them
selects.forEach(select => {
    select.mount()
})