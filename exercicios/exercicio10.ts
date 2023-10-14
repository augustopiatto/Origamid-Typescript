interface Curso {
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nivel: "iniciante" | "avancado";
  nome: string;
  tags: string[];
}

async function cursosAPI(): Promise<void> {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json);
}

function isCurso(value: unknown): value is Curso {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "horas" in value &&
    "tags" in value
  ) {
    return true;
  } else {
    return false;
  }
}

async function handleCursos(data: unknown) {
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
