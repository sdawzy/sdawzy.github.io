document.addEventListener("DOMContentLoaded", () => {
    const headerPlaceholder = document.getElementById("header-placeholder");
    fetch("header.html")
        .then((response) => response.text())
        .then((data) => {
            headerPlaceholder.innerHTML = data;
            // Reinitialize language selector or other scripts if needed
            loadTranslations();
        });
});
