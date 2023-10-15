const bgimg = document.querySelector(".bgimg")
const imgs = [
  "0.png",
  "1.png",
]
const randombg = imgs[Math.floor(Math.random() * imgs.length)];
bgimg.src = `img/${randombg}`;

