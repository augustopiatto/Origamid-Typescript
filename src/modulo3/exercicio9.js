function arredonda(param) {
    if (typeof param === "string") {
        var ceiledNumber = Math.ceil(Number(param));
        return ceiledNumber.toString();
    }
    else {
        var result = Math.ceil(param);
        return result;
    }
}
console.log(arredonda("7.8"));
console.log(arredonda(1.1));
