function respostaSim() {
    // Mover o botão "Não" para fora da tela
    const naoBtn = document.getElementById("naoBtn");
    naoBtn.style.position = "absolute";
    naoBtn.style.left = "-9999px"; // Move o botão para uma posição fora da tela

    // Atualiza a mensagem
    var mensagemElement = document.getElementById("mensagem");
    mensagemElement.innerText = "Oxii então fecho, fala comigo no whats! Tmj, amo tu ♡";

    // Adiciona estilos ao elemento de texto
    mensagemElement.style.color = "white";
    mensagemElement.style.fontSize = "1.2em"; // Ajuste o tamanho conforme necessário
}

function mudarPosicaoNao() {
    // Mover o botão "Não" para uma posição aleatória
    const naoBtn = document.getElementById("naoBtn");
    naoBtn.style.position = "absolute";
    naoBtn.style.left = Math.random() * (window.innerWidth - naoBtn.clientWidth) + "px";
    naoBtn.style.top = Math.random() * (window.innerHeight - naoBtn.clientHeight) + "px";
}