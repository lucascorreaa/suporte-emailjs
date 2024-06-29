import env from '../../../config/config.js';

emailjs.init({
  publicKey: env.jS_APP_EMAILJS_PUBLICKEY,
});

export function handleEmail() {
  let templateParams = {
    user_name: "Destinatário",
    user_email: "suportededomingo@outlook.com",
    from_name: "EmailJS de Domingo",
    message: "Ei dev, Thanks? Venho te trazer novidades...",
  };

  emailjs
    .send(env.jS_APP_EMAILJS_SERVICEID, env.jS_APP_EMAILJS_TEMPLATEID_SEND, templateParams)
    .then((res) => {
      console.log("Email enviado com sucesso!", res.status, res.text);
    }),
    (error) => {
      console.error("Erro ao enviar o email", error);
    };
}
