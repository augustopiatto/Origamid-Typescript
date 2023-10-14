interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

interface Window {
  varGlobal: any;
}

window.varGlobal = {};

const form = document.body.querySelector<HTMLElement>("#form");
form?.addEventListener("keyup", adicionar);

function adicionar({ target }: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.varGlobal[target.id] = target.value;
    localStorage.setItem("varGlobal", JSON.stringify(window.varGlobal));
  }
}

function isUserData(obj: unknown): obj is UserData {
  if (
    obj &&
    typeof obj === "object" &&
    ("nome" in obj || "email" in obj || "cpf in obj")
  ) {
    return true;
  } else {
    return false;
  }
}

function carregarLocalStorage() {
  const localVarGlobal = localStorage.getItem("varGlobal");
  if (localVarGlobal && validJson(localVarGlobal)) {
    const varGlobal = JSON.parse(localVarGlobal);
    if (isUserData(varGlobal)) {
      Object.entries(varGlobal).forEach(([key, value]) => {
        const input = document.getElementById(key);
        if (input instanceof HTMLInputElement) {
          input.value = value;
          window.varGlobal[key] = value;
        }
      });
    }
  }
}

function validJson(str: string) {
  try {
    JSON.parse(str);
  } catch (error) {
    return false;
  }
  return true;
}

carregarLocalStorage();
