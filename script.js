function orderWhatsApp(productName) {
  const phoneNumber = "212600000000"; // ⚠️ Mets ton numéro WhatsApp ici
  const message = `Bonjour, je souhaite commander le produit : ${productName}. Merci.`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
