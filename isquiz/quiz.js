let addMessage = (mes) => {
    let list = document.querySelector('ul');
    list.innerHTML = '<li>' + mes + '</li>' + list.innerHTML;
}

addMessage(quiz[0][0])