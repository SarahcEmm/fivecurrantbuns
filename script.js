// Select elements
let buns = document.querySelectorAll('.bun');
let penny = document.getElementById('penny');
let lyrics = document.getElementById('lyrics');

// Song verses
let verses = [
    "Five currant buns in a baker's shop...",
    "Four currant buns in a baker's shop...",
    "Three currant buns in a baker's shop...",
    "Two currant buns in a baker's shop...",
    "One currant bun in a baker's shop...",
    "No more currant buns!"
];

let currentBun = 0; // Track which bun to remove next

// Penny click event
penny.addEventListener('click', () => {
    if (currentBun < buns.length) {
        buns[currentBun].style.display = 'none'; // Hide the current bun
        lyrics.textContent = verses[currentBun + 1]; // Update the lyrics
        currentBun++; // Move to the next bun
    } else {
        lyrics.textContent = "All the buns are gone!"; // No more buns
    }
});
