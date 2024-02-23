
function modalErrorClose() {
    document.querySelector('#error').style.display = 'none';
    document.querySelector('#error').animate("spinShow")
}

function modalError(x, elmn) {
    document.querySelector('#error').style.display = '';
    document.querySelector('#error-content').innerHTML = x;
}

function comecar() {
    var input = document.querySelector("#nome-input");
    var nome = input.value
    document.querySelector("#nome-print").textContent = nome;

    var div = document.querySelector('.selects-div');

    if(nome && nome.trim() !== '') {
        div.style.display = 'block'
    } else {
        modalError("Você precisa informar o seu nome!");
    }
}
