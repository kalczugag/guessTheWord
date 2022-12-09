const cards = document.querySelectorAll(".card");

window.onload = () => {
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("is-flipped");
            let n: any = card.textContent;
            n = n.replace(/\s+/g, " ");
            // if (n == " A A ") {
            //     console.log(n);
            // }
        });
    });

    createLetterCell();
};

const lettersContainer = document.querySelector("#chars-container") as any;
const words: string[] = [
    "sowa",
    "alfabet",
    "motocykl",
    "rower",
    "ucho",
    "skunks",
    "noga",
    "oczy",
    "krajobraz",
];

const generateRandomWord = () => {
    let random = Math.floor(Math.random() * words.length);
    let randomWord = words[random];
    return randomWord;
};

const createLetterCell = () => {
    let word = generateRandomWord();
    clearWordCells();
    console.log(word);
    for (let i = 0; i < word.length; i++) {
        const elem = document.createElement("div");
        elem.classList.add("gss-cell");
        lettersContainer.appendChild(elem);
    }
};

const clearWordCells = () => {
    lettersContainer.innerHTML = "";
};

const guessedLetterInput = () => {
    document.addEventListener("keypress", (e) => {
        const charCode = e.keyCode;

        if (
            (charCode > 64 && charCode < 91) ||
            (charCode > 96 && charCode < 123)
        ) {
            return true;
        } else {
            return false;
        }
    });
};

guessedLetterInput();
