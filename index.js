const coinsArea = document.getElementById("main");
const noCoinsLabel = document.getElementById("no-coins-label");
const coinsAreaClientRect = coinsArea.getBoundingClientRect();

const coinWidth = 30;
const coinsCountInRow = Math.ceil(coinsArea.clientWidth / coinWidth);

coinsArea.addEventListener("click", startCoinsFall);

const xPos = coinsAreaClientRect.left;

function startCoinsFall() {
  coinsArea.removeChild(noCoinsLabel);

  for (let i = 0; i < coinsCountInRow; i++) {
    const coin = document.createElement("div");
    coin.classList.add("coin");
    coin.style.left = `${xPos + i * coinWidth}px`;
    coin.style.top = `-${coinWidth}px`;
    coinsArea.appendChild(coin);

    anime({
      targets: coin,
      translateY: [{ value: `100vh`, duration: 600, easing: "easeInQuad" }],
      delay: i * 100,
      duration: 600,
      easing: "easeInQuad",
    });
  }
}
