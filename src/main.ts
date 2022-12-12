window.onload = () => {
    fillCardsFace();

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.add("is-flipped");
            let n: any = card.textContent;
            n = n.replace(/\s+/g, " ");
            // if (n == " A A ") {
            //     console.log(n);
            // }
        });
    });

    trialsLeft.innerHTML = trials.toString();

    createLetterCell();
    guessedLetterInput();
};

const cards = document.querySelectorAll(".card");
const trialsLeft = document.querySelector("#trialsLeft") as HTMLSpanElement;
const cardsContainer = document.querySelector("#cardsContainer") as any;
const cardFace = document.querySelector(".card__face") as HTMLDivElement;
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
//prettier-ignore
const alphabet: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","W","X","Y","Z",
];

const newGame = () => {
    createLetterCell();
    guessedLetterInput();

    trials = 5;
    resultDiv.innerHTML = `Pozostało prób: <span id="trialsLeft">${trials}</span>`;
    wordArrLength = 0;

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.add("is-flipped");
            let n: any = card.textContent;
            n = n.replace(/\s+/g, " ");
        });
    });
};

const fillCardsFace = () => {
    for (let i = 0; i < alphabet.length; i++) {
        cardsContainer.innerHTML += `<div class="scene scene--card">
                                        <div class="card">
                                            <div class="card__face card__face--front">${alphabet[i]}</div>
                                            <div class="card__face card__face--back">${alphabet[i]}</div>
                                        </div>
                                    </div>`;
    }
};

const generateRandomWord = () => {
    let random = Math.floor(Math.random() * words.length);
    let randomWord = words[random];
    return randomWord;
};

let wordArr: string[];
let wordArrLength = 0;

const createLetterCell = () => {
    let word = generateRandomWord();
    let chars = word.split("");
    wordArr = chars;

    clearWordCells();

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
            compareLetters(e.key);
            return true;
        }
    });
};

const resultDiv = document.querySelector("#trialsText") as HTMLDivElement;
let trials = 5;

const compareLetters = (input: string) => {
    const lettersContainerAsAll =
        lettersContainer.querySelectorAll(".gss-cell");

    let index: number[] = [];

    for (let i = 0; i < wordArr.length; i++) {
        if (
            wordArr[i] == input &&
            lettersContainerAsAll[i].innerHTML != input
        ) {
            index.push(i);

            index.forEach((el) => {
                lettersContainerAsAll[el].innerHTML = input;
            });

            wordArrLength++;
        }
    }

    if (index.length == 0) {
        if (trials != 1) {
            trials--;
            trialsLeft.innerHTML = trials.toString();
        } else {
            resultDiv.innerHTML = "Skończyły się próby. Przegrałeś!";
            deleteEventListeners();
        }
    } else if (
        index.length != 0 &&
        wordArrLength != 0 &&
        wordArrLength == wordArr.length
    ) {
        resultDiv.innerHTML = "Brawo, Wygrałeś!";
        deleteEventListeners();
    }
};

const deleteEventListeners = () => {
    cards.forEach((card) => {
        card.addEventListener(
            "click",
            (event) => {
                event.stopImmediatePropagation();
            },
            true
        );
    });

    document.addEventListener(
        "keypress",
        (event) => {
            event.stopImmediatePropagation();
        },
        true
    );
};
