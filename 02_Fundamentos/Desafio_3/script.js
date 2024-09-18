/* Write your code below. Good luck! 🙂 */

// Arreglo para almacenar las cuentas
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Arreglos vacío para almacenar propinas y totales
const tips = [];
const totals = [];

// Funcion para calcular propinas
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    let tip = bill * 0.15;
    return tip;
  } else {
    let tip = bill * 0.2;
    return tip;
  }
};

// Ciclo para almacenar las propinas dentro del arreglo
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips[i] = tip;
}

// Ciclo para almacenar los totales dentro del arreglo
for (let i = 0; i < bills.length; i++) {
  totals[i] = bills[i] + tips[i];
}

// Bonus
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i > arr.length; ) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
  console.log(sum);
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));

console.log(tips);
console.log(totals);
