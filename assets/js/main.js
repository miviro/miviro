// main.js
import htmx from 'htmx.org';
import Alpine from 'alpinejs';
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

window.htmx = htmx;
window.Alpine = Alpine;

async function loadParticles(options) {
    await loadSlim(tsParticles);
    await tsParticles.load({ id: "tsparticles", options });
}

const configs = {
    particles: {
        number: { value: window.innerWidth / 100 },
        color: { value: "#ffffff" },
        links: { enable: true, distance: 200 },
        shape: { type: "circle" },
        opacity: { value: 1 },
        size: { value: { min: 4, max: 6 } },
        move: { enable: true, speed: 0.5 },
    },
    background: { color: "#f3f4f6" },
    poisson: { enable: true },
};

loadParticles(configs);
Alpine.start();


document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        const src = img.src;
        const match = src.match(/(.*)_compressed_(.*)\.jpg$/);
        if (match) {
            const newSrc = `${match[1]}.${match[2]}`;
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '50%';
            modal.style.left = '50%';
            modal.style.transform = 'translate(-50%, -50%)';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            modal.style.padding = '20px';
            modal.style.zIndex = '1000';

            const newImg = document.createElement('img');
            newImg.src = newSrc;
            newImg.style.maxWidth = '90vw';
            newImg.style.maxHeight = '90vh';

            modal.appendChild(newImg);
            document.body.appendChild(modal);

            modal.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        }
    });
});
// Re-initialize particles on history restore
document.body.addEventListener('htmx:historyRestore', () => {
    loadParticles(configs);
});

