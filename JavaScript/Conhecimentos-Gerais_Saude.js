/* Aula 20 MaiaQuiz  */

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Quando ocorreu a 8º Conferência Nacional de Saúde?",
    alternativaA : "17 a 21 de março de 1986",
    alternativaB : "17 a 21 de março de 1988",
    alternativaC : "15 a 22 de março de 1988",
    correta      : "17 a 21 de março de 1986",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Sob a Gestão de Roberto Figueira Santos, a 8º Conferência Nacional de Saúde foi presidida por quem?",
    alternativaA : "Oswaldo Cruz",
    alternativaB : "Sérgio Araouca",
    alternativaC : "Sérgio Santos",
    correta      : "Sérgio Araouca",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "A 8º Conferência Nacional de Saúde trouxe um marco para a sociedade em geral proporcionado melhorias, que foi:",
    alternativaA : "Descentralização do Poder",
    alternativaB : "Integralidade em todos os níveis de atenção",
    alternativaC : "Aumento da participação privada na Saúde",
    correta      : "Aumento da participação privada na Saúde",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Quais foram os principais temas da Conferência  Nacional de Saúde que mudaram a vida das pessoas?",
    alternativaA : "Saúde como direito do trabalhador, Reformulação do Sistema de Saúde e Financiamento do Setor",
    alternativaB : "SUS com participação social e privada, alojamento e participação privada",
    alternativaC : "Interdição do Modelo vigente, criação de um novo modelo",
    correta      : "Saúde como direito do trabalhador, Reformulação do Sistema de Saúde e Financiamento do Setor",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Como eram os modelos de Saúde antes da Criação do SUS?",
    alternativaA : "Inclusivo, parcial e médico centralizado",
    alternativaB : "Curativista, voltado para a familia e sociedade",
    alternativaC : "Excludentes, hospitalocêntricos, curativista",
    correta      : "Excludentes, hospitalocêntricos, curativista",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}