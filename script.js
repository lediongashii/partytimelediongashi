function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.header').classList.remove('gradient');
    document.querySelector('.header').classList.add('shrink');
    document.querySelector('.header').classList.add('black-text');
    document.querySelector('.header').classList.remove('white-text');
}

function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.header').classList.remove('gradient');
    document.querySelector('.header').classList.add('shrink');
    document.querySelector('.header').classList.add('black-text');
    document.querySelector('.header').classList.remove('white-text');
}

function smoothScrollToHome(event) {
    event.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.header').classList.add('gradient');
    document.querySelector('.header').classList.remove('shrink');
    document.querySelector('.header').classList.add('white-text');
    document.querySelector('.header').classList.remove('black-text');
    if (window.innerWidth <= 768) {
        toggleMenu(); // Close the menu after navigation in responsive mode
    }
}

function smoothScrollToSection(event, sectionId) {
    event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.header').classList.remove('gradient');
    document.querySelector('.header').classList.add('shrink');
    document.querySelector('.header').classList.add('black-text');
    document.querySelector('.header').classList.remove('white-text');
    if (window.innerWidth <= 768) {
        toggleMenu(); // Close the menu after navigation in responsive mode
    }
}

function scrollToPackages() {
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.header').classList.remove('gradient');
    document.querySelector('.header').classList.add('shrink');
    document.querySelector('.header').classList.add('black-text');
    document.querySelector('.header').classList.remove('white-text');
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.header').classList.remove('gradient');
    document.querySelector('.header').classList.add('shrink');
    document.querySelector('.header').classList.add('black-text');
    document.querySelector('.header').classList.remove('white-text');
}

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
    const bars = document.querySelectorAll('.burger .bar');
    bars.forEach(bar => {
        bar.style.backgroundColor = 'white';
    });
}
