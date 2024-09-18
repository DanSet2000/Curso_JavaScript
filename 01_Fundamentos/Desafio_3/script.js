let scoreDolphins = ((96+108+89)/3);
let scoreKoalas = ((88+91+110)/3);


console.log(scoreDolphins);
console.log(scoreKoalas);

console.log("Results:")
if (scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
}else if (scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy");
}else if (scoreDolphins === scoreKoalas){
    console.log("Both win the trophy");
}