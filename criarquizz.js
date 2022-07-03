let quizz = {
    title:"",
    image:"",
    questions:[],
    levels:[]
};
let titulo1, urltitulo, urltitulo2, qntperguntas, qntniveis, containerprimario, containersecundario, imagem, imagem2, imagem3, perguntas, respostacorreta, urlcorreta, respostaincorreta1, urlincorreta1, respostaincorreta2, urlincorreta2, respostaincorreta3, urlincorreta3, urlcorretaslice, urlincorreta1slice, urlincorreta2slice, urlincorreta3slice, containerterciario;
let titulonivel, porcentagemminima, urlnivel, descricaonivel, urlnivelslice, porcentagemminimastring, containerquaternario, cores;
let count = 0;
let objeto;
let ultimo = [];
let injetarresposta = [];
let injetarniveis = [];
let criarresposta = [];
let criarniveis = [];
containerprimario = document.querySelector(`.container1`);
containersecundario = document.querySelector(`.container2`);
containerterciario = document.querySelector(`.container3`);
containerquaternario = document.querySelector(`.container4`);
titulo1 = document.querySelector(`.input1`).value;
urltitulo = document.querySelector(`.input2`).value;
urltitulo2 = urltitulo.slice(0,8);   
qntperguntas = Number(document.querySelector(`.input3`).value);
qntniveis = Number(document.querySelector(`.input4`).value);


function telaInicial() {

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
    iterarPerguntas();
}

function informar(element) {
    objeto = {
        title: `${element.parentNode.querySelector('.input1').value}`,
        image: `${element.parentNode.querySelector('.input2').value}`,
        nperguntas: `${element.parentNode.querySelector('.input3').value}`,
        nniveis: `${element.parentNode.querySelector('.input4').value}`,
    };

    quizz.title = objeto.title;
    quizz.image = objeto.image;
    quizz.questions.length = objeto.nperguntas;
    quizz.questions = quizz.questions.slice(0,objeto.nperguntas);
    quizz.levels.length = objeto.nniveis;
    quizz.levels = quizz.levels.slice(0, objeto.nniveis);
    console.log(quizz)
}




function iterarPerguntas() {
    for (let i = 2; i <= qntperguntas; i++) {
        containersecundario.innerHTML+= `
        <div class="father">
        <nav class="pergunta${i}"><span>Pergunta ${i}</span> <img class="imgprg${i}" onclick="switarEscolha('pergunta${i}','info${i}');" src="./images/Vector.png"></nav>
            <section class="info${i} escondido">
                <div class="textpergunta">Pergunta${i}</div>
                <input type="text" class="input5-${i}" placeholder="Texto da pergunta">
                <label for="cor" class="textpergunta">Selecione a cor</label>
                <input type="color" class="input6-${i}" placeholder="Cor de fundo da pergunta">
                <div class="textpergunta">Resposta correta</div>
                <input type="text" class="input7-${i}" placeholder="Resposta correta">
                <input type="text" class="input8-${i}" placeholder="URL da imagem">
                <div class="textpergunta">Respostas incorretas</div>
                <input type="text" class="input9-${i}" placeholder="Resposta incorreta 1">
                <input type="text" class="input10-${i}" placeholder="URL da imagem 1">
                <input type="text" class="input11-${i}" placeholder="Resposta incorreta 2">
                <input type="text" class="input12-${i}" placeholder="URL da imagem 2">
                <input type="text" class="input13-${i}" placeholder="Resposta incorreta 3">
                <input type="text" class="input14-${i}" placeholder="URL da imagem 3">

            </section>
    </div>    
    `
    } containersecundario.innerHTML += `<div class="button1" onclick="caracteristicasPerguntas()">Prosseguir para criar os níveis</div>`
 
}



function switarEscolha(value, index) {
    console.log(value, index)
    for (let i = 1; i <= qntperguntas; i++) {
        imagem2 = document.querySelector(`.${value}`);
        imagem3 = document.querySelector(`.${index}`);
        if (document.querySelector(`.${value}.escondido`) === null) {
            imagem2.classList.toggle(`escondido`);
            imagem3.classList.toggle(`escondido`);
        } 
    }
}

