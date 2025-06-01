
// teste sem formatação abaixo


document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('.botoes a'); // Seleciona todos os links dentro de .botoes

    // Adiciona um listener de clique a cada botão
    botoes.forEach(function(botao) {
        botao.addEventListener('click', function(event) {
            // Previne o comportamento padrão do link (navegar para #)
            event.preventDefault();

            // Remove a classe 'ativo' de todos os botões
            botoes.forEach(function(b) {
                b.classList.remove('ativo');
            });

            // Adiciona a classe 'ativo' ao botão que foi clicado
            this.classList.add('ativo');
        });
    });

    // Opcional: Seleciona o primeiro botão por padrão ao carregar a página
    if (botoes.length > 0) {
        botoes[0].classList.add('ativo');
    }
});