const btn = document.querySelectorAll('#btn');
const result = document.querySelector('#result');
console.log(result);

//console.log(btn[2]);

/*function click1() {
    console.log(btn[0]);
}*/

for(let i =0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        console.log(btn[i]);
    }, false);
}