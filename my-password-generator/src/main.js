import { generatePassword, checkStrength } from "./generator.js";

const passwordField = document.getElementById("password");
const lengthSlider = document.getElementById("lengthSlider");
const lengthDisplay = document.getElementById("lengthDisplay");
const copyBtn = document.getElementById("copyBtn");
const refreshBtn = document.getElementById("refreshBtn");
const strengthIndicator = document.getElementById("strengthIndicator");

const upperCheckbox = document.getElementById("uppercase");
const lowerCheckbox = document.getElementById("lowercase");
const numberCheckbox = document.getElementById("numbers");
const symbolCheckbox = document.getElementById("symbols");

// Function to update password
function updatePassword() {
    const length = lengthSlider.value;
    const useUpper = upperCheckbox.checked;
    const useLower = lowerCheckbox.checked;
    const useNumbers = numberCheckbox.checked;
    const useSymbols = symbolCheckbox.checked;

    const password = generatePassword(length, useUpper, useLower, useNumbers, useSymbols);
    passwordField.value = password;

    // Update strength indicator
    const strength = checkStrength(password);
    strengthIndicator.textContent = strength;
    strengthIndicator.className = `strength ${strength.toLowerCase()}`;
}

// Event Listeners
lengthSlider.addEventListener("input", () => {
    lengthDisplay.textContent = lengthSlider.value;
    updatePassword();
});

refreshBtn.addEventListener("click", updatePassword);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordField.value);
    alert("Password copied to clipboard!");
});

// Initial password generation
updatePassword();
