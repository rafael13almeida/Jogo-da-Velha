let x = document.querySelector(".x");
let o = document.querySelector(".o");
let campo = document.querySelectorAll(".campo")
let buttons = document.querySelectorAll("#buttons-container button");
let mensagemContainer = document.querySelector("#mensagem");
let mensagemTexto = document.querySelector("#mensagem p");
let segundoJogador;


let jogador1 = 0;
let jogador2 = 0;

for (let i = 0; i < campo.length; i++) {

    campo[i].addEventListener("click", function () {

        let el = checkElemento(jogador1, jogador2);

        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            if (jogador1 == jogador2) {
                jogador1++;

                if(segundoJogador == "ia-jogador") {

                    jogadorIa();
                    jogador2++;
                }
            } else {
                jogador2++;
            }

            verificaVencedor();
        }
    })
}


for(let i = 0; i < buttons.length; i++) {
    
    buttons[i].addEventListener("click", function() {
        segundoJogador = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }

        setTimeout(function () {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500)
    })
}

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


    setTimeout(function () {
        mensagemContainer.classList.add("hide");
    }, 3000)

    jogador1 = 0;
    jogador2 = 0;

    let limpaCampo = document.querySelectorAll(".campo div");


    for (let i = 0; i < limpaCampo.length; i++) {
        limpaCampo[i].parentNode.removeChild(limpaCampo[i]);
    }

}

function jogadorIa() {

    let cloneO = o.cloneNode(true);
    contador = 0;
    preenchido = 0;

    for (let i = 0; i < campo.length; i++ ) {

        let randomIa = Math.floor(Math.random() * 5);

        if(campo[i].childNodes[0] == undefined) {            
            if(randomIa <=1) {
                campo[i].appendChild(cloneO);
                contador++;
                break;
            } 

        }else {
            preenchido++;
        }
    }

    if(contador == 0 && preenchido < 9) {
        jogadorIa();
    }
}
