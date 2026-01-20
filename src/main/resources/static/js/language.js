const languages = [
    { name: "English", code: "en-IN", native: "English" },
    { name: "Hindi", code: "hi-IN", native: "हिन्दी" },
    { name: "Bengali", code: "bn-IN", native: "বাংলা" },
    { name: "Telugu", code: "te-IN", native: "తెలుగు" },
    { name: "Marathi", code: "mr-IN", native: "मराठी" },
    { name: "Tamil", code: "ta-IN", native: "தமிழ்" },
    { name: "Urdu", code: "ur-IN", native: "اردو" },
    { name: "Gujarati", code: "gu-IN", native: "ગુજરાતી" },
    { name: "Kannada", code: "kn-IN", native: "ಕನ್ನಡ" },
    { name: "Malayalam", code: "ml-IN", native: "മലയാളം" },
    { name: "Odia", code: "or-IN", native: "ଓଡ଼ିଆ" },
    { name: "Punjabi", code: "pa-IN", native: "ਪੰਜਾਬੀ" },
    { name: "Assamese", code: "as-IN", native: "অসমীয়া" },
    { name: "Maithili", code: "mai-IN", native: "मैथिली" },
    { name: "Santali", code: "sat-IN", native: "संताली" },
    { name: "Kashmiri", code: "ks-IN", native: "कॉशुर" },
    { name: "Nepali", code: "ne-IN", native: "नेपाली" },
    { name: "Konkani", code: "kok-IN", native: "कोंकणी" },
    { name: "Sindhi", code: "sd-IN", native: "सिन्धी" },
    { name: "Sanskrit", code: "sa-IN", native: "संस्कृतम्" }
];

const langGrid = document.getElementById('langGrid');

languages.forEach(lang => {
    const btn = document.createElement('button');
    btn.className = 'lang-btn';
    btn.innerHTML = `<strong>${lang.native}</strong><br><small>${lang.name}</small>`;
    btn.onclick = () => {
        selectLanguage(lang);
    };
    langGrid.appendChild(btn);
});

function selectLanguage(lang) {
    localStorage.setItem('selectedLang', JSON.stringify(lang));
    // Add a small delay for visual feedback if needed
    window.location.href = 'dashboard.html';
}