function caracteristicasPerguntas() {
    for (let i = 1; i <= qntperguntas; i++) {
        perguntas = document.querySelector(`.input5-${i}`).value;
        cores = document.querySelector(`.input6-${i}`).value;
        respostacorreta = document.querySelector(`.input7-${i}`).value;
        urlcorreta = document.querySelector(`.input8-${i}`).value;
        urlcorretaslice = urlcorreta.slice(0,8);
        respostaincorreta1 = document.querySelector(`.input9-${i}`).value;
        urlincorreta1 = document.querySelector(`.input10-${i}`).value;
        urlincorreta1slice = urlincorreta1.slice(0,8); 
        respostaincorreta2 = document.querySelector(`.input11-${i}`).value;
        urlincorreta2 = document.querySelector(`.input12-${i}`).value;
        urlincorreta2slice = urlincorreta2.slice(0,8); 
        respostaincorreta3 = document.querySelector(`.input13-${i}`).value;
        urlincorreta3 = document.querySelector(`.input14-${i}`).value;
        urlincorreta3slice = urlincorreta3.slice(0,8);
        if (perguntas.length < 20) {
            return alert(`Quantidade minima de caracteres nas perguntas são 20 caracteres, corrija a ${i} pergunta.`);
        }
        if (respostacorreta === "" || respostacorreta === null || respostacorreta === undefined) {
            return alert(`A resposta correta não aceita resposta vazia, defina uma resposta correta.`);
        }
        if (respostaincorreta1 === "" && respostaincorreta2 === "" && respostaincorreta3 === "") {
            return alert(`Pelo menos uma das respostas erradas precisa da inserção de conteúdo em todas as perguntas.`)
        }
        if (urlcorretaslice !== `https://`) {
            return alert(`Apenas arquivos URL são aceito, inicie sua url de imagem correta da pergunta ${i} com https:// + endereço da imagem.`);
        }        
        if (urlincorreta1slice !== `https://` && respostaincorreta1 !== "") {
            return alert(`Apenas arquivos URL são aceito, inicie sua url de imagem incorreta 1 da pergunta ${i} com https:// + endereço da imagem.`);
        }
        if (urlincorreta2slice !== `https://` && respostaincorreta2 !== "") {
            return alert(`Apenas arquivos URL são aceito, inicie sua url de imagem incorreta 2 da pergunta ${i} com https:// + endereço da imagem.`);
        }
        if (urlincorreta3slice !== `https://` && respostaincorreta3 !== "") {
            return alert(`Apenas arquivos URL são aceito, inicie sua url de imagem incorreta 3 da pergunta ${i} com https:// + endereço da imagem.`);
        }
    }
    containersecundario.classList.add(`escondido`);
    containerterciario.classList.remove(`escondido`); 
    iterarNiveis();
}

function iterarNiveis() {
    for (let i = 2; i <= qntniveis; i++) {
        containerterciario.innerHTML += `
        <div class="father">
        <nav class="pergunta1-${i}"><span>Nível ${i}</span> <img class="imgprg1-${i}" onclick="switarNiveis('pergunta1-${i}','info1-${i}');" src="./images/Vector.png"></nav>
            <aside class="info1-${i} escondido">
                <div class="textpergunta">Nível ${i}</div>
                <input type="text" class="input15-${i}" placeholder="Titulo do nível">
                <input type="text" class="input16-${i}" placeholder="% de acerto mínima">
                <input type="text" class="input17-${i}" placeholder="URL da imagem do nível">
                <input type="text" id="input18-${i}" class="input18-${i}" placeholder="Descrição do nível">
            </aside>
    </div>
    `
    } containerterciario.innerHTML += `<div class="button1" onclick="caracteristicasNiveis();injetarPerguntasNiveis()">Finalizar Quizz</div>`
}

function switarNiveis(value, index) {
    console.log(value, index)
    for (let i = 1; i <= qntperguntas; i++) {
        imagem3 = document.querySelector(`.${value}`);
        imagem4 = document.querySelector(`.${index}`);
        if (document.querySelector(`.${value}.escondido`) === null) {
            imagem3.classList.toggle(`escondido`);
            imagem4.classList.toggle(`escondido`);
        } 
    }
}

function caracteristicasNiveis() {
    let valorzero = false;
    for(let i = 2; i <= qntniveis; i++) {
        titulonivel = document.querySelector(`.input15-${i}`).value;
        porcentagemminimastring = document.querySelector(`.input16-${i}`).value;
        porcentagemminima = Number(document.querySelector(`.input16-${i}`).value);
        urlnivel = document.querySelector(`.input17-${i}`).value;
        urlnivelslice = urlnivel.slice(0,8);
        descricaonivel = document.querySelector(`.input18-${i}`).value;
        if (titulonivel.length < 10) {
            return alert(`Quantidade minima de caracteres nos níveis sao 10, corrija o ${i} nivel.`);
        }
        if (porcentagemminimastring < "0" || porcentagemminimastring >= "100" || isNaN(porcentagemminimastring)) {
            return alert(`Valor improprio digite um número entre 0 e 100.`);
        }
        if (urlnivelslice !== `https://`) {
            return alert(`Apenas arquivos URL são aceito, inicie sua url de imagem do nivel ${i} com https:// + endereço da imagem.`)
        }
        if (descricaonivel.length < 30) {
            return alert (`Quantidade minima de caracteres na descrição dos níveis são 30, corrija a ${i} descrição.`)
        }
        if (porcentagemminimastring === "0") {
            valorzero = true;
        }
    }    
    if (!valorzero) {
        return false;
    } 
    containerterciario.classList.add(`escondido`);
    containerquaternario.classList.remove(`escondido`); 
    iterarFinal();
}

