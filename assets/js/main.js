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

// Re-initialize particles on history restore
document.body.addEventListener('htmx:historyRestore', () => {
    loadParticles(configs);
});

