'use strict';

console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAge(2000);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAgeArrow(2000);

const daniel = {
  year: 1995,
  calcAge: function (birthYear) {
    console.log(2024 - this.year);
  },
};

daniel.calcAge();

const emily = {
  year: 2017,
};

emily.calcAge = daniel.calcAge;
emily.calcAge();
