// Lista completa combinando as imagens locais e fotos variadas (reais e IA)
const perguntasOriginais = [
    // --- REAIS ---
    { url: "fusca.jpg", resposta: "real" },
    { url: "ferrari_expo.jpg", resposta: "real" },
    { url: "cachorro.jpg", resposta: "real" },
    { url: "chapada.jpg", resposta: "real" },
    { url: "montanha.jpg", resposta: "real" },
    { url: "lendo.jpg", resposta: "real" },
    { url: "Correndo.jpg", resposta: "real" },
    { url: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80", resposta: "real" }, // Exemplo de gato/animal real
    { url: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80", resposta: "real" },
    { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", resposta: "real" },
    
    // --- IA ---
    { url: "Lago.jpg", resposta: "ia" },
    { url: "Menino.jpg", resposta: "ia" },
    { url: "Moça.jpg", resposta: "ia" },
    { url: "Caminhão.jpg", resposta: "ia" },
    { url: "golden.jpg", resposta: "ia" },
    { url: "Baleia.jpg", resposta: "ia" },
    { url: "https://5287aa00874a313e299d-1850966fc307ff23e1e789aeafd2476b.ssl.cf5.rackcdn.com/PostImagem/50205/imagem-feita-por-ia-vence-concurso-fotograacutefico_o1gpt0htc9sb14gm2f1mss1iove.jpg", resposta: "ia" },
    { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", resposta: "ia" },
    { url: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80", resposta: "ia" },
    { url: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=800&q=80", resposta: "ia" }
];

let perguntas = [];
let indiceAtual = 0;
let pontuacao = 0;

const imagemElemento = document.getElementById("quiz-image");
const feedbackElemento = document.getElementById("feedback");
const pontuacaoElemento = document.getElementById("pontuacao");

// Função para embaralhar a lista de perguntas aleatoriamente
function embaralharPerguntas(array) {
    let copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function iniciarJogo() {
    perguntas = embaralharPerguntas(perguntasOriginais);
    indiceAtual = 0;
    pontuacao = 0;
    pontuacaoElemento.textContent = pontuacao;
    imagemElemento.style.display = "block";
    document.querySelector(".buttons").style.display = "flex";
    carregarPergunta();
}

function carregarPergunta() {
    if (indiceAtual < perguntas.length) {
        imagemElemento.src = perguntas[indiceAtual].url;
        feedbackElemento.textContent = "";
    } else {
        imagemElemento.style.display = "none";
        document.querySelector(".buttons").style.display = "none";
        feedbackElemento.innerHTML = `Fim do jogo! Pontuação final: ${pontuacao}/${perguntas.length}.<br><button onclick="iniciarJogo()" style="margin-top: 15px; background-color: #3498db; color: white; padding: 10px; border: none; border-radius: 5px; cursor: pointer;">Jogar Novamente</button>`;
    }
}

function verificarResposta(escolha) {
    const respostaCorreta = perguntas[indiceAtual].resposta;

    if (escolha === respostaCorreta) {
        feedbackElemento.textContent = "Acertou! 🎉";
        feedbackElemento.style.color = "#2ecc71";
        pontuacao++;
    } else {
        feedbackElemento.textContent = "Errou! ❌";
        feedbackElemento.style.color = "#e74c3c";
    }

    pontuacaoElemento.textContent = pontuacao;
    indiceAtual++;

    // Espera 1.5 segundos antes de ir para a próxima imagem
    setTimeout(carregarPergunta, 1500);
}

// Inicia o quiz ao carregar a página
iniciarJogo();