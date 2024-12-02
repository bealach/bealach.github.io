window.onload = () => {
    const wordElement = document.getElementById('typed-word');
    const words = ['Cancún', 'Playa del Carmen', 'Tulum', 'Mérida', 'Ciudad de México'];  // Array of words to cycle through
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'];  // Array of colors to cycle through
    let currentWordIndex = 0;  // Index to track which word we're on
    let currentColorIndex = 0; // Index to track which color we're using
    let i = 0;  // To control typing character by character
    let currentWord = words[currentWordIndex];  // Current word to type

    // Function to type a single word
    function typeWord() {
        wordElement.textContent = '';  // Clear the previous content
        let j = 0;
        
        // Reset typing effect
        function typeChar() {
            if (j < currentWord.length) {
                wordElement.textContent += currentWord.charAt(j);
                j++;
                setTimeout(typeChar, 100); // Adjust typing speed
            } else {
                // When the current word is typed, move to the next word
                setTimeout(nextWord, 500);  // Wait before changing to the next word
            }
        }

        // Function to change to the next word and color
        function nextWord() {
            // Update the color of the word
            wordElement.style.color = colors[currentColorIndex];

            // Move to the next word and color in the array
            currentWordIndex = (currentWordIndex + 1) % words.length;  // Loop through words
            currentColorIndex = (currentColorIndex + 1) % colors.length;  // Loop through colors
            currentWord = words[currentWordIndex];  // Get the next word to type
            typeWord();  // Start typing the next word
        }

        // Start typing the current word
        typeChar();
    }

    // Start the first typing effect
    typeWord();
    };
