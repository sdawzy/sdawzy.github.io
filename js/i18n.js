// Language content dictionary
const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-blog": "Blog",
        "nav-contact": "Contact",
        "blog-title": "Blog",
        "blog1-title": "Blog Post 1",
        "blog2-title": "Blog Post 2",
        "blog3-title": "Blog Post 3",
        "page-title": "Yue's Secret Base",
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
        "footer": "© 2024 Yue Zhang. All rights reserved."
    },
    fr: {
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
        "contact-description": "N'hésitez pas à me contacter à <a href='mailto:yzha1030@uottawa.ca'>yzha1030@uottawa.ca</a>",
        "footer": "© 2024 Yue Zhang. Tous droits réservés."
    },
    sc: {
        "about-link": "屋頭人",
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
        "contact-description": "有啥子事情，盡管通過郵件找我喲：<a href='mailto:yzha1030@uottawa.ca'>yzha1030@uottawa.ca</a>",
        "footer": "© 2024 Yue Zhang。拢共歸我所有，莫亂用哈！"
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
document.getElementById("lang-sc").addEventListener("click", () => switchLanguage("sc"));

// Set default language to English
switchLanguage("en");
