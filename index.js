const coinsArea = document.getElementById("main");
const noCoinsLabel = document.getElementById("no-coins-label");
const coinsAreaClientRect = coinsArea.getBoundingClientRect();

const coinWidth = 30;
const coinsInRowCount = Math.ceil(coinsArea.clientWidth / coinWidth);
const maxCoinsRows = Math.ceil(coinsArea.clientHeight / coinWidth);

coinsArea.addEventListener("click", startCoinsFall);

const xPos = coinsAreaClientRect.left;

function startCoinsFall() {
  if (!coinsArea.contains(noCoinsLabel)) {
    return;
  }

  coinsArea.removeChild(noCoinsLabel);

  for (let row = 0; row < maxCoinsRows; row++) {
    if (row === maxCoinsRows) {
      return;
    }

    for (let cell = 0; cell < coinsInRowCount; cell++) {
      const coin = document.createElement("div");
      coin.classList.add("coin");
      coin.style.left = `${xPos + cell * coinWidth}px`;
      coin.style.top = "-5%";
      coinsArea.appendChild(coin);

      anime({
        targets: coin,
        translateY: [
          {
            value: `${row * coinWidth}px`,
            duration: 600,
            easing: "easeInQuad",
          },
        ],
        delay: cell * 100,
        duration: 600,
        easing: "easeInQuad",
      });
    }
  }
}
