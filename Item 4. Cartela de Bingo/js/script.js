function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNumbers() {
    var r = document.getElementsByClassName("random");
    let min = 1;
    let max = 75;
    for (let i = 0; i < r.length; i++) {
        r[i].innerHTML = getRandomIntInclusive(min, max);
    }
}

window.onload = randomNumbers;
