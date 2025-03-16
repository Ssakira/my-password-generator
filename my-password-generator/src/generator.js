const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

export function generatePassword(length, useUpper, useLower, useNumbers, useSymbols) {
    let charPool = "";

    if (useUpper) charPool += upperCaseChars;
    if (useLower) charPool += lowerCaseChars;
    if (useNumbers) charPool += numberChars;
    if (useSymbols) charPool += symbolChars;

    if (charPool.length === 0) return "Select at least one option";

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charPool[Math.floor(Math.random() * charPool.length)];
    }

    return password;
}

// Function to determine password strength
export function checkStrength(password) {
    let strength = "Weak";

    if (password.length > 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
        strength = "Strong";
    } else if (password.length > 6 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
        strength = "Medium";
    }

    return strength;
}
