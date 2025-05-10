let addMessage = (mes) => {
    let list = document.querySelector('ul');
    list.innerHTML = '<li>' + mes + '</li>' + list.innerHTML;
}
 
let qnum = 0;
addMessage(quiz[qnum][0]);
 
let btn = document.querySelector('button');
btn.addEventListener('click',() =>{
    let ipt = document.querySelector('input');
    addMessage(ipt.value);
    if(ipt.value == quiz[qnum][1]){
        qnum +=1;
        qnum %= quiz.length;
        addMessage('正解!  次は' + quiz[qnum][0])
        ipt.value = '';
    } else {
        addMessage('はずれ！')
        ipt.value = '';
    }
} );
 