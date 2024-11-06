document.addEventListener("DOMContentLoaded", function() {
    const btnLogin = document.getElementsByClassName("btn login")[0];
    const btnCadastrar = document.getElementsByClassName("btn cadastrar")[0];

    const modalLogin = document.getElementById("ModalLogin");
    const modalCadastrar = document.getElementById("ModalCadastrar");

    const spanLogin = document.getElementById("spanLogin");
    const spanCadastro = document.getElementById("spanCadastro");

    // Função para abrir e fechar o modal de login
    btnLogin.onclick = function() {
        modalLogin.style.display = "block";
    };

    spanLogin.onclick = function() {
        modalLogin.style.display = "none";
    };

    // Função para abrir e fechar o modal de cadastro
    btnCadastrar.onclick = function() {
        modalCadastrar.style.display = "block";
    };

    spanCadastro.onclick = function() {
        modalCadastrar.style.display = "none";
    };

    // Função para alternar a visibilidade do menu dropdown
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    dropbtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique se propague para o window.onclick
        // Alterna a visibilidade do dropdown
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Fecha o dropdown se o usuário clicar fora dele
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content') && !event.target.closest('.dropdown')) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Accordion para "Ver mais"
    const showMoreButtons = document.querySelectorAll('.show-more');
    const extraTexts = document.querySelectorAll('.extra-text');

    showMoreButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const extraText = extraTexts[index];

            // Alterna a visibilidade do texto adicional
            extraText.style.display = extraText.style.display === 'none' ? 'inline' : 'none';

            // Alterna o texto do botão entre "Ver mais" e "Ver menos"
            button.textContent = extraText.style.display === 'inline' ? 'Ver menos' : 'Ver mais';
        });
    });
});
