'use strict';

const daniel = {
  firstName: 'Daniel',
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);

    // Esto arroja un error por usar This
    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => console.log(`Hola ${this.firstName}`),
};

daniel.greet(); // Obtenemos un Undefined
