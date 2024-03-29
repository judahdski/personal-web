import React from 'react';

function Header() {
    return (
        <header
            class="
            px-4 px-lg-5 
            d-flex justify-content-between align-items-center
        "
        >
            <a href="" class="nav-btn" data-section="home">
                <img src="resources/img/regular-logo.png" class="logo" />
            </a>
            <nav
                class="
                p-3 p-lg-2
                d-flex flex-column flex-lg-row align-items-stretch .align-items-lg-center gap-4   
            "
            >
                <span class="p-2" style="display: inline-block;">
                    <i class="fa-solid fa-xmark" id="closeBtn"></i>
                </span>
                <a href="#projects" onclick="event.preventDefault();" class="nav-btn text-center p-3 pb-4 text-decoration-none" data-section="projects">
                    PROJECTS
                </a>
                <a href="#contacts" onclick="event.preventDefault();" class="nav-btn text-center p-3 pb-4 text-decoration-none" data-section="contacts">
                    CONTACT
                </a>
            </nav>
            <i class="fa-solid fa-align-right mobile-nav" id="hamburgerBtn"></i>
        </header>
    );
}

export default Header;
