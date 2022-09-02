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

            //verifica quem venceu 
            verificaVencedor();
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

//função que verifica quem venceu
function verificaVencedor() {
    let b1 = document.getElementById("campo1");
    let b2 = document.getElementById("campo2");
    let b3 = document.getElementById("campo3");
    let b4 = document.getElementById("campo4");
    let b5 = document.getElementById("campo5");
    let b6 = document.getElementById("campo6");
    let b7 = document.getElementById("campo7");
    let b8 = document.getElementById("campo8");
    let b9 = document.getElementById("campo9");

    //horizontal
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            declaraVencedor('x');
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declaraVencedor('o');
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declaraVencedor('x');
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declaraVencedor('o');
        }
    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declaraVencedor('x');
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declaraVencedor('o');
        }
    }

    //vertical

    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declaraVencedor('x');
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declaraVencedor('o');
        }
    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declaraVencedor('x');
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declaraVencedor('o');
        }
    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declaraVencedor('x');
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declaraVencedor('o');
        }
    }

    //diagonal
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declaraVencedor('x');
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declaraVencedor('o');
        }
    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            declaraVencedor('x');
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declaraVencedor('o');
        }
    }

    // Deu velha
    let contador = 0;

    for (let i = 0; i < campo.length; i++) {
        if (campo[i].childNodes[0] != undefined) {
            contador++;
        }
    }

    if (contador == 9) {
        declaraVencedor('Deu velha');
    }
}

// Limpa o jogo, atualiza o vencedor e atualiza o placar

function declaraVencedor(vencedor) {
    let campoPlacarx = document.querySelector("#placar-1");
    let campoPlacaro = document.querySelector("#placar-2");
    let msg = '';

    if (vencedor == 'x') {
        campoPlacarx.textContent = parseInt(campoPlacarx.textContent) + 1;
        msg = "X venceu !!!";

    } else if (vencedor == 'o') {
        campoPlacaro.textContent = parseInt(campoPlacaro.textContent) + 1;
        msg = "O venceu !!!";

    } else {
        msg = "Deu Velha !!!";
    }

    mensagemTexto.innerHTML = msg;
    mensagemContainer.classList.remove("hide");

    // Para esconder novamente a mensagem

    setTimeout(function () {
        mensagemContainer.classList.add("hide");
    }, 3000)

    // zerando as jogadas
    jogador1 = 0;
    jogador2 = 0;

    // remove elementos dos campos
    let limpaCampo = document.querySelectorAll(".campo div");


    for (let i = 0; i < limpaCampo.length; i++) {
        limpaCampo[i].parentNode.removeChild(limpaCampo[i]);
    }

}

// Exibindo a mensagem 

