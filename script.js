// script.js

function sendWhatsApp(productName, price, imageUrl){

  // YOUR FRIEND WHATSAPP NUMBER
  // COUNTRY CODE MUST
  let whatsappNumber = "9342034243";

  let message =
`Hello 👋

I want this product

🛍 Product: ${productName}
💰 Price: ${price}

🖼 Image:
${imageUrl}`;

  let encodedMessage = encodeURIComponent(message);

  let whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
}