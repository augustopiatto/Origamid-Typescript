"use strict";
async function cursosAPI() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
}
function isCurso(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "horas" in value &&
        "tags" in value) {
        return true;
    }
    else {
        return false;
    }
}
async function handleCursos(data) {
    if (Array.isArray(data)) {
        data.forEach((item) => {
            if (isCurso(item)) {
                document.body.innerHTML += `<div>
            <p>${item.nome}</p>
            <p>${item.horas}</p>
            <p>${item.tags}</p>
          </div>`;
            }
        });
    }
}
//# sourceMappingURL=exercicio10.js.map