//数字、"c"、"="ボタンを変数numberに入れる
let number = document.querySelectorAll('button');

//テキストエリアに表示される入力結果を変数resultに入れる
let result = document.querySelector('#result');

//算術演算子ボタンを変数operatorに入れる
let operator = document.querySelector('#operator');

//数字(0〜9)ボタンと"c"、"="ボタンを押した時に使う関数
function calc(button) {
    //数字、"c"、"="ボタンの値を変数numberに入れる
    number = button.innerHTML;
    if(number == 'c') {
        //cはクリアボタンであるためテキストエリアに表示されている値を0にする
        result.value = 0;
    } else if(number == '=') {
        result.value = eval(result.value);
    } else {
        //01, 001, という表示にならないようにテキストエリアに表示されている値が0の場合は押した数字ボタンの値をテキストエリアに表示
        if(result.value == '0') {
            result.value = number;
        } else {
            result.value += number;
        }
    }
}

//演算子(+, -, ×, ÷)ボタンを押した時に使う関数
function clickOperator(button) {
    //算術演算子ボタンの値を変数operatorに入れる
    operator = button.value;
    //テキストエリアに表示されている出力結果の末尾1桁が'+', '-', '*', '/' の場合とそうでない場合の条件分岐
    if((result.value.slice(-1) == '+') || (result.value.slice(-1) == '-') || (result.value.slice(-1) == '*') || (result.value.slice(-1) == '/')) {
        //表示されている出力結果の末尾1桁を削除し、押した算術演算子ボタンの値を加える
        result.value = result.value.slice(0, -1) + operator;
    } else {
        //表示されている出力結果に押した算術演算子ボタンの値を加える
        result.value += operator;
    }
}