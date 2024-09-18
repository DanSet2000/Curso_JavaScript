/*
Trabajamos para una compañía dedicada a la creación de termómetros inteligentes para el hogar. Una de las tareas más recientes consiste en:

- Dado un arreglo de temperaturas de un día en particular, calcular la amplitud de la temperatura.
- Considere que en algunos casos puede que exista un error con el sensor.
*/

const temperaturas = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// ¿Qué es la amplitud de temperatura?: Diferencia entre la temperatura más alta y la más baja

// ¿Cómo obtenemos el máximo y el mínimo del arreglo?

// ¿Qué significa un error en el sensor y que podemos hacer?

// ----- Como ignorar los errores

// ----- Encontrar las temperaturas máxima y mínima

// ----- Restar ambas temperaturas y retornar el valor

const calcAmplitud = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];

  for (let i = 0; i < temperaturas.length; i++) {
    // Si la temperatura es distinta de un numero, continuar al siguiente elemento del arreglo
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (temps[i] > maxTemp) {
      maxTemp = temps[i];
    }

    if (temps[i] < minTemp) {
      minTemp = temps[i];
    }
  }
  console.log("Temperatura Máxima: " + maxTemp);
  console.log("Temperatura Mínima: " + minTemp);
  console.log("Amplitud: " + (maxTemp - minTemp));
};

calcAmplitud(temperaturas);
