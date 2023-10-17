var buttonMobile = document.getElementById("btn-mobile");
function openMenu(event) {
    var nav = document.getElementById("nav");
    var button = event.currentTarget;
    if (button instanceof HTMLElement && nav) {
        nav.classList.toggle("active");
        var active = nav.classList.contains("active");
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
buttonMobile === null || buttonMobile === void 0 ? void 0 : buttonMobile.addEventListener("pointerdown", openMenu);
