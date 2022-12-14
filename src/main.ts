const cards = document.querySelectorAll(".card");
const trialsLeft = document.querySelector("#trialsLeft") as HTMLSpanElement;
const cardsContainer = document.querySelector("#cardsContainer") as any;
const cardFace = document.querySelector(".card__face") as HTMLDivElement;
const lettersContainer = document.querySelector("#chars-container") as any;

window.onload = () => {
    fillCardsFace();

    const cardsScnd = document.querySelectorAll(".card");
    cardsScnd.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.add("is-flipped");
            let n: any = card.textContent;
            n = n.replace(/\s+/g, " ");
            cardValuesConversion(n);
        });
    });

    trialsLeft.innerHTML = trials.toString();

    createLetterCell();
    guessedLetterInput();
};

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
    "kot",
    "polska",
    "grzyb",
    "drut",
    "salon",
    "kamyk",
    "jagoda",
];
//prettier-ignore
const alphabet: string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","W","X","Y","Z",
];

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

const generateRandomWord = (): string => {
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

const cardValuesConversion = (n: string) => {
    let output = "";

    if (n == " A A ") {
        output = "";
        output = "a";
    } else if (n == " B B ") {
        output = "";
        output = "b";
    } else if (n == " C C ") {
        output = "";
        output = "c";
    } else if (n == " D D ") {
        output = "";
        output = "d";
    } else if (n == " E E ") {
        output = "";
        output = "e";
    } else if (n == " F F ") {
        output = "";
        output = "f";
    } else if (n == " G G ") {
        output = "";
        output = "g";
    } else if (n == " H H ") {
        output = "";
        output = "h";
    } else if (n == " I I ") {
        output = "";
        output = "i";
    } else if (n == " J J ") {
        output = "";
        output = "j";
    } else if (n == " K K ") {
        output = "";
        output = "k";
    } else if (n == " L L ") {
        output = "";
        output = "l";
    } else if (n == " M M ") {
        output = "";
        output = "m";
    } else if (n == " N N ") {
        output = "";
        output = "n";
    } else if (n == " O O ") {
        output = "";
        output = "o";
    } else if (n == " P P ") {
        output = "";
        output = "p";
    } else if (n == " R R ") {
        output = "";
        output = "r";
    } else if (n == " S S ") {
        output = "";
        output = "s";
    } else if (n == " T T ") {
        output = "";
        output = "t";
    } else if (n == " U U ") {
        output = "";
        output = "u";
    } else if (n == " W W ") {
        output = "";
        output = "w";
    } else if (n == " X X ") {
        output = "";
        output = "x";
    } else if (n == " Y Y ") {
        output = "";
        output = "y";
    } else if (n == " Z Z ") {
        output = "";
        output = "z";
    }

    compareLetters(output);
};

const keyboardInputFunction = (e: KeyboardEvent) => {
    const charCode = e.keyCode;

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
        compareLetters(e.key);
        flipCardOnKeyboardInput(e.key);
        return true;
    }
};

const flipCardOnKeyboardInput = (input: string) => {
    const cardThrd = document.querySelectorAll(".card");

    const checkIfLetterExistInArray = (): boolean => {
        let otp = false;
        for (let i = 0; i < wordArr.length; i++) {
            if (wordArr[i] == input) {
                otp = true;
            }
        }
        return otp;
    };

    if (input == "a" && checkIfLetterExistInArray()) {
        cardThrd[0].classList.add("is-flipped");
    } else if (input == "b" && checkIfLetterExistInArray()) {
        cardThrd[1].classList.add("is-flipped");
    } else if (input == "c" && checkIfLetterExistInArray()) {
        cardThrd[2].classList.add("is-flipped");
    } else if (input == "d" && checkIfLetterExistInArray()) {
        cardThrd[3].classList.add("is-flipped");
    } else if (input == "e" && checkIfLetterExistInArray()) {
        cardThrd[4].classList.add("is-flipped");
    } else if (input == "f" && checkIfLetterExistInArray()) {
        cardThrd[5].classList.add("is-flipped");
    } else if (input == "g" && checkIfLetterExistInArray()) {
        cardThrd[6].classList.add("is-flipped");
    } else if (input == "h" && checkIfLetterExistInArray()) {
        cardThrd[7].classList.add("is-flipped");
    } else if (input == "i" && checkIfLetterExistInArray()) {
        cardThrd[8].classList.add("is-flipped");
    } else if (input == "j" && checkIfLetterExistInArray()) {
        cardThrd[9].classList.add("is-flipped");
    } else if (input == "k" && checkIfLetterExistInArray()) {
        cardThrd[10].classList.add("is-flipped");
    } else if (input == "l" && checkIfLetterExistInArray()) {
        cardThrd[11].classList.add("is-flipped");
    } else if (input == "m" && checkIfLetterExistInArray()) {
        cardThrd[12].classList.add("is-flipped");
    } else if (input == "n" && checkIfLetterExistInArray()) {
        cardThrd[13].classList.add("is-flipped");
    } else if (input == "o" && checkIfLetterExistInArray()) {
        cardThrd[14].classList.add("is-flipped");
    } else if (input == "p" && checkIfLetterExistInArray()) {
        cardThrd[15].classList.add("is-flipped");
    } else if (input == "r" && checkIfLetterExistInArray()) {
        cardThrd[16].classList.add("is-flipped");
    } else if (input == "s" && checkIfLetterExistInArray()) {
        cardThrd[17].classList.add("is-flipped");
    } else if (input == "t" && checkIfLetterExistInArray()) {
        cardThrd[18].classList.add("is-flipped");
    } else if (input == "u" && checkIfLetterExistInArray()) {
        cardThrd[19].classList.add("is-flipped");
    } else if (input == "w" && checkIfLetterExistInArray()) {
        cardThrd[20].classList.add("is-flipped");
    } else if (input == "x" && checkIfLetterExistInArray()) {
        cardThrd[21].classList.add("is-flipped");
    } else if (input == "y" && checkIfLetterExistInArray()) {
        cardThrd[22].classList.add("is-flipped");
    } else if (input == "z" && checkIfLetterExistInArray()) {
        cardThrd[23].classList.add("is-flipped");
    }
};

const guessedLetterInput = () => {
    document.addEventListener("keypress", (key) => keyboardInputFunction(key));
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

            for (let i = 0; i < wordArr.length; i++) {
                lettersContainerAsAll[i].innerHTML = wordArr[i];
            }

            deleteEventListeners();
            restartGame(2000);
        }
    } else if (
        index.length != 0 &&
        wordArrLength != 0 &&
        wordArrLength == wordArr.length
    ) {
        resultDiv.innerHTML = "Brawo, Wygrałeś!";
        deleteEventListeners();
        restartGame(2000);
    }
};

const restartGame = (timeout: number) => {
    setTimeout(() => {
        window.location.reload();
    }, timeout);
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
