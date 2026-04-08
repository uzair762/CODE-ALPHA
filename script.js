let display = document.getElementById("display");

// Add button values to screen
function appendValue(value) {
    display.value += value;
}

// Clear screen
function clearDisplay() {
    display.value = "";
}

// Calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (/[0-9+\-*/]/.test(key)) {
        appendValue(key);
    }

    if (key === "Enter") {
        calculate();
    }

    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    if (key === "Escape") {
        clearDisplay();
    }
});