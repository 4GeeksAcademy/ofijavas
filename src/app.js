/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronoun = [" El "];
  let subject = [" avion ", " perro ", " dragon ", " peluche "];
  let action = [" lo tiene ", " lo guardo ", " lo rompio "];
  let possetion = [
    " en la calle ",
    " en el sol ",
    " en el coche ",
    " debajo del puente "
  ];
  let where = [
    " y murio ",
    " y desaparecio ",
    " y no volvera ",
    " helicoptero "
  ];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    "" +
    subject[subjIndex] +
    "" +
    action[actionIndex] +
    "" +
    possetion[possetionIndex] +
    "" +
    where[whereIndex]
  );
};
