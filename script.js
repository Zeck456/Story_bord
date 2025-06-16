const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1. O que você imagina para o seu futuro após o ensino médio?",
        alternativas: [
            {
                texto: "Quero seguir para a universidade para obter um diploma.",
                afirmacao: "Buscar uma formação acadêmica é uma escolha que visa a especialização e a preparação para o mercado de trabalho em áreas específicas. Isso também pode abrir portas para empregos com melhores salários e oportunidades de crescimento profissional "
            },
            {
                texto: " Pretendo entrar no mercado de trabalho o mais rápido possível.",
                afirmacao: " Escolher entrar no mercado de trabalho após o ensino médio pode oferecer uma experiência prática valiosa, permitindo que a pessoa desenvolva habilidades imediatamente e comece a construir uma carreira, sem a necessidade de um diploma universitário. "
            }
        ]
    },
    {
        enunciado: "2. Como você acredita que as experiências do ensino médio vão impactar seu futuro?",
        alternativas: [
            {
                texto: " As experiências sociais e acadêmicas do ensino médio me prepararam para os desafios da vida adulta.",
                afirmacao: "O ensino médio oferece uma base sólida para o futuro, com experiências tanto acadêmicas quanto sociais que ajudam a moldar a capacidade de lidar com desafios profissionais e pessoais na vida adulta."
            },
            {
                texto: "Eu sinto que a escola foi mais uma fase que agora fica para trás, sem muitos impactos no meu futuro.",
                afirmacao: "Para algumas pessoas, o ensino médio pode parecer apenas uma etapa necessária para seguir em frente. A experiência pode ser vista como algo passageiro, sem um impacto tão significativo nas escolhas futuras, especialmente se essas escolhas envolverem áreas muito diferentes da educação formal."
            }
        ]
    },
    {
        enunciado: "3. Qual é a principal motivação que você tem para escolher seu caminho após o ensino médio?",
        alternativas: [
            {
                texto: "Quero conquistar estabilidade financeira e construir uma carreira sólida.",
                afirmacao: "Buscar a estabilidade financeira logo após o ensino médio é uma prioridade para muitos, e isso pode ser alcançado por meio de escolhas profissionais estratégicas, como um curso técnico ou um emprego em uma área com alta demanda."
            },
            {
                texto: "Busco realização pessoal e a possibilidade de explorar minha paixão por algo específico.",
                afirmacao: "Para outros, o futuro é mais sobre encontrar um propósito ou paixão, o que pode levá-los a seguir carreiras ou estudar áreas que os fascinem, mesmo que isso envolva mais riscos ou um caminho menos previsível."
            }
        ]
    },
    {
        enunciado: "4. Como você se sente em relação ao risco de não saber o que fazer após o ensino médio?",
        alternativas: [
            {
                texto: "Sinto que a pressão de decidir logo é muito grande, mas estou tentando me preparar de qualquer forma.",
                afirmacao: " A pressão para decidir rapidamente o que fazer após o ensino médio pode ser um grande estresse, mas algumas pessoas tentam reduzir esse peso preparando-se de forma geral, seja buscando cursos extras, estágios ou experiências profissionais."
            },
            {
                texto: "Não me preocupo com isso; tenho certeza de que vou encontrar um caminho no meu tempo.",
                afirmacao: "Para quem não sente pressa, o tempo é visto como aliado. A ideia de que as oportunidades surgirão naturalmente permite uma abordagem mais tranquila e sem pressões externas, focando em encontrar o melhor caminho de forma orgânica."
            }
        ]
    },
    {
        enunciado: "5. Você acredita que o que você aprenderá após o ensino médio será mais importante do que o que aprendeu na escola?",
        alternativas: [
            {
                texto: "Sim, acho que a faculdade ou o trabalho será onde realmente desenvolvo minhas habilidades e aprendo o que importa.",
                afirmacao: "Muitas pessoas acreditam que o ensino formal, seja na faculdade ou em um ambiente de trabalho, é onde realmente se aprende as habilidades práticas e técnicas que são essenciais para a vida profissional, superando a educação mais genérica do ensino médio.."
            },
            {
                texto: "Não, eu acredito que a base do ensino médio já me preparou o suficiente para o que virá.",
                afirmacao: "Alguns acreditam que a base que o ensino médio oferece é o suficiente para a vida adulta, considerando que o aprendizado ali adquirido é essencial e que a adaptação ao mercado de trabalho será mais uma questão de vivência do que de novos conhecimentos acadêmicos."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
