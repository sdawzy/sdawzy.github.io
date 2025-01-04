// Language content dictionary
const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-blog": "Blog",
        "nav-contact": "Contact",
        "blog-title": "Blog",
        "page-title": "Yue's Secret Base",
        "about-link": "About",
        "projects-link": "Projects",
        "contact-link": "Contact",
        "hero-title": "Hi, I'm Yue.",
        "hero-description": 
        "<div>Welcome to my personal website! I'm a CS PhD candidate @uOttawa who loves theories of AI. My supervisors are Yongyi Mao and Tommaso Cesari.</div>\
        <div>Recently I am working on </div>",
        "about-title": "About Me",
        "about-description": "I'm passionate about creating solutions that make life easier. In my free time, I enjoy board games, especially Go and Shogi.",
        "projects-title": "Projects",
        "project1-title": "Project 1",
        "project1-description": "A short description of this project.",
        "project2-title": "Project 2",
        "project2-description": "A short description of this project.",
        "contact-title": "Contact",
        "contact-description": "Feel free to reach out to me at ",
        "footer": "© 2024 Yue Zhang. All rights reserved."
    },
    fr: {
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-blog": "Blog",
        "nav-contact": "Contact",
        "blog-title": "Blog",        
        "page-title": "La base secrète de Yue",
        "about-link": "À propos",
        "projects-link": "Projets",
        "contact-link": "Contact",
        "hero-title": "Bonjour, je suis Yue.",
        "hero-description": "Bienvenue sur mon site personnel! Je suis un candidat au doctorat en informatique à l'Université d'Ottawa qui aime les théories.",
        "about-title": "À propos de moi",
        "about-description": "Je suis passionné par la création de solutions qui facilitent la vie. Dans mon temps libre, j'aime les jeux de société, surtout le Go et le Shogi.",
        "projects-title": "Projets",
        "project1-title": "Projet 1",
        "project1-description": "Une courte description de ce projet.",
        "project2-title": "Projet 2",
        "project2-description": "Une courte description de ce projet.",
        "contact-title": "Contact",
        "contact-description": "N'hésitez pas à me contacter à ",
        "footer": "© 2024 Yue Zhang. Tous droits réservés."
    },
    sc: {
        "nav-home": "屋頭",
        "nav-about": "關於我",
        "nav-blog": "隨筆",
        "nav-contact": "聯繫我喲",
        "blog-title": "整過的活路",
        "page-title": "越的秘密基地",
        "about-link": "關於我",
        "projects-link": "整過的活路",
        "contact-link": "聯繫我喲",
        "hero-title": "你好唄，我是越。",
        "hero-description": "歡迎到我屋頭來擺龍門陣！我是個在渥太華大學整計算機的博士生。我的導師是Yongyi Mao跟Tommaso Cesari。這陣子在搞人工智能的理論。",
        "about-title": "關於我",
        "about-description": "我喜歡搞些讓日子更巴適的整法。平時閒到發慌，就搞點棋來消遣下。",
        "projects-title": "整過的活路",
        "project1-title": "活路 1",
        "project1-description": "這個活路搞得還可以喲，巴適得板！",
        "project2-title": "活路 2",
        "project2-description": "這個活路也還將就，湊合看哈。",
        "contact-title": "聯繫我喲",
        "contact-description": "有啥子事情，盡管通過郵件找我喲： ",
        "footer": "© 2024 Yue Zhang。攏共歸我所有，莫亂用哈！"
    }
};

// Get the base path dynamically
function getBasePath() {
    const scripts = document.getElementsByTagName("script");
    const currentScript = scripts[scripts.length - 1]; // Last script in the document
    const scriptPath = currentScript.src || window.location.href;
    // Handle cases where the script is in the /js directory
    const basePath = scriptPath.substring(0, scriptPath.lastIndexOf("/js/") + 1);
    return basePath;
}


// Load translations for the specified language
function loadTranslations(language = "en") {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[language] && translations[language][key]) {
            el.innerHTML = translations[language][key]; // Use innerHTML for dynamic content
        }
    });
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
    const basePath = getBasePath();

    // Load and inject header
    const headerPlaceholder = document.getElementById("header-placeholder");
    fetch(`${basePath}header.html`) // Use the calculated base path
        .then(response => response.text())
        .then(data => {
            headerPlaceholder.innerHTML = data;

            // Reinitialize translations after loading the header
            const defaultLanguage = localStorage.getItem("language") || "en";
            loadTranslations(defaultLanguage);

            // Set up language selector buttons in the header
            document.getElementById("lang-en").addEventListener("click", () => {
                setLanguage("en");
            });
            document.getElementById("lang-fr").addEventListener("click", () => {
                setLanguage("fr");
            });
            document.getElementById("lang-sc").addEventListener("click", () => {
                setLanguage("sc");
            });
        });

    // Load default language on page load
    const defaultLanguage = localStorage.getItem("language") || "en";
    loadTranslations(defaultLanguage);
});

// Set language and save preference
function setLanguage(lang) {
    loadTranslations(lang);
    localStorage.setItem("language", lang);
}
