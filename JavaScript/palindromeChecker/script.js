// DOM elements
const messageInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');
const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', () => {
    messageInput.value = '';
    resultDiv.textContent = '';
});

checkButton.addEventListener('click', () => {
    if (messageInput.value === '') {
        alert("Please input a value");
    }
    else {
        const text = messageInput.value;
        if (isPalindrome(text)) {
            resultDiv.textContent = `${text} is a palindrome!`;
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = `${text} is not a palindrome.`;
            resultDiv.style.color = 'red';
        }
    }
});
messageInput.addEventListener("input", () => {
    resultDiv.textContent = "";
});

function isPalindrome(str) {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
