window.varGlobal = {};
var form = document.body.querySelector("#form");
form === null || form === void 0 ? void 0 : form.addEventListener("keyup", adicionar);
function adicionar(_a) {
    var target = _a.target;
    if (target instanceof HTMLInputElement) {
        window.varGlobal[target.id] = target.value;
        localStorage.setItem("varGlobal", JSON.stringify(window.varGlobal));
    }
}
function isUserData(obj) {
    if (obj &&
        typeof obj === "object" &&
        ("nome" in obj || "email" in obj || "cpf in obj")) {
        return true;
    }
    else {
        return false;
    }
}
function carregarLocalStorage() {
    var localVarGlobal = localStorage.getItem("varGlobal");
    if (localVarGlobal && validJson(localVarGlobal)) {
        var varGlobal = JSON.parse(localVarGlobal);
        if (isUserData(varGlobal)) {
            Object.entries(varGlobal).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                var input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.varGlobal[key] = value;
                }
            });
        }
    }
}
function validJson(str) {
    try {
        JSON.parse(str);
    }
    catch (error) {
        return false;
    }
    return true;
}
carregarLocalStorage();
