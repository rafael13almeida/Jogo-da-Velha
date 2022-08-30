let x = document.querySelector(".x");
let o = document.querySelector(".o");
let campo = document.querySelectorAll(".campo")
let buttons = document.querySelectorAll("#buttons-container button");
let mensagemContainer = document.querySelector("#mensagem");
let mensagemTexto = document.querySelector("#mensagem p");
let segundoJogador;

//contador
let jogador1 = 0;
let jogador2 = 0;

//adicionando o evento de cliques nos campos
for (let i = 0; i < campo.length; i++) {

    //quando alguém clicar no campo
    campo[i].addEventListener("click", function () {

        let el = checkElemento(jogador1, jogador2);

        //verifica se tem campo marcado
        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            if (jogador1 == jogador2) {
                jogador1++;
            } else {
                jogador2++;
            }
        }
    })
}

//quem vai jogar
function checkElemento(jogador1, jogador2) {
    
    if (jogador1 == jogador2) {
        //x
        el = x;
    } else {
        //o
        el = o;
    }
    return el;
}
