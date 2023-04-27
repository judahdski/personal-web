import React from 'react';

function NavText({ text }) {
    return (
        <div class="nav-text d-lg-flex justify-content-end align-items-center">
            <p id="navText" class="mb-0">
                {text}
            </p>
        </div>
    );
}

export default NavText;
