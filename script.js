async function init() {
    document.addEventListener("keydown", handleKey);
    wordOfTheDay = await getWord();
}

async function getWord() {
    const URL = "https://words.dev-apis.com/word-of-the-day";
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data.word.toUpperCase();
    } catch (error) {
        console.error("Could not fetch word:", error);
        return null;
    }
}

async function validateWord(word) {
    const URL = "https://words.dev-apis.com/validate-word";
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ word })
        });
        const data = await response.json();
        return data.validWord;
    } catch (error) {
        console.error("Could not validate word:", error);
        return false;
    }
}

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

function handleLetter(letter) {
    if (cursor.col < 5 && cursor.row < 6) {
        rowList[cursor.row].children[cursor.col].innerText = letter;
        cursor.col++;
    }
}

async function handleMismatch(usersWord) {
    if (! await validateWord(usersWord)) {
        alert("Invalid word!");
        return;
    }
    let lettersInCorrectPlace = ["red", "red", "red", "red", "red", ];
    for (let i = 0; i < 5; i++) {
        if (usersWord[i] === wordOfTheDay[i]) {
            lettersInCorrectPlace[i] = "green"; // letter in correct place
        }
    }
    for (let i = 0; i < 5; i++) {
        if (lettersInCorrectPlace[i] === "red" && wordOfTheDay.includes(usersWord[i])) {
            lettersInCorrectPlace[i] = "yellow"; // letter in word but not in correct place
        }
    }
    const row = Array.from(rowList[cursor.row].children);
    for (let i = 0; i < 5; i++) {
        row[i].classList.add(lettersInCorrectPlace[i]);
    }

    rowList[cursor.row].classList.remove("highlight");
    cursor.row++;
    cursor.col = 0;
    rowList[cursor.row].classList.add("highlight");
}

async function handleEnter() {
    if (cursor.col === 5) {
        const usersWord = Array.from(rowList[cursor.row].children).map(d => d.innerText.trim()).join("");
        if (usersWord === wordOfTheDay) {
            console.log("You Win!");
            return;
        } else {
            await handleMismatch(usersWord);
        }
    }
    if (cursor.row === 6) {
        console.log("Game Over");
    }
    
}

function handleBackspace() {
    if (cursor.col > 0) {
        cursor.col--;
        rowList[cursor.row].children[cursor.col].innerText = "";
    }
}

function handleKey(e) {
    const key = e.key.toUpperCase();
    if (isLetter(key)) {
        handleLetter(key);
    } else if (key === "BACKSPACE") {
        handleBackspace();
    } else if (key === "ENTER") {
        handleEnter();
    } else {
        e.preventDefault();
    }
    
}

let rowList = document.querySelectorAll(".row");
let cursor = { row: 0, col: 0};
let wordOfTheDay = "";

init();