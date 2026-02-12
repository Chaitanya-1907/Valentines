const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

noBtn.addEventListener("mouseover", () => {
  const maxX = 120;
  const maxY = 40;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});


const overlay = document.getElementById("letterOverlay");

yesBtn.addEventListener("click", () => {
  message.innerText = "HEHE 😛, I LOVE YOU SO MUCH 😽😘";
  overlay.classList.remove("hidden");
  overlay.style.display = "flex";
});

