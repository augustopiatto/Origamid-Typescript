var links = document.querySelectorAll(".link");
links.forEach(function (link) {
    if (link instanceof HTMLElement) {
        changeStyle(link);
    }
});
function changeStyle(element) {
    element.style.color = "red";
    element.style.border = "solid";
}
