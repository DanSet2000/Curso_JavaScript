const bill = 275;
let tip = 0;
/* Write your code below. Good luck! 🙂 */

// If - Else
if (bill >= 50 && bill <= 300){
    console.log("Bill: " + bill);
    console.log("Tip: " + (tip=bill*0.15));
    console.log("Total: " + (bill + tip));
}else{
    console.log("Bill: " + bill);
    console.log("Tip:" + (tip=bill*0.20));
    console.log("Total: " + bill + tip);
}

// Operador Ternario

bill >= 50 && bill <= 300 ? console.log(`Bill: ${bill}, Tip: ${tip=bill*0.15}, Total: ${bill+tip}`) :
console.log(`Bill: ${bill}, Tip: ${tip=bill*0.20}, Total: ${bill+tip}`)