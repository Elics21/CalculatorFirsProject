const inputNumber1 = document.getElementById('number1')
const inputNumber2 = document.getElementById('number2')
const plusBtn = document.getElementById('plus-btn')
const minusBtn = document.getElementById('minus-btn')
const multiplicationBtn = document.getElementById('multiplication-btn')
const divisionBtn = document.getElementById('division-btn')
const resultElement = document.getElementById('result')

let action = '+'

function renderNum(inp1, inp2, action, resultElementFun){
    let num1 = Number(inp1.value)
    let num2 = Number(inp2.value)
    let number
    if(action == '+'){
        number = num1 + num2
    }else if(action == '-'){
        number = num1 - num2
    }else if(action == '*'){
        number = num1 * num2
    }else if(action == '/'){
        number = num1 / num2
    }
    resultElementFun.textContent = number
}

plusBtn.onclick = function () {
    action = '+'
    renderNum(inputNumber1, inputNumber2, action, resultElement)
}
minusBtn.onclick = function () {
    action = '-'
    renderNum(inputNumber1, inputNumber2, action, resultElement)
}
multiplicationBtn.onclick = function () {
    action = '*'
    renderNum(inputNumber1, inputNumber2, action, resultElement)
}
divisionBtn.onclick = function () {
    action = '/'
    renderNum(inputNumber1, inputNumber2, action, resultElement)
}
