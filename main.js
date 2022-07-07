
let number = document.querySelectorAll('button');

let result = document.querySelector('#result');

let operator = document.querySelector('#operator');

//数字(0〜9)ボタンと"c"、"="ボタンを押した時に使う関数
function calc(button) {
    number = button.innerHTML;
    if(number == 'c') {
        result.value = 0;
    } else if(number == '=') {
        result.value = eval(result.value);
    } else {
        if(result.value == '0') {
            result.value = number;
        } else {
            result.value += number;
        }
    }
}

//演算子(+, -, ×, ÷)ボタンを押した時に使う関数
function clickOperator(button) {
    operator = button.value;
    if(result.value.slice(-1) =='+' || '-' || '*' || '/') {
        //console.log('hello');
        
    }
    result.value += operator;
}