console.log("10");

let a = "510-10+5/5+10";

console.log(a.split());
// console.log(a.replace(/5/g, "1"));
console.log(a.replace(/[0-9]/g, ""));
console.log(a.split(/[\+\-\*\/]/));
console.log(a.split(/[\+\-\*\/]/).join());
console.log(
  a
    .split(/[\+\-\*\/]/)
    .join()
    .replace(",", "-")
    .replace(",", "+")
    .replace(",", "/")
    .replace(",", "+")
);
