let titulo1, urltitulo, urltitulo2, qntperguntas, qntniveis, containerprimario, containersecundario, imagem, imagem2, imagem3, perguntas;
let count = 0;
function telaInicial() {
    containerprimario = document.querySelector(`.container1`);
    containersecundario = document.querySelector(`.container2`);
    titulo1 = document.querySelector(`.input1`).value;
    urltitulo = document.querySelector(`.input2`).value;
    urltitulo2 = urltitulo.slice(0,8);   
    qntperguntas = Number(document.querySelector(`.input3`).value);
    qntniveis = Number(document.querySelector(`.input4`).value);
    if (titulo1.length < 20 || titulo1.length > 65) {
        return alert(`Tamanho do titulo inválido, coloque entre 20 e 65 caracteres.`)
    }
    if (urltitulo2 !== `https://`) {
        return alert(`Apenas arquivos URL são aceito, inicie com https:// + endereço da imagem.`);
    }
    if(qntperguntas < 3 || isNaN(qntperguntas)) {
        return alert(`Número de perguntas inválido, adicione um número igual ou maior que 3.`);
    }
    if(qntniveis < 2 || isNaN(qntniveis)) {
        return alert(`Número de niveis inválido, adicione um número igual ou maior que 2.`);
    }
    else {
        containerprimario.classList.add(`escondido`);
        containersecundario.classList.remove(`escondido`); 
    }
    iterarQuizz();
}

function iterarQuizz() {
    containerprimario = document.querySelector(`.container1`);
    containersecundario = document.querySelector(`.container2`);
    for (let i = 4; i <= qntperguntas; i++) {
        containersecundario.innerHTML+= `
        <div class="father">
        <nav class="pergunta${i}"><span>Pergunta ${i}</span> <img class="imgprg${i}" onclick="switarEscolha();" src="./images/Vector.png"></nav>
            <div class="info${i} escondido">
                <div class="textpergunta1">Pergunta${i}</div>
                <input type="text" class="input5-${i}" placeholder="Texto da pergunta">
                <input type="text" class="input6-${i}" placeholder="Cor de fundo da pergunta">
                <div class="textpergunta2">Resposta correta</div>
                <input type="text" class="input7-${i}" placeholder="Resposta correta">
                <input type="text" class="input8-${i}" placeholder="URL da imagem">
                <div class="textpergunta3">Respostas incorretas</div>
                <div class="subinput1">
                    <input type="text" class="input9-${i}" placeholder="Resposta incorreta 1">
                    <input type="text" class="input10-${i}" placeholder="URL da imagem 1">
                </div>
                <div class="subinput2">
                    <input type="text" class="input11-${i}" placeholder="Resposta incorreta 2">
                    <input type="text" class="input12-${i}" placeholder="URL da imagem 2">
                </div>
                <div class="subinput3">
                    <input type="text" class="input13-${i}" placeholder="Resposta incorreta 3">
                    <input type="text" class="input14-${i}" placeholder="URL da imagem 3">
                </div>
            </div>
    </div>    
    `
    } containersecundario.innerHTML += `<div class="button1" onclick="caracteristicasPerguntas()">Prosseguir para criar os níveis</div>`
 
}

function switarEscolha() {
    for (let i = 1; i <= qntperguntas; i++) {
        imagem = document.querySelector(`.imgprg${i}`);
        imagem2 = document.querySelector(`.pergunta${i}`);
        imagem3 = document.querySelector(`.info${i}`);
        if (document.querySelector(`.info2.escondido`) !== null) {
            imagem2.classList.toggle(`escondido`);
            imagem3.classList.toggle(`escondido`);
        } 
    }
}

function caracteristicasPerguntas() {
    for (let i = 1; i <= qntperguntas; i++) {
        perguntas = document.querySelector(`.input5-${i}`).value
        if (perguntas.length < 20) {
            return alert(`Quantidade minima de caracteres nas perguntas são 20 caracteres, corrija a ${i} pergunta.`)
        }
        if (perguntas === "" || isNaN(perguntas)) {
            return alert(`Caractere inválido ou espaço em branco, corrija a ${i} pergunta.`)
        }
    }
}