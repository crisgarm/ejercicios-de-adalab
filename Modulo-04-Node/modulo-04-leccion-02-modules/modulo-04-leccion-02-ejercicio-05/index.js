const _ = require("lodash");

const students = [
  {
    name: "Sofía",
    promo: "k",
  },
  {
    name: "María",
    promo: "l",
  },
  {
    name: "Lucía",
    promo: "j",
  },
  {
    name: "Julia",
    promo: "l",
  },
];

const sortStudentsByPromo = _.sortBy(students, ["promo", "name"]);
console.log(sortStudentsByPromo);
