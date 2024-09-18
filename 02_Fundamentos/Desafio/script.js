/* Write your code below. Good luck! 🙂 */

// Funcion de Flecha

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

var scoreDolphins = calcAverage(85,54,41);
var scoreKoalas = calcAverage(23,34,27);

console.log(scoreDolphins);
console.log(scoreKoalas);


// Funcion Normal
function checkWinner(avgDolphins, avgKoalas){
    
    const avg_scoreDolphins = scoreDolphins;
    const avg_scoreKoalas = scoreKoalas;
    
    if (avg_scoreDolphins >= 2 * avg_scoreKoalas){
        const result = `Dolphins win (${avg_scoreDolphins} vs ${avg_scoreKoalas})`
        return result
    }else if (avg_scoreKoalas >= 2 * avg_scoreDolphins){
        const result = `Koalas win (${avg_scoreKoalas} vs ${avg_scoreDolphins})`
        return result
    }else{
        const result = `No team has met the winning conditions`
        return result
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas))