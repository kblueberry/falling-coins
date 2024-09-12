const coinsArea = document.getElementById("main");
const noCoinsLabel = document.getElementById("no-coins-label");
const coinsAreaClientRect = coinsArea.getBoundingClientRect();

const coinWidth = 30;
const coinsInRowCount = Math.ceil(coinsArea.clientWidth / coinWidth);
const maxCoinsRows = Math.ceil(coinsArea.clientHeight / coinWidth);

coinsArea.addEventListener("click", startCoinsFall);

const xPos = coinsAreaClientRect.left;

// initiated row variable which indicates which row is exactly animated
// TODO when row is full of coins, go on with animation of the next one - coinsArea - filled coins rows
function startCoinsFall() {
  coinsArea.removeChild(noCoinsLabel);

  for (let row = 0; row < maxCoinsRows; row++) {
    for (let i = 0; i < coinsInRowCount; i++) {
      const coin = document.createElement("div");
      coin.classList.add("coin");
      coin.style.left = `${xPos + i * coinWidth}px`;
      coin.style.top = "-5%";
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
}
