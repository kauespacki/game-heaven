document.addEventListener("DOMContentLoaded", function() {
    const btnLogin = document.getElementsByClassName("btn login")[0];
    const btnCadastrar = document.getElementsByClassName("btn cadastrar")[0];

    const modalLogin = document.getElementById("ModalLogin");
    const modalCadastrar = document.getElementById("ModalCadastrar");

    var spanLogin = document.getElementById("spanLogin");
    var spanCadastro = document.getElementById("spanCadastro");

    btnLogin.onclick = function() {
        modalLogin.style.display = "block";
        spanLogin.onclick = function() {
            modalLogin.style.display = "none";
        }

        // Quando o usuário clica no <span> (x), fecha o pop-up
        spanLogin.onclick = function() {
            modalLogin.style.display = "none";
        }

        // Quando o usuário clica fora do pop-up, também o fecha
        window.onclick = function(event) {
            if (event.target == modalLogin) {
                modalLogin.style.display = "none";
            }
        }   
    }

    btnCadastrar.onclick = function() {
        modalCadastrar.style.display = "block";
        spanCadastro.onclick = function() {
            modalCadastrar.style.display = "none";
        }

        // Quando o usuário clica no <span> (x), fecha o pop-up
        spanCadastro.onclick = function() {
            modalCadastrar.style.display = "none";
        }

        // Quando o usuário clica fora do pop-up, também o fecha
        window.onclick = function(event) {
            if (event.target == modalCadastrar) {
                modalCadastrar.style.display = "none";
            }
        }   
    }
});