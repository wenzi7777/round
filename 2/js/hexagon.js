class Hexagon {
    constructor(ctx, position, radius, colors, text, items, answer, info) {
        this.ctx = ctx
        this.position = position
        this.radius = radius
        this.colors = colors
        this.text = text
        this.items = items
        this.answer = answer
        this.info = info

        this.isFocused = false
        this.foreverShow = false
        this.isCorrect = items.length <= 0
        // this.isCorrect = true
    }

    draw() {
        // draw hexagon
        this.ctx.beginPath()
        this.ctx.moveTo(this.position.x - this.radius, this.position.y)
        this.ctx.lineTo(this.position.x - this.radius / 2, this.position.y - this.radius / Math.SQRT2)
        this.ctx.lineTo(this.position.x + this.radius / 2, this.position.y - this.radius / Math.SQRT2)
        this.ctx.lineTo(this.position.x + this.radius, this.position.y)
        this.ctx.lineTo(this.position.x + this.radius / 2, this.position.y + this.radius / Math.SQRT2)
        this.ctx.lineTo(this.position.x - this.radius / 2, this.position.y + this.radius / Math.SQRT2)
        let grd = this.ctx.createLinearGradient(0, 0, this.position.x * 2, this.position.y * 2)
        grd.addColorStop(0, this.colors[0])
        grd.addColorStop(1, this.colors[1])
        this.ctx.fillStyle = grd
        this.ctx.fill()
        this.insertSelect(this.items, this.answer)
        this.insertInfoPanel()
    }

    drawText(text) {
        if (!text) {
            text = this.text
        }
        this.ctx.font = '40px serif'
        let textInfo = ctx.measureText(text)
        this.ctx.strokeStyle = '#000000'
        this.ctx.strokeText(text, this.position.x - textInfo.width / 2, this.position.y + 10);
    }

    clear() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    isInside({x, y}) {
        x -= this.position.x
        y -= this.position.y
        x /= this.radius
        y /= this.radius
        // Check length (squared) against inner and outer radius
        let l2 = x * x + y * y
        if (l2 > 1.0) return false
        if (l2 < 0.75) return true // (sqrt(3)/2)^2 = 3/4
        // Check against borders
        let px = x * 1.15470053838 // 2/sqrt(3)
        if (px > 1.0 || px < -1.0) return false
        let py = 0.5 * px + y;
        if (py > 1.0 || py < -1.0) return false
        return !(px - py > 1.0 || px - py < -1.0)
    }

    insertSelect(items, answer) {
        let itemsHtmlCode = '<option value="default" data-answer="false">【】</option>'
        items.forEach(item => {
            itemsHtmlCode += `<option value="${item}" data-answer="${(item === answer)}">${item}</option>`
        })
        let htmlCode = this.items.length > 0 ? `<div class="select" data-class="${this.text}" style="left: ${this.position.x + 'px'}; top: ${this.position.y + 'px'}; display: none;"><select data-class="${this.text}">${itemsHtmlCode}</select><button data-class="${this.text}">确定</button><button data-class="re${this.text}" style="display: none">重做</button></div>` : ''
        document.body.insertAdjacentHTML('beforeend', htmlCode)
        this.judgeHandler = this.judge.bind(this)
        this.redoHandler = this.redo.bind(this)
        let submitButton = document.querySelector(`button[data-class="${this.text}"]`)
        let redoButton = document.querySelector(`button[data-class="re${this.text}"]`)
        if (submitButton) {
            submitButton.addEventListener('click', this.judgeHandler)
        }
        if (redoButton) {
            redoButton.addEventListener('click', this.redoHandler)
        }
    }

    insertInfoPanel() {
        if (!this.info) {
            return
        }
        let panelHtmlCode = `<div class="panel" data-class="${this.text}" style="display: none; top: ${this.position.y}px; left: ${this.position.x}px">${this.info}<button>好</button></div>`
        document.body.insertAdjacentHTML('beforeend', panelHtmlCode)
        let button = document.querySelector(`div.panel[data-class="${this.text}"] button`)
        if(!button) {
            return;
        }
        button.addEventListener('click', () => {
            this.toggleInfoPanel()
        })
    }

    showInfoPanel() {
        let panel = document.querySelector(`div.panel[data-class="${this.text}"]`)
        if (!panel) {
            return
        }
        panel.style.display = 'block'
    }

    hideInfoPanel() {
        let panel = document.querySelector(`div.panel[data-class="${this.text}"]`)
        if (!panel) {
            return
        }
        panel.style.display = 'none'
    }

    toggleInfoPanel() {
        let panel = document.querySelector(`div.panel[data-class="${this.text}"]`)
        if (panel.style.display !== 'none') {
            panel.style.display = 'none'
        } else {
            panel.style.display = 'block'
        }
    }

    handleToggleSelect() {
        let div = document.querySelector(`div[data-class="${this.text}"]`)
        if (!div) {
            return
        }
        if (this.foreverShow) {
            div.style.display = 'block'
        } else {
            this.isFocused ? div.style.display = 'block' : div.style.display = 'none'
        }
    }

    redo() {
        this.foreverShow = false
        let select = document.querySelector(`select[data-class="${this.text}"]`)
        let redoButton = document.querySelector(`button[data-class="re${this.text}"]`)
        if (!select) {
            return
        }
        if (!redoButton) {
            return;
        }
        select.style.backgroundColor = 'white'
        redoButton.style.display = 'none'
        this.isCorrect = false
        this.hideInfoPanel()
    }

    judge() {
        this.foreverShow = true
        let select = document.querySelector(`select[data-class="${this.text}"]`)
        let redoButton = document.querySelector(`button[data-class="re${this.text}"]`)
        if (!select) {
            this.foreverShow = false
            return
        }
        if (!redoButton) {
            this.foreverShow = false
            return
        }
        if (select.value === this.answer) {
            select.style.backgroundColor = 'forestgreen'
            redoButton.style.display = 'none'
            this.isCorrect = true
            this.showInfoPanel()
        } else {
            this.isCorrect = false
            select.style.backgroundColor = 'tomato'
            redoButton.style.display = 'inline-block'
        }
    }

    update(targetPosition) {
        this.isFocused = this.isInside(targetPosition)
        this.handleToggleSelect()
    }
}