function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const winner = getRandomInt(1, 3)

function isWinner(button) {
    const buttonNumber = parseInt(button.getAttribute('data-number'));
    if (buttonNumber === winner) {
        alert("Congratulations! You won!");
    } else {
        alert("You lost");
    }
}