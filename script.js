const titles = [
    "Developer",
    "Designer",
    "Artist"
];

const images = [
    "assets/home/developer.png",
    "assets/home/designer.png",
    "assets/home/artist.png"
];

const text = document.getElementById("changingText");
const image = document.getElementById("heroImage");

let index = 0;

function changeHero() {
    index = (index + 1) % titles.length;

    // Fade out
    image.classList.add("opacity-0");
    text.classList.add("opacity-0");

    setTimeout(() => {
        text.textContent = titles[index];
        image.src = images[index];

        // Fade in
        image.classList.remove("opacity-0");
        text.classList.remove("opacity-0");
    }, 300);
}

// Change every 5 seconds
setInterval(changeHero, 5000);