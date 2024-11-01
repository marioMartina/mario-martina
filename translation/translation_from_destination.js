// Function to load the language translations
async function loadLanguage(language) {
    try {
        const response = await fetch(`../translation/${language}.json`);
        const translations = await response.json();

        // Update each element with the data-key attribute
        document.querySelectorAll('[data-key]').forEach((element) => {
            const sectionKey = element.getAttribute('data-key');
            const translatedText = translations[sectionKey];

            // Update the text content if translation exists
            if (translatedText) {
                element.textContent = translatedText;
            }
        });

        // Set the direction and language attributes based on selected language
        // const htmlTag = document.documentElement; // Use document.documentElement to target the <html> element
        // if (language === 'ar') {
        //     htmlTag.setAttribute('dir', 'rtl'); // Right-to-left for Arabic
        //     htmlTag.setAttribute('lang', 'ar');
        // } else {
        //     htmlTag.setAttribute('dir', 'ltr'); // Left-to-right for other languages
        //     htmlTag.setAttribute('lang', language);
        // }

        // Save the language choice in localStorage
        localStorage.setItem('selectedLanguage', language);
    } catch (error) {
        console.error("Error loading language file:", error);
        alert("Failed to load language. Please try again."); // Notify the user on error
    }
}

// Example of how you could initialize the default language on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Default to English if no language is saved
    loadLanguage(savedLanguage); // Load the saved or default language
});

// Add event listeners to language selection links
document.querySelectorAll('[onclick^="loadLanguage"]').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        const language = this.getAttribute('onclick').match(/'([^']+)'/)[1]; // Extract language code
        loadLanguage(language);
    });
});
