const temperatures = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C en ${i + 1} dias....`;
  }

  console.log(str);
};

printForecast(temperatures);
