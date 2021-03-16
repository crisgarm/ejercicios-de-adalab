const fs = require("fs");

const text =
  "Friends don't lie. Why are you keeping this curiosity door lock? It’s finger-lickin’ good. No... no El, you're not the monster. You saved me. Do you understand? You saved me. You’re right. You are a freak…. Who would you rather be friends with: Bowie or Kenny Rogers?";

const obj = {
  originalContent: text,
  changedContent: text.toUpperCase(),
  textLenght: text.length,
};

console.log(obj);

const handleWriteFile = (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("The file has been saved!");
  }
};

const objString = JSON.stringify(obj);

fs.writeFile("./output.txt", objString, handleWriteFile);
