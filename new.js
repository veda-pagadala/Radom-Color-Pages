"use strict";

var colors = ["white ", "red", "blue", "yellow", "violet"];

var len = colors.length;

var buttoncontrol = document.getElementById("btn");
var spancontrol = document.getElementById("color");

buttoncontrol.addEventListener("click", () => {
  var index = Math.floor(Math.random() * len);
  spancontrol.innerHTML = colors[index];
  document.body.style.backgroundColor = colors[index];
});
