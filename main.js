const containerDivs = document.getElementById("container_divs");
let TOTAL_SQUARES = 16;
const btn_change = document.querySelector(".btn-change");

for (let i = 0; i < TOTAL_SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener('mouseover', () => {
        setColor(square);
    });
    containerDivs.appendChild(square);
}

function setColor(el) {
    const color = `rgb(${randomNumber0to255()}, ${randomNumber0to255()}, ${randomNumber0to255()})`;
    el.style.background = color;
}


function randomNumber0to255() {
    return Math.floor(Math.random() * 256);
}

