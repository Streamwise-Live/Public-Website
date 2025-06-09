document.addEventListener("DOMContentLoaded", function () {

    // Toggle "Features" menu
    document.querySelectorAll('.nav-dropdown .nav-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const menu = button.nextElementSibling;
            menu.classList.toggle('show');
        });
    });

    // Toggle language menu
    document.querySelectorAll('.lang-dropdown .lang-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const menu = button.nextElementSibling;
            menu.classList.toggle('show');
        });
    });

    // Close dropdowns if clicked outside
    document.addEventListener('click', function (e) {
        document.querySelectorAll('.nav-menu, .lang-menu').forEach(menu => {
            if (!menu.parentElement.contains(e.target)) {
                menu.classList.remove('show');
            }
        });
    });

    document.querySelector(".burger").addEventListener("click", () => {
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.toggle("show");
        document.querySelectorAll('.burger img').forEach(img => {
            img.classList.toggle('show');
        });
    });
});
