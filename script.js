function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }
  document.getElementById("whatsappForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
  
    const text = `Bonjour, je souhaite vous contacter :%0A
  👤 Nom : ${name}%0A
  📧 Email : ${email}%0A
  📱 Téléphone : ${phone}%0A
  📝 Message : ${message}`;
  
    const whatsappNumber = "213659181999"; // without 0
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURI(text)}`;
  
    window.open(whatsappURL, "_blank");
  });
    