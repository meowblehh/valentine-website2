const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const gif = document.getElementById("gif");

const gifs = [
    "https://media.tenor.com/images/a006d20a2b98b5067e1a82584b330944/tenor.gif",
    "https://media.tenor.com/images/1b6c36ee1f6d28fe16f0133f3f156d77/tenor.gif",
    "https://media.tenor.com/images/30ed517e16808a510c7e5d28cbd7554f/tenor.gif",
    "https://media.tenor.com/images/2079b88f195fe59a9b5d96ea507cd289/tenor.gif"
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
