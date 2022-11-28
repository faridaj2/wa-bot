const { Client } = require("whatsapp-web.js");
const client = new Client();
const qrcode = require("qrcode-terminal");

client.on("qr", (qr) => {
  console.log("QR RECEIVED", qr);
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
});

client.on("message", (message) => {
  if (message.body === "assalamualaikum") {
    client.sendMessage(message.from, "waalaikum salam");
  }

  if (message.body === "ig") {
    client.sendMessage(
      message.from,
      "Kamu bisa menemukan instagram kami di @dartsachannel"
    );
  }
  if (msg.body == 'alamat') {
    msg.reply('krajan Jalan Raden Wijaya No, Jl. R Supono, Jalen I, Setail, Kec. Genteng, Kabupaten Banyuwangi, Jawa Timur 68486');
  }

});

client.initialize();
