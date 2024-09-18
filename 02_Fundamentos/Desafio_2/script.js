/* Write your code below. Good luck! 🙂 */

// Arreglo que contiene los valores de las cuentas
const bills = [125, 555, 44];

// Funcion encargada de determinar la propina por cuenta
function calcTip (billValue){
    
    if (billValue >= 50 && billValue <= 300){
        let tip = billValue*0.15;
        return tip;
    }else{
        let tip = billValue*0.20;
        return tip;
    }
}

// Arreglo que contiene las propinas de cada cuenta
const tips = [calcTip(125), calcTip(555), calcTip(44)];

console.log(tips);

// Arreglo que contiene el total a pagar de cada cuenta
const totals = [bills[0] + calcTip(125), + bills[1] + calcTip(555), bills[2] + calcTip(44)];

console.log(totals);
