const logo = document.getElementById("logo");

let images = ["images/macdonalds.png", "images/ronaldo.png"];
let index = 0;

// Wechsel bei jeder halben Drehung (1.5s bei 3s Animation)
setInterval(() => {
    index = (index + 1) % images.length;
    logo.src = images[index];
}, 1500); // 1.5s entspricht 180° der Animation
