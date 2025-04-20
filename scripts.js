let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Анимация блоков при скролле
const boxes = document.querySelectorAll('.service-box'); // Используем .service-box вместо .box

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('box-visible');
                console.log('Box appeared:', entry.target); // Для отладки
            }
        });
    },
    { threshold: 0.1 } // Срабатывает, когда видно 10% элемента
);

boxes.forEach((box) => {
    console.log('Observing box:', box); // Для отладки
    observer.observe(box);
});