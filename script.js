const noBtn = document.getElementById("move-random");

noBtn.style.position = "absolute";

document.addEventListener("mousemove", (e) => {
    const btnRect = noBtn.getBoundingClientRect();

    const btnX = btnRect.left + btnRect.width / 2;
    const btnY = btnRect.top + btnRect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distance = Math.sqrt(
        Math.pow(mouseX - btnX, 2) + Math.pow(mouseY - btnY, 2)
    );

    // how close the cursor can get before it runs away
    if (distance < 100) {
        moveButton();
    }
});

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}
