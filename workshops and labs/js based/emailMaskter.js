/**
 * Masks the username part of an email address with asterisks.
 * The first and last character of the username are preserved.
 *
 * @param {string} email - The email address to mask.
 * @returns {string} The masked email address.
 */
function maskEmail(email) {
    // Find the index of the "@" symbol to separate the username and domain.
    const atIndex = email.indexOf('@');

    // If no "@" is found, return the original email.
    if (atIndex === -1) {
        return email;
    }

    // Extract the username and domain.
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);

    // Get the first and last characters of the username.
    const firstChar = username.charAt(0);
    const lastChar = username.charAt(username.length - 1);

    // Calculate the number of asterisks needed.
    // The number of characters to mask is the total length minus the first and last character.
    const asterisksCount = username.length - 2;

    // Create the string of asterisks.
    const maskedUsername = firstChar + '*'.repeat(asterisksCount) + lastChar;

    // Combine the masked username with the original domain.
    return maskedUsername + domain;
}

// Declare a variable to store the email address.
const email = "apple.pie@example.com";

// Call the function and output the result to the console.
console.log(`Original email: ${email}`);
console.log(`Masked email: ${maskEmail(email)}`);

// You can test with other examples as well:
console.log(`Original email: freecodecamp@example.com`);
console.log(`Masked email: ${maskEmail("freecodecamp@example.com")}`);

console.log(`Original email: info@test.dev`);
console.log(`Masked email: ${maskEmail("info@test.dev")}`);

console.log(`Original email: user@domain.org`);
console.log(`Masked email: ${maskEmail("user@domain.org")}`);
console.log(maskEmail(email));