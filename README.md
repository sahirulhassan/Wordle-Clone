# Word Masters - Wordle Clone

A fun and interactive word-guessing game inspired by the popular Wordle game. Built with vanilla JavaScript, HTML, and CSS.

## 🎮 About the Game

Word Masters is a word-guessing game where players have 6 attempts to guess a 5-letter word. After each guess, the game provides color-coded feedback to help you narrow down the correct word.

## ✨ Features

- **Daily Word Challenge**: Fetches a new word of the day from an external API
- **Word Validation**: Validates guesses against a dictionary to ensure only real words are accepted
- **Color-Coded Feedback**:
  - 🟢 **Green border**: Letter is in the correct position
  - 🟡 **Yellow border**: Letter is in the word but in the wrong position
  - 🔴 **Red border**: Letter is not in the word
- **Keyboard Input**: Type your guesses using your keyboard
- **Visual Highlights**: Animated glow effect on the active row
- **Win/Lose Alerts**: Immediate feedback when you win or lose

## 🚀 How to Run

### Option 1: Open Directly
1. Clone this repository:
   ```bash
   git clone https://github.com/sahirulhassan/Wordle-Clone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Wordle-Clone
   ```
3. Open `index.html` in your web browser

### Option 2: Local Server
1. Clone the repository (see above)
2. Use a local server like:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```
3. Open your browser and navigate to `http://localhost:8000`

## 🎯 How to Play

1. The game will load a random 5-letter word
2. Type your guess using your keyboard (5 letters)
3. Press **Enter** to submit your guess
4. Use **Backspace** to delete letters before submitting
5. Observe the color-coded feedback:
   - Green borders indicate correct letters in the correct position
   - Yellow borders indicate correct letters in the wrong position
   - Red borders indicate letters not in the word
6. You have 6 attempts to guess the word correctly
7. Win by guessing the word within 6 tries!

## 🛠️ Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling and animations
- **JavaScript (ES6+)**: Game logic and API integration
- **Fetch API**: For retrieving daily words and validating guesses
- **External API**: [words.dev-apis.com](https://words.dev-apis.com) for word data

## 📁 Project Structure

```
Wordle-Clone/
├── index.html          # Main HTML file with game grid
├── script.js           # Game logic and API calls
├── style.css           # Styling and animations
└── README.md           # Project documentation
```

## 🎨 Color Scheme

- Background: Lemon Chiffon (#FEFACD)
- Game Board: Ultra Violet (#5F4A8B)
- Green Border: Correct position (#39ff14)
- Yellow Border: Wrong position (#ffbb00)
- Red Border: Not in word (#d81103)

## 🔧 Code Highlights

### Key Functions

- `getWord()`: Fetches the daily word from the API
- `validateWord()`: Checks if a guessed word is valid
- `handleLetter()`: Manages letter input
- `handleEnter()`: Processes submitted guesses
- `handleMismatch()`: Provides color-coded feedback
- `handleBackspace()`: Allows letter deletion

## 🌐 API Endpoints

- **Word of the Day**: `https://words.dev-apis.com/word-of-the-day`
- **Word Validation**: `https://words.dev-apis.com/validate-word`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

**Sahirul Hassan**

---

Enjoy playing Word Masters! 🎉
