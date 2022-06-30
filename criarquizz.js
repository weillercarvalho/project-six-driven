let titulo1, urltitulo, urltitulo2, qntperguntas, qntniveis;


function tituloQuizz() {
    titulo1 = document.querySelector(`.input1`).value;
    if (titulo1.length < 20 || titulo1.length > 65) {
        alert(`Tamanho do titulo inválido, coloque entre 20 e 65 caracteres.`)
    }
    passouPagina1();
}

function urltituloQuizz() {
    urltitulo = document.querySelector(`.input2`).value;
    urltitulo2 = urltitulo.slice(0,8);
    if (urltitulo2 !== `https://`) {
        alert(`Apenas arquivos URL são aceito, inicie com https:// + endereço da imagem.`)
    }
    passouPagina1();
}

function qntperguntasQuizz() {
    qntperguntas = Number(document.querySelector(`.input3`).value);
    if(qntperguntas < 3 || isNaN(qntperguntas)) {
        alert(`Caractere inválido, adicione um número igual ou maior que 3.`)
    }
    passouPagina1();
}

function qntniveisQuizz() {
    qntniveis = Number(document.querySelector(`.input4`).value);
    if(qntperguntas < 2 || isNaN(qntniveis)) {
        alert(`Caractere inválido, adicione um número igual ou maior que 2sh.`)
    }
    passouPagina1();
}