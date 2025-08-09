 let numerosSorteados = []


    function gerarNumero() {

        const minimo = parseInt(document.getElementById("minimo").value)
        const maximo = parseInt(document.getElementById("maximo").value)
        const quantidade = parseInt(document.getElementById("quantidade").value)
        const contagemRegressiva = document.getElementById("relogio").checked
        const naoRepetir = document.querySelector('input[name="naoRepetir"]').checked
        const resultado = document.getElementById("resultado")
        const contador = document.getElementById("contador")

        //verificação de valores

        if (isNaN(minimo) || isNaN(maximo) || minimo > maximo || isNaN(quantidade)) {
            alert("digite um valor válido (minimo menor que o máximo).")
            return
        }

        // Veriica se todos os numeros ja foram sorteados

        if (naoRepetir && numerosSorteados.length >= (maximo - minimo + 1)) {
            alert("todos os numeros ja foram sorteados.")
            return
        }



        function sortear() {
            const numeros = []
            let tentativas = 0 // para evitar loop infinito
            


            while (numeros.length <quantidade && tentativas < 1000){
                let numero = Math.floor(Math.random() * (maximo - minimo + 1)) +  minimo  

                if (naoRepetir && (numerosSorteados.includes(numero) || numeros.includes(numero))) {
                    tentativas++
                    continue
                }

                numeros.push(numero)

            if (naoRepetir) {
                numerosSorteados.push(numero)
            }
            }

            resultado.value = numeros.join(', ')
            contador.style.display = "none"
        }

        if (contagemRegressiva) {
            let tempo = 5
            contador.style.display = "flex"
            contador.textContent = tempo

            const intervalo = setInterval(() => {
                tempo--
                if (tempo > 0) {
                    contador.textContent = `Sorteando em ${tempo}...`

                } else {
                    clearInterval(intervalo)
                    sortear()
                }
            }, 1000)
        } else {
            contador.style.display = "none"
            sortear()
        }

    }

    const traducoes = {
        PT: {
            "header-titulo": "Sorteio.on",
            "nav-inicio": "Início",
            "nav-como": "Como Funciona",
            "nav-login": "Login",
            "titulo-sorteio": "Sorteador de Números",
            "label-quantidade": "sortear",
            "label-entre": "número entre",
            "label-e": "e",
            "label-relogio": "contagem Regressiva",
            "label-nao-repetir": "Não repetir Número",
            "btn-gerar": "Gerar Número",
            "label-resultado": "Número Sorteado",
            "rodape1": "© 2025 Sorteio.on - Todos os direitos reservados",
            "rodape2": "Desenvolvido por Cléber Vieira",
            "rodape3": "Versão 1.0"
        },
        EN: {
            "header-titulo": "Sorteio.on",
            "nav-inicio": "Home",
            "nav-como": "How It Works",
            "nav-login": "Login",
            "titulo-sorteio": "Number Draw",
            "label-quantidade": "draw",
            "label-entre": "number between",
            "label-e": "and",
            "label-relogio": "Countdown",
            "label-nao-repetir": "Do not repeat number",
            "btn-gerar": "Generate Number",
            "label-resultado": "Drawn Number",
            "rodape1": "© 2025 Sorteio.on - All rights reserved",
            "rodape2": "Developed by Cléber Vieira",
            "rodape3": "Version 1.0"
        },
        ES: {
            "header-titulo": "Sorteio.on",
            "nav-inicio": "Inicio",
            "nav-como": "Cómo Funciona",
            "nav-login": "Iniciar sesión",
            "titulo-sorteio": "Sorteador de Números",
            "label-quantidade": "sortear",
            "label-entre": "número entre",
            "label-e": "y",
            "label-relogio": "Cuenta regresiva",
            "label-nao-repetir": "No repetir número",
            "btn-gerar": "Generar número",
            "label-resultado": "Número sorteado",
            "rodape1": "© 2025 Sorteio.on - Todos los derechos reservados",
            "rodape2": "Desarrollado por Cléber Vieira",
            "rodape3": "Versión 1.0"
        }
    };

    document.getElementById("opcoes").addEventListener("change", function () {
        const idioma = this.value;
        const textos = traducoes[idioma];

        for (const id in textos) {
            const elemento = document.getElementById(id);
            if (elemento) {
                if (elemento.tagName.toLowerCase() === "input") {
                    elemento.placeholder = textos[id];
                } else {
                    elemento.innerText = textos[id];
                }
            }
        }
    })
