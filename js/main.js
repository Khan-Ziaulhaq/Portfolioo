//for typewriting
const textElement = document.getElementById("type-text");
const cursorElement = document.querySelector(".cursor");

const professions = [
    "Full Stack Developer",
    "Web Developer",
    "UI/UX Designer",
];

let currentProfessionIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeSpeed = 100;
const deleteSpeed = 50;
const delayBetweenTexts = 1500;

function typeEffect() {
    const currentProfession = professions[currentProfessionIndex];
    const displayText = "I’m a " + (isDeleting
        ? currentProfession.substring(0, charIndex--)
        : currentProfession.substring(0, charIndex++));

    textElement.textContent = displayText;

    if (!isDeleting && charIndex === currentProfession.length) {
        setTimeout(() => (isDeleting = true), delayBetweenTexts);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
    }

    setTimeout(
        typeEffect,
        isDeleting ? deleteSpeed : typeSpeed
    );
}

typeEffect();


//for active links
const links = document.querySelectorAll('.links');

function removeActiveClasses() {
    links.forEach(link => {
        link.classList.remove('active');
    });
}

links.forEach(link => {
    link.addEventListener('click', (event) => {
        removeActiveClasses(); // Remove active class from all links
        event.target.classList.add('active'); // Add active class to clicked link
    });
});




const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')


const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e) {
    const isMobile = e.matches
    console.log(isMobile)
    if (isMobile) {
        navbar.setAttribute('inert', '')
    }
    else {
        // desktop device
        navbar.removeAttribute('inert')
    }
}

function openSidebar() {
    navbar.classList.add('show')
    openButton.setAttribute('aria-expanded', 'true')
    navbar.removeAttribute('inert')
    openButton.style = "display:none";

}

function closeSidebar() {
    navbar.classList.remove('show')
    openButton.setAttribute('aria-expanded', 'false')
    navbar.setAttribute('inert', '')
    openButton.style = "display:block";
}

updateNavbar(media)


const projectsContainer = document.querySelector('.projects-container');
const prevBtn = document.getElementById('project-prev');
const nextBtn = document.getElementById('project-next');

let scrollAmount = 0;

prevBtn.addEventListener('click', () => {
    scrollAmount -= 300; // Adjust scroll distance
    if (scrollAmount < 0) scrollAmount = 0; // Prevent scrolling too far left
    projectsContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    scrollAmount += 300; // Adjust scroll distance
    if (scrollAmount > projectsContainer.scrollWidth - projectsContainer.clientWidth) {
        scrollAmount = projectsContainer.scrollWidth - projectsContainer.clientWidth; // Prevent scrolling too far right
    }
    projectsContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});


