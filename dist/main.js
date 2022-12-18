"use strict";
const cards = document.querySelectorAll(".card");
const trialsLeft = document.querySelector("#trialsLeft");
const cardsContainer = document.querySelector("#cardsContainer");
const cardFace = document.querySelector(".card__face");
const lettersContainer = document.querySelector("#chars-container");
window.onload = () => {
    fillCardsFace();
    const cardsScnd = document.querySelectorAll(".card");
    cardsScnd.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.add("is-flipped");
            let n = card.textContent;
            n = n.replace(/\s+/g, " ");
            cardValuesConversion(n);
        });
    });
    trialsLeft.innerHTML = trials.toString();
    createLetterCell();
    guessedLetterInput();
};
const words = [
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
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "W", "X", "Y", "Z",
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
const generateRandomWord = () => {
    let random = Math.floor(Math.random() * words.length);
    let randomWord = words[random];
    return randomWord;
};
let wordArr;
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
const cardValuesConversion = (n) => {
    let output = "";
    if (n == " A A ") {
        output = "a";
    }
    else if (n == " B B ") {
        output = "b";
    }
    else if (n == " C C ") {
        output = "c";
    }
    else if (n == " D D ") {
        output = "d";
    }
    else if (n == " E E ") {
        output = "e";
    }
    else if (n == " F F ") {
        output = "f";
    }
    else if (n == " G G ") {
        output = "g";
    }
    else if (n == " H H ") {
        output = "h";
    }
    else if (n == " I I ") {
        output = "i";
    }
    else if (n == " J J ") {
        output = "j";
    }
    else if (n == " K K ") {
        output = "k";
    }
    else if (n == " L L ") {
        output = "l";
    }
    else if (n == " M M ") {
        output = "m";
    }
    else if (n == " N N ") {
        output = "n";
    }
    else if (n == " O O ") {
        output = "o";
    }
    else if (n == " P P ") {
        output = "p";
    }
    else if (n == " R R ") {
        output = "r";
    }
    else if (n == " S S ") {
        output = "s";
    }
    else if (n == " T T ") {
        output = "t";
    }
    else if (n == " U U ") {
        output = "u";
    }
    else if (n == " W W ") {
        output = "w";
    }
    else if (n == " X X ") {
        output = "x";
    }
    else if (n == " Y Y ") {
        output = "y";
    }
    else if (n == " Z Z ") {
        output = "z";
    }
    compareLetters(output);
};
const keyboardInputFunction = (e) => {
    const charCode = e.keyCode;
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
        compareLetters(e.key);
        flipCardOnKeyboardInput(e.key);
        return true;
    }
};
const flipCardOnKeyboardInput = (input) => {
    const cardThrd = document.querySelectorAll(".card");
    if (input == "a") {
        cardThrd[0].classList.add("is-flipped");
    }
    else if (input == "b") {
        cardThrd[1].classList.add("is-flipped");
    }
    else if (input == "c") {
        cardThrd[2].classList.add("is-flipped");
    }
    else if (input == "d") {
        cardThrd[3].classList.add("is-flipped");
    }
    else if (input == "e") {
        cardThrd[4].classList.add("is-flipped");
    }
    else if (input == "f") {
        cardThrd[5].classList.add("is-flipped");
    }
    else if (input == "g") {
        cardThrd[6].classList.add("is-flipped");
    }
    else if (input == "h") {
        cardThrd[7].classList.add("is-flipped");
    }
    else if (input == "i") {
        cardThrd[8].classList.add("is-flipped");
    }
    else if (input == "j") {
        cardThrd[9].classList.add("is-flipped");
    }
    else if (input == "k") {
        cardThrd[10].classList.add("is-flipped");
    }
    else if (input == "l") {
        cardThrd[11].classList.add("is-flipped");
    }
    else if (input == "m") {
        cardThrd[12].classList.add("is-flipped");
    }
    else if (input == "n") {
        cardThrd[13].classList.add("is-flipped");
    }
    else if (input == "o") {
        cardThrd[14].classList.add("is-flipped");
    }
    else if (input == "p") {
        cardThrd[15].classList.add("is-flipped");
    }
    else if (input == "r") {
        cardThrd[16].classList.add("is-flipped");
    }
    else if (input == "s") {
        cardThrd[17].classList.add("is-flipped");
    }
    else if (input == "t") {
        cardThrd[18].classList.add("is-flipped");
    }
    else if (input == "u") {
        cardThrd[19].classList.add("is-flipped");
    }
    else if (input == "w") {
        cardThrd[20].classList.add("is-flipped");
    }
    else if (input == "x") {
        cardThrd[21].classList.add("is-flipped");
    }
    else if (input == "y") {
        cardThrd[22].classList.add("is-flipped");
    }
    else if (input == "z") {
        cardThrd[23].classList.add("is-flipped");
    }
};
const guessedLetterInput = () => {
    document.addEventListener("keypress", (key) => keyboardInputFunction(key));
};
const resultDiv = document.querySelector("#trialsText");
let trials = 5;
const compareLetters = (input) => {
    const lettersContainerAsAll = lettersContainer.querySelectorAll(".gss-cell");
    let index = [];
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] == input &&
            lettersContainerAsAll[i].innerHTML != input) {
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
        }
        else {
            resultDiv.innerHTML = "Skończyły się próby. Przegrałeś!";
            for (let i = 0; i < wordArr.length; i++) {
                lettersContainerAsAll[i].innerHTML = wordArr[i];
            }
            deleteEventListeners();
            restartGame(2000);
        }
    }
    else if (index.length != 0 &&
        wordArrLength != 0 &&
        wordArrLength == wordArr.length) {
        resultDiv.innerHTML = "Brawo, Wygrałeś!";
        deleteEventListeners();
        restartGame(2000);
    }
};
const restartGame = (timeout) => {
    setTimeout(() => {
        window.location.reload();
    }, timeout);
};
const deleteEventListeners = () => {
    cards.forEach((card) => {
        card.addEventListener("click", (event) => {
            event.stopImmediatePropagation();
        }, true);
    });
    document.addEventListener("keypress", (event) => {
        event.stopImmediatePropagation();
    }, true);
};
