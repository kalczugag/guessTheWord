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
            // if (n == " A A ") {
            //     console.log(n);
            // }
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
const keyboardInputFunction = (e) => {
    const charCode = e.keyCode;
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
        compareLetters(e.key);
        return true;
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
