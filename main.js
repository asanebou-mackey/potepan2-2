let number = document.querySelectorAll('button');
let result = document.querySelector('#result');

let operator = document.querySelector('#operator');

function calc(button) {
    number = button.innerHTML;
    if(number == 'c') {
        result.value = 0;
        //result.innerHTML = '0';
    } else if(number == '=') {
        result.value = eval(result.value);
        //result.innerHTML = eval(result.innerHTML);
    } else {
        if(result.value == '0') {
            result.value = number;
        } else {
            result.value += number;
        }
    }
}


function clickOperator() {
    operator = button.innerHTML;
    console.log(operator);
}








//<input type="text" id="result" value=""> id="result">< 

/*
function calc(button) {
    number = button.innerHTML;
    if(number == 'c') {
        result.innerHTML = '0';
    } else if(number == '=') {
        result.innerHTML = eval(result.innerHTML);
    } else {
        if(result.value == '0') {
            result.value = number;
        } else {
            if(result.innerHTML == '0') {
                result.innerHTML = number;
            } else {
                result.innerHTML += number;
            }
        }
    }
}
*/