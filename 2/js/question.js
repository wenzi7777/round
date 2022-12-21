class Question {
    constructor(element, question, options, answers, type) {
        this.element = element
        this.question = question
        this.options = options
        this.answers = answers
        this.type = type

        this.isCorrect = false

        if(this.type === 'fillInTheBlank') {
            this.initFillInTheBlank()
        }else {
            this.initSingleChoice()
        }
    }

    initFillInTheBlank() {
        let inputsHtmlCode = ``
        this.answers.forEach((answer, index) => {
            inputsHtmlCode += `<input type="text" class="questionInput" data-answer="${answer}" placeholder="空${index + 1}">`
        })
        let questionHtmlCode = `<div data-question="${this.question}" class="questionWrapper" data-type="fillInTheBlank">[填空题] ${this.question}<br />${inputsHtmlCode}</div>`
        this.element.insertAdjacentHTML('beforeend', questionHtmlCode)
    }

    initSingleChoice() {
        let optionsHtmlCode = ``
        this.options.forEach((option, index) => {
            optionsHtmlCode += `<input data-is-answer="${this.answers[0] === option}" type="radio" id="${this.question + index}" name="${this.question}" value="${option}"><label style="margin-right: 10px;" for="${this.question + index}">${option}</label>`
        })
        let questionHtmlCode = `<div data-question="${this.question}" class="questionWrapper" data-type="fillInTheBlank">[选择题] ${this.question}<br />${optionsHtmlCode}</div>`
        this.element.insertAdjacentHTML('beforeend', questionHtmlCode)
    }

    judge() {
        if(this.type === 'fillInTheBlank') {
            let questionWrapper = document.querySelector(`div[data-question="${this.question}"]`)
            if(!questionWrapper) {
                return
            }
            let inputs = questionWrapper.querySelectorAll('input')
            let isCorrect = false
            inputs.forEach(input => {
                if(input.value === input.dataset.answer) {
                    isCorrect = true
                }
            })
            if(isCorrect) {
                questionWrapper.style.backgroundColor = 'forestgreen'
            }else {
                questionWrapper.style.backgroundColor = 'tomato'
            }
        }else {
            let questionWrapper = document.querySelector(`div[data-question="${this.question}"]`)
            let options = document.querySelectorAll(`[name="${this.question}"]`)
            if(!questionWrapper) {
                return
            }
            if(!options) {
                return;
            }
            let isCorrect = false
            options.forEach(option => {
                if(option.checked) {
                    if(option.value === this.answers[0]){
                        isCorrect = true
                    }
                }
            })
            if(isCorrect) {
                questionWrapper.style.backgroundColor = 'forestgreen'
            }else {
                questionWrapper.style.backgroundColor = 'tomato'
            }
        }
    }

    redo() {
        let questionWrappers = document.querySelectorAll(`div[data-question]`)
        if(!questionWrappers) {
            return
        }
        questionWrappers.forEach(questionWrapper => {
            questionWrapper.style.backgroundColor = 'whitesmoke'
        })
    }
}