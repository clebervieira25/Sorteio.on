function enviarRecuperacao() {
    const email = document.getElementById("email").value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("Por favor, digite um e-mail válido.");
        return;
    }

    // Aqui futuramente você colocará a lógica de envio real
    alert(`Um link de recuperação foi enviado para ${email}.`);
}