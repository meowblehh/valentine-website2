const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const gif = document.getElementById("gif");

const gifs = [
    "https://tenor.com/view/bubu-dudu-sseeyall-gif-12611896631449379850",
    "https://tenor.com/view/bubu-bubu-dudu-dudu-bear-karadi-gif-9121478983673994842",
    "https://tenor.com/view/bubu-dudu-bubu-yier-bubbu-dudu-gif-3678995533591623282",
    "https://tenor.com/view/bubu-bubu-dudu-bubbu-bear-bhalu-gif-12782870542608816906"
];

let noClickCount = 0;

noButton.addEventListener("click", () => {
    noClickCount++;
    yesButton.style.transform = `scale(${1 + noClickCount * 0.2})`; // Makes the Yes button grow with each click
    if (noClickCount >= 5) {
        noButton.disabled = true; // Disables the No button after 5 clicks
    }
    changeGif();
});

yesButton.addEventListener("click", () => {
    window.location.href = "valentine-love.html"; // Redirect to the "YAYYYY" page
});

function changeGif() {
    let randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    gif.src = randomGif;
}