// CORRIGIR ERROS LEVELS FUNCAO injetarPerguntasNiveis, VERIFICAR VALIDACAO DOS NIVEIS ALGUNS ERROS NAO ESTAO DANDO alert. E JOGAR NA TELA FINAL

function injetarPerguntasNiveis() {
    for (let i = 1; i <= qntperguntas; i++) {
        if (respostaincorreta1.length > 0 && respostaincorreta2.length > 0 && respostaincorreta3.length > 0) {
            injetarresposta.push({
                text: `${respostacorreta}`,
                image: `${urlcorreta}`,
                isCorrectAnswer: true,
            },
            {
                text: `${respostaincorreta1}`,
                image: `${urlincorreta1}`,
                isCorrectAnswer: false
            },{
                text: `${respostaincorreta2}`,
                image: `${urlincorreta2}`,
                isCorrectAnswer: false
            },{
                text: `${respostaincorreta3}`,
                image: `${urlincorreta3}`,
                isCorrectAnswer: false
            });
        }
        if (respostaincorreta1.length > 0 && respostaincorreta2.length > 0 && respostaincorreta3.length === 0){
            injetarresposta.push({
                text: `${respostacorreta}`,
                image: `${urlcorreta}`,
                isCorrectAnswer: true,
            },
            {
                text: `${respostaincorreta1}`,
                image: `${urlincorreta1}`,
                isCorrectAnswer: false
            },{
                text: `${respostaincorreta2}`,
                image: `${urlincorreta2}`,
                isCorrectAnswer: false
            });
        }
        if (respostaincorreta1.length > 0 && respostaincorreta2.length === 0 && respostaincorreta3.length > 0) {
            injetarresposta.push({
                text: `${respostacorreta}`,
                image: `${urlcorreta}`,
                isCorrectAnswer: true,
            },
            {
                text: `${respostaincorreta1}`,
                image: `${urlincorreta1}`,
                isCorrectAnswer: false
            },{
                text: `${respostaincorreta3}`,
                image: `${urlincorreta3}`,
                isCorrectAnswer: false
            });
        }
        if (respostaincorreta1.length === 0 && respostaincorreta2.length > 0 && respostaincorreta3.length > 0) {
            injetarresposta.push({
                text: `${respostacorreta}`,
                image: `${urlcorreta}`,
                isCorrectAnswer: true,
            },
            {
                text: `${respostaincorreta2}`,
                image: `${urlincorreta2}`,
                isCorrectAnswer: false
            },{
                text: `${respostaincorreta3}`,
                image: `${urlincorreta3}`,
                isCorrectAnswer: false
            });
        }
        if (respostaincorreta1.length === 0 && respostaincorreta2.length === 0 && respostaincorreta3.length > 0) {
            injetarresposta.push({
                text: `${respostacorreta}`,
                image: `${urlcorreta}`,
                isCorrectAnswer: true,
            },
            {
                text: `${respostaincorreta3}`,
                image: `${urlincorreta3}`,
                isCorrectAnswer: false
            });
        }
        if (respostaincorreta1.length === 0 && respostaincorreta2.length > 0 && respostaincorreta3.length === 0) {
            injetarresposta.push({
                text: `${respostacorreta}`,
                image: `${urlcorreta}`,
                isCorrectAnswer: true,
            },
            {
                text: `${respostaincorreta2}`,
                image: `${urlincorreta2}`,
                isCorrectAnswer: false
            });
        }
        if (respostaincorreta1.length > 0 && respostaincorreta2.length === 0 && respostaincorreta3.length === 0) {
            injetarresposta.push({
                text: `${respostacorreta}`,
                image: `${urlcorreta}`,
                isCorrectAnswer: true,
            },
            {
                text: `${respostaincorreta1}`,
                image: `${urlincorreta1}`,
                isCorrectAnswer: false
            });
        }
        criarresposta = {
        title: `${perguntas}`,
        color: `${cores}`,
        answers: injetarresposta
        }
    console.log(quizz)
    }
    for (let i = 1; i <= qntniveis; i++) {
        injetarniveis.push({
            title: `${titulonivel}`,
            image: `${urlnivel}`,
            text: `${descricaonivel}`,
            minValue: porcentagemminima
            })

    }
    quizz.questions = criarresposta;
    quizz.levels = injetarniveis;
    console.log(quizz)
}

function iterarFinal() {
    for (let i = 1; i <= 1; i++) {
        containerquaternario.innerHTML+=`
        <div class="father">
            <div class="finalizar">
                <img class="imagemimagem" src="${urltitulo}">
            </div>
            <div class="titulotitulo">${titulo1}</div>
            <div class="button1" onclick="acessarTela2();">Acessar Quizz</div>
            <div class="voltar" onclick="acessarTela1();">Voltar pra home</div>
        </div>
        `
    }
}
// ISSO AQUI FAZER COM O PAULO CONEXAO COM TELA 2
function acessarTela2(index) {
    console.log(index)
}

// ISSO AQUI FAZER COM O PAULO CONEXAO COM TELA 1
function acessarTela1(index) {
    console.log(index)
}

