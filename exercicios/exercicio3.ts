function toNumber(value: number | string) {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return Number(value);
  } else {
    throw "value deve ser um número ou uma string";
  }
}

console.log(toNumber(1));
console.log(toNumber("1"));
console.log(toNumber({}));
