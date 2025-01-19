function generatePassword() {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChars = '';
    if (document.getElementById('includeUppercase').checked) allChars += upperCaseChars;
    if (document.getElementById('includeLowercase').checked) allChars += lowerCaseChars;
    if (document.getElementById('includeNumbers').checked) allChars += numberChars;
    if (document.getElementById('includeSpecial').checked) allChars += specialChars;

    const length = parseInt(document.getElementById('length').value, 10);
    if (length < 4) {
        alert('Password length should be at least 4 characters.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById('password').value = password;
}