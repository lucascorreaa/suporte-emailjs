import env from '../../../config/config.js';

emailjs.init({
  publicKey: env.jS_APP_EMAILJS_PUBLICKEY,
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(env.jS_APP_EMAILJS_SERVICEID, env.jS_APP_EMAILJS_TEMPLATEID_RECEIVED, this)
      .then(() => {
        console.log("Success!");
        alert("Email enviado com sucesso");
      }), (err) => {
        console.log("Fail", err);
        alert("Falha ao enviar o email, tente mais tarde!");
      };
  });
