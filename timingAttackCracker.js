const check = require("./timer");

// Initialise global variables
let longest = 0;
let PIN;
let breakcheck = false;

async function request() {
  let times = [];
  for (a = 0; a < 10; a++) {
    for (i = longest; i < longest + 10; i++) {
      let input = i;
      console.log(i);
      let response = await check(input);
      let time = response.finish;
      let result = response.response;
      times.push(time);
      if (result !== "incorrect pin") {
        PIN = result;
        breakcheck = true;
      }
    }
    let longestTime = times.indexOf(Math.max.apply(null, times));
    longest += longestTime;
    longest *= 10;
    console.log(times);
    if (breakcheck) {
      console.log(`PIN number is: ${longest / 10}`);
      break;
    }
    times = [];
    longestTime = null;
  }
}
request();