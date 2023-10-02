"use strict";
const buttonMobile = document.getElementById("btn-mobile");
function openMenu(event) {
    const nav = document.getElementById("nav");
    const button = event.currentTarget;
    if (button instanceof HTMLElement && nav) {
        nav.classList.toggle("active");
        const active = nav.classList.contains("active");
        if (active) {
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Abrir Menu");
        }
        else {
            button.setAttribute("aria-expanded", "true");
            button.setAttribute("aria-label", "Fechar Menu");
        }
    }
}
buttonMobile?.addEventListener("pointerdown", openMenu);
