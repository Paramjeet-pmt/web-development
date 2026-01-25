const languageSelect = document.getElementById('language-select');
const flagIcon = document.getElementById('flag');
const addressElement = document.querySelector('.address2');

const flagEmojiMap = {
    'us': '🇺🇸',
    'in': '🇮🇳',
    'fr': '🇫🇷',
    'de': '🇩🇪'
};

function updateLanguage(language) {
    const selectedOption = languageSelect.options[languageSelect.selectedIndex];
    const flagCode = selectedOption.getAttribute("data-flag");
    const region = selectedOption.getAttribute("data-region");
    
    flagIcon.textContent = flagEmojiMap[flagCode];
    addressElement.textContent = region;
}

window.addEventListener('DOMContentLoaded', () => {
    updateLanguage('en');
});
