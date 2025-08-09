 function fazerLogin() {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value.trim();

    // Validação do e-mail (simples)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    // Aqui entraria a lógica de autenticação real
    alert("Login realizado com sucesso!");
}

function recuperarSenha() {
    alert("Redirecionando para recuperação de senha...");
}

function cadastro() {
    alert("Redirecionando para página de cadastro...");
}