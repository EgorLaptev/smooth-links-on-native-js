'use strict';

document.addEventListener('DOMContentLoaded', e => {

    const links = document.querySelectorAll("a");

    for (const link of links) {

        if ( link.dataset.link !== 'smooth' ) continue;

        const targetID = link.href.split('#').pop();
        const target   = document.querySelector(`#${targetID}`);

        link.addEventListener('click', e => {

            e.preventDefault();

            target.scrollIntoView({
                block: 'center',
                behavior: 'smooth'
            })

        });
    }

});