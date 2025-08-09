
function fazerCadastro() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirmar = document.getElementById("confirmar").value.trim();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome.length < 3) {
        alert("Digite seu nome completo.");
        return;
    }
    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }
    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }
    if (senha !== confirmar) {
        alert("As senhas não conferem.");
        return;
    }

    // Aqui futuramente entraria a lógica de salvar no banco de dados
    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html"; // Redireciona para o login
}
