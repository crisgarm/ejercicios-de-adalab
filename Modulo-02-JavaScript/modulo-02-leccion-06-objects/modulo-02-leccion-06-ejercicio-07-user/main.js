"use strict";

const job = "developer";

const user = {};
user.firstName = "Juan";
user.lastName = "González";
user.age = 30;
user.job = job;

console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.job);

user.firstName = "Sara";
user.age = 30 + 1;

console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.job);
