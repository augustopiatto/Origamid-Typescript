function arredonda(param: string): string;
function arredonda(param: number): number;
function arredonda(param: string | number): string | number {
  if (typeof param === "string") {
    const ceiledNumber = Math.ceil(Number(param));
    return ceiledNumber.toString();
  } else {
    const result = Math.ceil(param);
    return result;
  }
}

console.log(arredonda("7.8"));
console.log(arredonda(1.1));
