// Set body inner height
const main = document.querySelector('main');

setInnerHeight('e');
main.addEventListener('resize', setInnerHeight);

function setInnerHeight(e) {
    const innerHeight = window.innerHeight;
    main.style.height = `${innerHeight - 60}px`;
}

// Title greet
const day = new Date();
const hr = day.getHours();

if (hr >= 0 && hr < 12) {
    document.title += ' Pagi! 🌄';
} else if (hr == 12) {
    document.title += ' Siang! 🌞';
} else if (hr >= 12 && hr <= 17) {
    document.title += ' Sore! 🌇';
} else {
    document.title += ' Malam! 🌆';
}

// Nav button
const navBtns = document.querySelectorAll('.nav-btn');

navBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (screen.width < 992) {
            document.querySelector('nav').style.top = '-100%';
        }

        const section = btn.getAttribute('data-section');
        const navText = document.getElementById('navText');
        navText.innerText = section;

        switch (section) {
            case 'home':
                // bikin jadi keliatan
                document.getElementById('home').removeAttribute('style');

                // bikin jadi ilang
                document.getElementById('projects').setAttribute('style', 'display: none;');
                document.getElementById('contacts').setAttribute('style', 'display: none;');
                break;
            case 'projects':
                // bikin jadi keliatan
                document.getElementById('projects').removeAttribute('style');

                // bikin jadi ilang
                document.getElementById('home').setAttribute('style', 'display: none;');
                document.getElementById('contacts').setAttribute('style', 'display: none;');
                break;
            case 'contacts':
                // bikin jadi keliatan
                document.getElementById('contacts').removeAttribute('style');

                // bikin jadi ilang
                document.getElementById('projects').setAttribute('style', 'display: none;');
                document.getElementById('home').setAttribute('style', 'display: none;');
                break;

            default:
                break;
        }
    });
});

// hamburger button
const hamburgerButton = document.getElementById('hamburgerBtn');

hamburgerButton.addEventListener('click', (e) => {
    document.querySelector('nav').style.top = 0;
});

const closeNavBtn = document.getElementById('closeBtn');

closeNavBtn.addEventListener('click', (e) => {
    document.querySelector('nav').style.top = '-100%';
});
