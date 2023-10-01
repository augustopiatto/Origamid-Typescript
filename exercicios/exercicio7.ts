const links = document.querySelectorAll(".link");

links.forEach((link) => {
  if (link instanceof HTMLElement) {
    changeStyle(link);
  }
});

function changeStyle(element: HTMLElement) {
  element.style.color = "red";
  element.style.border = "solid";
}
