
document.getElementById('generateBtn').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const useLower = document.getElementById('lowercase').checked;
    const useUpper = document.getElementById('uppercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSpecial = document.getElementById('specialChars').checked;

    const errorDisplay = document.getElementById('errorDisplay');
    const passwordDisplay = document.getElementById('passwordDisplay');

    // Réinitialiser les messages d'erreur
    errorDisplay.textContent = '';
    passwordDisplay.textContent = '';

    // Validation de la longueur du mot de passe
    if (length < 12 || length > 128) {
        errorDisplay.textContent = "La longueur du mot de passe doit être entre 12 et 128 caractères.";
        return; // Sortir de la fonction si la longueur n'est pas correcte
        passwordDisplay.textContent = '';
        return;
    }

    // Générer le mot de passe si la longueur est valide
    const password = generatePassword(length, useLower, useUpper, useNumbers, useSpecial);
    passwordDisplay.textContent = password; // Afficher le mot de passe
});


function generatePassword(length, useLower, useUpper, useNumbers, useSpecial) {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let availableChars = '';
    let password = ''; 
    // Ajouter les types de caractères sélectionnés à la liste des caractères disponibles
    if (useLower) availableChars += lowerCase;
    if (useUpper) availableChars += upperCase;
    if (useNumbers) availableChars += numbers;
    if (useSpecial) availableChars += specialChars;

    // Vérifier que l'utilisateur a sélectionné au moins un type de caractère
    if (!availableChars) {
        return "Aucun type de caractère sélectionné.";
    }

    // Générer le mot de passe en sélectionnant aléatoirement des caractères dans la chaîne disponible
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars.charAt(randomIndex);
    }

    return password;
}
