// ================================
// BOTÕES DE CURTIDA
// ================================

const botoes = document.querySelectorAll("article button");

botoes.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {

        let texto = botao.querySelector("span");

        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }
    }
});


// ================================
// BOTÃO DO TEMA ESCURO
// ================================

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);


// Função para alternar entre tema claro e escuro
function mudaTema() {

    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {

        corpoPagina.classList.remove("tema-escuro");

        btnTemaEscuro.textContent = "🌙";

    } else {

        corpoPagina.classList.add("tema-escuro");

        btnTemaEscuro.textContent = "☀️";
    }
}
