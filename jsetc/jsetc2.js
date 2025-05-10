let inp = document.querySelector('input');
let btn = document.querySelector('button');
let elem = document.querySelector('p');
 
btn.addEventListener('click',() =>{
    let age = inp.value;
 
    if (isNaN(age) || age.trim() === '') {
        elem.innerText = "半角数字で正しい年齢を入れてください";
    } else {
        age =Math.floor(parseFloat(age)); //小数点以下を切り捨てて整数化
    　　if (age < 18) {
            //ここで義務教育期間かチェック
            if (age >=6 && age <=15) {
                elem.innerText = "あなたは未成年（義務教育期間）です。";
            } else {
                elem.innerText = "あなたは未成年です。";
            }
        } else if (age >=65) {
            elem.innerText = "あなたは高齢者です。";
        } else {
            elem.innerText = "あなたは成人です。";
        }
    }
} );