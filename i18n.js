// Language content dictionary
const translations = {
    en: {
        "about-link": "About",
        "projects-link": "Projects",
        "contact-link": "Contact",
        "hero-title": "Hi, I'm Yue.",
        "hero-description": "Welcome to my personal website! I'm a I'm a CS PhD candiate @ uOttawa who loves theories.",
        "about-title": "About Me",
        "about-description": "I'm passionate about creating solutions that make life easier. In my free time, I enjoy board games, especially Go and Shogi.",
        "projects-title": "Projects",
        "project1-title": "Project 1",
        "project1-description": "A short description of this project.",
        "project2-title": "Project 2",
        "project2-description": "A short description of this project.",
        "contact-title": "Contact",
        "contact-description": "Feel free to reach out to me at <a href='mailto:yzha1030@uottawa.ca'>yzha1030@uottawa.ca</a>",
        "footer": "© 2024 Yue. All rights reserved."
    },
    fr: {
        "about-link": "À propos",
        "projects-link": "Projets",
        "contact-link": "Contact",
        "hero-title": "Bonjour, je suis Yue",
        "hero-description": "Bienvenue sur mon site personnel ! Je suis un(e) [Votre Profession] passionné(e) par [Vos Intérêts].",
        "about-title": "À propos de moi",
        "about-description": "Je suis passionné(e) par la création de solutions qui facilitent la vie. Pendant mon temps libre, j'aime [Vos Loisirs].",
        "projects-title": "Projets",
        "project1-title": "Projet 1",
        "project1-description": "Une courte description de ce projet.",
        "project2-title": "Projet 2",
        "project2-description": "Une courte description de ce projet.",
        "contact-title": "Contact",
        "contact-description": "N'hésitez pas à me contacter à <a href='mailto:yzha1030@uottawa.ca'>yzha1030@uottawa.ca</a>",
        "footer": "© 2024 Yue. Tous droits réservés."
    }
};

// Function to switch language
function switchLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        el.innerHTML = translations[lang][key];
    });
}

// Event listeners for language buttons
document.getElementById("lang-en").addEventListener("click", () => switchLanguage("en"));
document.getElementById("lang-fr").addEventListener("click", () => switchLanguage("fr"));

// Set default language to English
switchLanguage("en");
