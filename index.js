const container = document.querySelector(".container");
const question = document.querySelector(".question");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const canvas = document.querySelector("#confetti");
const jsConfetti = new JSConfetti();


yes.addEventListener('click', () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const yayText = document.createElement('h2');
    yayText.innerText = "YAYYYYYYYY!!";
    yayText.classList.add("bounce");
    container.appendChild(yayText);


    container.appendChild(canvas);
    jsConfetti.addConfetti();

    jsConfetti.addConfetti({
        confettiRadius: 6,
        confettiNumber: 2000,
    })

    jsConfetti.addConfetti({
        emojis: ['🌈', '✨', '💫', '🌸', '🥳'],
        emojisNumer: 5000,
    })

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('question-img');
    const image = document.createElement('img');
    image.src = "assets/dancing.gif";
    image.alt = "";
    imageContainer.appendChild(image);
    container.appendChild(imageContainer);
});

const randomTexts = [
    "Nooooooooo😭",
    "You seriously don't wanna talk??☹️",
    "Again you pressed no 🥺",
    "Again!! Am I this bad :(",
    "Press YES. You...😩",
    "This is not the YES button 😏"
];

no.addEventListener("mouseover", () => {
    const containerReact = container.getBoundingClientRect();
    const noReact = no.getBoundingClientRect();

    const i = Math.floor(Math.random() * (containerReact.width - noReact.width)) + 1;
    const j = Math.floor(Math.random() * (containerReact.height - noReact.height)) + 1;

    no.style.left = i + 'px';
    no.style.top = j + 'px';

    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    const randomText = randomTexts[randomIndex];
    no.innerText = randomText;

    yes.classList.add("bounce");

    setTimeout(() => {
        yes.classList.remove("bounce");
    }, 500);
});

