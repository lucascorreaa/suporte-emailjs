(function() {
    emailjs.init({
        publicKey: "oFxQSa31QMcD-3UX7",
    })
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault()

    emailjs.sendForm("service_y960qy4", "template_n4fcw9f", this)
    .then(
        function() {
            console.log("Success!")
            alert("Email enviado com sucesso")
        }
    ), function(err) {
        console.log("Fail", err)
        alert("Falha ao enviar o email, tente mais tarde!")
    }
})