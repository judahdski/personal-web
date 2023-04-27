import React from 'react';

function Projects() {
    return (
        <section id="projects" class="projects pt-4 px-lg-4 pb-5 py-lg-3 justify-content-center align-items-center" style="display: none;">
            <div class="py-3 py-lg-4 d-flex flex-column justify-content-lg-center align-content-lg-start gap-4">
                <div class="project-card p-3 d-flex flex-column flex-lg-row gap-3 gap-lg-4">
                    <img src="resources/img/projects/jhondoe-3d-portfolio.png" />
                    <div class="d-lg-flex flex-column justify-content-between">
                        <div class="project-description d-flex flex-column gap-3">
                            <p class="mb-0">Jhon Doe 3D Portfolio</p>
                            <p class="mb-0">
                                Website portfolio 3D ini dibangun menggunakan teknologi React JS, Tailwind, dan Three JS. Dengan antarmuka yang interaktif dan responsif, membuat website ini menjadi platform yang menarik untuk menampilkan
                                portofolio seni 3D.
                            </p>
                            <p class="mb-0">Tech stack : Javascript, React JS, Three JS, Tailwind</p>
                        </div>
                        <a href="https://jhondoe-portfolio.netlify.app/" target="_blank">
                            VISIT WEBSITE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
