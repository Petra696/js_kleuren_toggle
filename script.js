// Toggle menu
const navmenu = document.querySelector('.navmenu');
const hamburger = document.querySelector('.hamburger');

// Toggle menu hover
const togglemenu = () => {
    navmenu.classList.toggle('menuDicht');
    hamburger.classList.toggle('hamburgerDicht');
};

hamburger.addEventListener('mouseover', togglemenu);


// Kleur achtergrond
const body = document.body;
const text = document.getElementById('Kleurtekst');
const changeColorsByClicking = function () {
    text.innerText = `Kleur ${this.innerText}`;
    body.classList.remove('grijs', 'rood', 'oranje', 'paars', 'groen');
    body.classList.add(this.id);
};

const changeColorsByNumbers = function (addColor, addClass) {
    body.classList.remove('grijs', 'rood', 'oranje', 'paars', 'groen');
    text.innerText = `Kleur ${addColor}`;
    body.classList.add(addClass);
};

const menuLinks = document.querySelectorAll('.menuLink');

menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener('click', togglemenu);
    menuLink.addEventListener('knop', changeColorsByClicking);
});

//Selecteerknop
const idToClass = document.querySelectorAll('.menuLink').forEach((button) => {
    button.addEventListener('click', changeColorsByClicking);
});

const changeClassName = () => {
    body.className.add('idToClass');
};

//Druk op de knop
const checkKeyPressed = (i) => {
    if (i.keyCode === 0) {
        addEventListener('knop', changeColorsByNumbers('grijs', 'grijs'));
    } else if (i.keyCode === 1) {
        addEventListener('knop', changeColorsByNumbers('rood', 'rood'));
    } else if (i.keyCode === 2) {
        addEventListener('knop', changeColorsByNumbers('oranje', 'oranje'));
    } else if (i.keyCode === 3) {
        addEventListener('knop', changeColorsByNumbers('paars', 'paars'));
    } else if (i.keyCode === 4) {
        addEventListener('knop', changeColorsByNumbers('groen', 'groen'));
    }
};

document.addEventListener('knop', checkKeyPressed, false);




