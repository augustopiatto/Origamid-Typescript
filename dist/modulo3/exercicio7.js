"use strict";
const links = document.querySelectorAll(".link");
links.forEach((link) => {
    if (link instanceof HTMLElement) {
        changeStyle(link);
    }
});
function changeStyle(element) {
    element.style.color = "red";
    element.style.border = "solid";
}
//# sourceMappingURL=exercicio7.js.map