emailjs.init({
  publicKey: "cZe79OJb1dpgeKLxw",
});

function handleEmail() {
  let templateParams = {
    name: "Destinatário",
    send_email: "andreluispb10@gmail.com",
    from_name: "André",
    message: "Conteúdo da mensagem aqui...",
  };

  emailjs
    .send("service_lz3zb2q", "template_5phx0sq", templateParams)
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
    }),
    function (error) {
      console.log("FAILED...", error);
    };
}
