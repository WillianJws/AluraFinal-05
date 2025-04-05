// PARTE 1: Lista de perguntas e respostas
const perguntas = [
    {
      pergunta: "Qual é a capital da França?",
      respostas: [
        { opcao: "Paris", correto: true },
        { opcao: "Londres", correto: false },
        { opcao: "Roma", correto: false },
        { opcao: "Berlim", correto: false }
      ]
    },
    {
      pergunta: "Quem escreveu 'Dom Quixote'?",
      respostas: [
        { opcao: "Miguel de Cervantes", correto: true },
        { opcao: "William Shakespeare", correto: false },
        { opcao: "Machado de Assis", correto: false },
        { opcao: "J.K. Rowling", correto: false }
      ]
    },
    {
      pergunta: "Qual é o maior planeta do sistema solar?",
      respostas: [
        { opcao: "Júpiter", correto: true },
        { opcao: "Saturno", correto: false },
        { opcao: "Terra", correto: false },
        { opcao: "Marte", correto: false }
      ]
    },
    {
      pergunta: "Qual é a fórmula química da água?",
        respostas: [
            { opcao: "H2O", correto: true },
            { opcao: "CO2", correto: false },
            { opcao: "O2", correto: false },
            { opcao: "NaCl", correto: false }
        ]
    },
    {
      pergunta: "Quem pintou a Mona Lisa?",
        respostas: [
            { opcao: "Leonardo da Vinci", correto: true },
            { opcao: "Pablo Picasso", correto: false },
            { opcao: "Vincent van Gogh", correto: false },
            { opcao: "Claude Monet", correto: false }
        ]
    },
    {
        pergunta: "Qual é a capital do Brasil?",
        respostas: [
            { opcao: "Brasília", correto: true },
            { opcao: "Rio de Janeiro", correto: false },
            { opcao: "São Paulo", correto: false },
            { opcao: "Salvador", correto: false }
        ]
    },
    {
        pergunta: "Qual é o elemento químico com o símbolo 'O'?",
        respostas: [
            { opcao: "Oxigênio", correto: true },
            { opcao: "Ouro", correto: false },
            { opcao: "Ósmio", correto: false },
            { opcao: "Oxônio", correto: false }
        ]
    },
    {
        pergunta: "Qual é a capital da França?",
        respostas: [
            { opcao: "Paris", correto: true },
            { opcao: "Londres", correto: false },
            { opcao: "Berlim", correto: false },
            { opcao: "Madri", correto: false }
        ]
    },
    // Adicione mais perguntas aqui
  ];
  
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      const resposta = perguntaAtual.respostas[i];
  
      const botao = document.createElement("button"); // Cria o botão para a resposta
      botao.classList.add("botao-resposta"); // Adiciona uma classe para o botão
      botao.innerText = resposta.opcao; // Define o texto do botão
  
      // Evento de clique para o botão
      botao.onclick = function () {
        if (resposta.correto) { // Verifica se a resposta está correta
          acertos++; // Incrementa o contador de acertos
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          finalizarJogo(); // Finaliza o jogo quando as perguntas terminarem
        }
      };
  
      // Adiciona o botão à lista de respostas
      respostasElemento.appendChild(botao);
    }
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }
  
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();


  // PARTE 7: Reiniciar o jogo
function reiniciarJogo() {
      indiceAtual = 0; // Reinicia o índice da pergunta
      acertos = 0; // Reinicia o contador de acertos
      conteudo.style.display = "flex"; // Mostra as perguntas
      conteudoFinal.style.display = "none"; // Esconde a tela final
      carregarPergunta(); // Carrega a primeira pergunta novamente
      }
