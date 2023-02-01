function isInt(value) {
    return !isNaN(value) && 
           parseInt(Number(value)) == value && 
           !isNaN(parseInt(value, 10));
}

let valorAEsquerda = ""
let valorADireita = ""
let operador = ""

painelResultado = $("#resultado");

function adicionarCaracterAoResultado(caracter) {
    valorQueEstaNoPainel = painelResultado.text()

    if (isInt(caracter)) {
        if(valorQueEstaNoPainel.includes("+")
            || valorQueEstaNoPainel.includes("-")
            || valorQueEstaNoPainel.includes("x")
            || valorQueEstaNoPainel.includes("/")
        ) {
            valorADireita += caracter
        } else {
            valorAEsquerda += caracter
        }

    } else {
        operador = caracter
    }


    valorNovoDoPainel = valorQueEstaNoPainel + caracter

    // Mudar o valor no painel
    painelResultado.text(valorNovoDoPainel);

    console.log("valorAEsquerda: " + valorAEsquerda)
    console.log("valorADireita: " + valorADireita)
    console.log("operador: " + operador)
    console.log("")
}

$("#btn1").click(function() {
    adicionarCaracterAoResultado(1);
})

$("#btn2").click(function() {
    adicionarCaracterAoResultado(2);
})

$("#btn3").click(function() {
    adicionarCaracterAoResultado(3);
})

$("#btn4").click(function() {
    adicionarCaracterAoResultado(4);
})

$("#btn5").click(function() {
    adicionarCaracterAoResultado(5);
})

$("#btn6").click(function() {
    adicionarCaracterAoResultado(6);
})

$("#btn").click(function() {
    adicionarCaracterAoResultado(7);
})

$("#btn8").click(function() {
    adicionarCaracterAoResultado(8);
})

$("#btn9").click(function() {
    adicionarCaracterAoResultado(9);
})

$("#btn0").click(function() {
    adicionarCaracterAoResultado(0);
})

$("#btnMais").click(function() {
    adicionarCaracterAoResultado("+");
})

$("#btnMenos").click(function() {
    adicionarCaracterAoResultado("-");
})

$("#btnVezes").click(function() {
    adicionarCaracterAoResultado("x");
})

$("#btnDiv").click(function() {
    adicionarCaracterAoResultado("/");
})

$("#btnIgual").click(function() {
    if(operador == "+") {
       painelResultado.text(parseInt(valorADireita) + parseInt(valorAEsquerda));
    } else if(operador == "-") {
        painelResultado.text(parseInt(valorAEsquerda) - parseInt(valorADireita));
    } else if(operador == "x") {
        painelResultado.text(parseInt(valorAEsquerda) * parseInt(valorADireita));
    } else if(operador == "/") {
        painelResultado.text(parseInt(valorAEsquerda) / parseInt(valorADireita));
    }

    operador = ""
    valorADireita = ""
    valorAEsquerda = painelResultado.text()
})

$("#btnDelete").click(function() {
    novoPainelResultado = ""
    tamanho = painelResultado.text().length

    if(tamanho > 0) {
        novoPainelResultado = painelResultado.text().slice(0, tamanho - 1)

        operador = "";
        valorADireita = "";
        valorAEsquerda = "";

        novoPainelResultado.split("").forEach(element => {
            if(!isInt(element)) {
                /// Não é inteiro, portanto é um operador
                operador = element;
            } else {
                /// É um inteiro

                if(operador == "") {
                    /// Não tem operador, alimenta a variavel da esquerda 
                    valorAEsquerda = element;
                } else {
                    /// Tem operador, alimenta a variavel da direita 
                    valorADireita = element;
                }
            }
        })
    }

    painelResultado.text(novoPainelResultado)
})