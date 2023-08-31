// Simulador de préstamos

alert("BIENVENIDO AL BANCO DE PRESTAMOS")
let plan = prompt("Ingrese su tipo de plan: BASIC - PREMIUM").toUpperCase();
console.log("Su plan es: " + plan); 

if (plan == "BASIC"){
    interesPlan = 40;
} else if (plan == "PREMIUM"){
    interesPlan = 60;
}
console.log("Interés del prestamo: %" + interesPlan);

//Ingreso de monto
montoMaximo = 10000000;
let montoSolicitado = parseFloat(prompt("Ingrese el monto a solicitar: (max: $" + montoMaximo + ")"));

while (montoSolicitado > montoMaximo){
    alert("Monto no permitido! Monto maximo $" + montoMaximo);
    montoSolicitado = parseFloat(prompt("Ingrese el monto a solicitar: (max: $" + montoMaximo + ")"));
}
console.log("Monto solicitado: $" + montoSolicitado); 

//Seccion Cuotas
let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desea: 12 / 18 / 24"));
while (cuotas != 12 && cuotas != 18 && cuotas != 24){
    alert("Cantidad de cuotas no permitida!");
    cuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desea: 12 / 18 / 24"));
}

//Intereses
if (cuotas == 12){
    interesCuotas = 20;
} else if (cuotas == 18){
    interesCuotas = 30;
} else if (cuotas == 24){
    interesCuotas = 40;
}
console.log("Usted eligió: " + cuotas + " cuotas" + " con interés de: %" + interesCuotas);  

//Calculo de intereses
let cuotaBase = montoSolicitado / cuotas; 
console.log("Cuota base: " + cuotaBase);
let cuotaInteresPlan = (interesPlan/100) / cuotas;
let interesXCantidadCuotas = interesCuotas / cuotas;


let CtaBaseConInteresPlan = (cuotaBase * interesPlan) / 100;
console.log("Monto interés del plan: " + CtaBaseConInteresPlan);

let CtaBaseConInteresCantCtas = (cuotaBase * interesCuotas) / 100;
console.log("Monto interés por cant. de ctas: " + CtaBaseConInteresCantCtas);

let montoFinalCuota = cuotaBase + CtaBaseConInteresPlan + CtaBaseConInteresCantCtas;
console.log("Valor de cuota: $" + montoFinalCuota);

//Cierre final con los datos seleccionados 
let salida = "Tipo de plan: " + plan + "\n";
salida += "Monto solicitado: " + montoSolicitado + "\n";
salida += "Cant de cuotas: " + cuotas + "\n";
salida += "Total a pagar:\n";
salida += cuotas + (" cuotas de $") + montoFinalCuota + "\n";

alert(salida);
