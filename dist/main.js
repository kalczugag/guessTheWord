"use strict";
window.onload = () => {
    fillCardsFace();
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.add("is-flipped");
            let n = card.textContent;
            n = n.replace(/\s+/g, " ");
            // if (n == " A A ") {
            //     console.log(n);
            // }
        });
    });
    createLetterCell();
    guessedLetterInput();
};
const cardsContainer = document.querySelector("#cardsContainer");
const cardFace = document.querySelector(".card__face");
const lettersContainer = document.querySelector("#chars-container");
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
const createLetterCell = () => {
    let word = generateRandomWord();
    let chars = word.split("");
    localStorage.setItem("word", JSON.stringify(word));
    localStorage.setItem("chars", JSON.stringify(chars));
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
        if ((charCode > 64 && charCode < 91) ||
            (charCode > 96 && charCode < 123)) {
            compareLetters(e.key);
            return true;
        }
    });
};
const compareLetters = (input) => {
    const lettersContainerAsAll = document.querySelectorAll("#chars-container");
    let wordString = JSON.parse(localStorage.getItem("word") || "");
    let wordArr = JSON.parse(localStorage.getItem("chars") || "");
    let wordIndex = -1;
    for (let i = 0; i < wordArr.length; i++) {
        if (input == wordArr[i]) {
            wordIndex = wordArr.indexOf(input);
        }
    }
    //set value on lettersContainer choosen element
    //for now not working dont know why
    lettersContainer[wordIndex] = input;
};
