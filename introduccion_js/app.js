
let texto = "Hola mundo";
let numero = 42;
let boleanito = true;
let nulo = null;
let indefinido;
let simbolo = Symbol();
let numeroGrande = 12345n;

console.groupCollapsed("grupo");
console.log("String:", texto);
console.error("Number:", numero);
console.info("Boolean:", boleanito);
console.log("Null:", nulo);
console.warn("Undefined:", indefinido);
console.debug("Symbol:", simbolo);
console.info("BigInt:", numeroGrande);
console.table([
    "number " + numero,
    "boleanito " + boleanito
])

console.groupEnd();


texto = "adios mundo";
numero = 1;
boleanito = false;
nulo = 2;
indefinido = 1;
simbolo = Symbol("hola");
numeroGrande = 54321n;

console.groupCollapsed("nuevo grupo");
console.debug("String:", texto);
console.debug("Number:", numero);
console.debug("Boolean:", boleanito);
console.debug("Null:", nulo);
console.debug("Undefined:", indefinido);
console.debug("Symbol:", simbolo);
console.debug("BigInt:", numeroGrande);
console.groupEnd();