document.addEventListener("DOMContentLoaded", function() {
    const calculadoraForm = document.getElementById("calculadora-form");
    const opcaoSelect = document.getElementById("opcao");
    const descontoInput = document.getElementById("desconto-input");
    const precoFinalInput = document.getElementById("preco-final-input");
    const calcularBtn = document.getElementById("calcular-btn");
    const resultadoDiv = document.getElementById("resultado");
    const valorFinalSpan = document.getElementById("valor-final");

    // Função para exibir os campos apropriados com base na seleção inicial
    function exibirCamposIniciais() {
        if (opcaoSelect.value === "1") {
            descontoInput.style.display = "block";
            precoFinalInput.style.display = "none";
        } else if (opcaoSelect.value === "2") {
            precoFinalInput.style.display = "block";
            descontoInput.style.display = "none";
        }
    }

    // Chama a função para exibir os campos iniciais quando a página é carregada
    exibirCamposIniciais();

    opcaoSelect.addEventListener("change", function() {
        exibirCamposIniciais();
    });

    calcularBtn.addEventListener("click", function() {
        const preco = parseFloat(document.getElementById("preco").value);
        const opcao = parseInt(opcaoSelect.value);

        if (opcao === 1) {
            const desconto = parseFloat(document.getElementById("desconto").value);
            const cupom = parseFloat(document.getElementById("cupom").value);
            const descontoPercentual = (100 - desconto) / 100;
            const valorFinal = (preco * descontoPercentual) - cupom;
            valorFinalSpan.textContent = `O valor final é de R$ ${valorFinal.toFixed(2)}`;
        } else if (opcao === 2) {
            const precoFinal = parseFloat(document.getElementById("preco-final").value);
            const descontoPercentual = ((preco - precoFinal) / preco) * 100;
            valorFinalSpan.textContent = `O percentual de desconto é de ${descontoPercentual.toFixed(2)}%`;
        }

        resultadoDiv.style.display = "block";
    });
});
