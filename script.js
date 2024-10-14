// Get the calculator display
const display = document.querySelector('#display');

// Get all buttons
const buttons = document.querySelectorAll('.button');

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');

        // Handle clear button
        if (e.target.id === 'clearButton') {
            display.value = '';
            return;
        }

        // Handle equals button
        if (e.target.id === 'equalsButton') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
            return;
        }

        // Update display value
        display.value += value;
    });
});
