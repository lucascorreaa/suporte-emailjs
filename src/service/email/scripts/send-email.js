emailjs.init({
    publicKey: "oFxQSa31QMcD-3UX7"
})

function handleEmail() {

    let templateParams = {
        name: "Destinatário",
        user_email: "suportededomingo@outlook.com",
        from_name: "Suporte de Domingo",
        message: "Conteúdo da mensagem aqui..."
    }

    emailjs.send("service_y960qy4", "template_l31yh4n", templateParams)
        .then((res) => {
            console.log("Email enviado com sucesso!", res.status, res.text)
        }), (error) => {
            console.error("Erro ao enviar o email", error)
        }
}
