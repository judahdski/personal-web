import React from 'react';

function Footer() {
    return (
        <footer className="pb-5 d-lg-flex justify-content-center align-items-end">
            <div className="d-flex flex-column gap-3">
                <a href="https://www.linkedin.com/in/judahdasuki/">
                    <span style="color: white; font-size: 24px">
                        <i className="fa-brands fa-linkedin"></i>
                    </span>
                </a>
                <a href="https://github.com/judahdski">
                    <span style="color: white; font-size: 24px">
                        <i className="fa-brands fa-github"></i>
                    </span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
