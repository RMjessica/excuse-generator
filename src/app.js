/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Setting up arrays
  let who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "the keys ", "the car "];
  let when = [
    "before the class.",
    "right on time.",
    "when I finished.",
    "during my lunch.",
    "while I was praying."
  ];

  // ramdomizing

  function getRandom(arr) {
    let r = Math.floor(Math.random() * arr.length);
    return arr[r];
  }

  // event
  document.getElementById("excuse").innerHTML =
    getRandom(who) + getRandom(action) + getRandom(what) + getRandom(when);
};
