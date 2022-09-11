const cliColor = require("cli-color");

// console.log(cliColor.black("Hello"));

// console.log(cliColor.red.bgWhite.underline("Underlined red text on white background."));

const danger = cliColor.red.bold
const warning = cliColor.yellow.bold
const success = cliColor.green.bold

let x=10, y="10";
  if(x === y) {
    console.log(success("SAME!"));
  }
  else if(x == y) {
    console.log(warning("TYPES ARE NOT SAME!"));
  }
  else {
    console.log(danger("CAN'T BE SAME!"));
  }