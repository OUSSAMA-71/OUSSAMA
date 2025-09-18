
let nombre1 = 10;
let nombre2 = 5;
let somme = nombre1 + nombre2;
console.log("La somme est : " + somme);

//CHAPITRE : Chapitre 1 – Variables, types de données et opérateurs
let num1 = 10;
let num2 = 5;
let sum1 = num1 + num2;
console.log("La somme est : " + sum1);




//CHAPITRE : Chapitre 2 – Fonctions simples
function addition(a, b) {
    return a + b;

  }
  
  let sum2 = addition(8, 5);
  console.log("La somme est : " + sum2);


  


let sum3 = addition(10, 5);
let name = "mouhamed"
console.log("la somme de  : "+ name + " est " + sum3);


//CHAPITRE : Chapitre 3 – Conditions et logique booléenne
let age = 18;

if (age >=18) {
  console.log("tu es majeur.");
} else {
  console.log("tu es mineur");
}

let note = 15;

if (note >= 18) {
  console.log("excillent !");
} else if (note >= 11 ){
  console.log("bien, tu as la moyenne.");
} else {
  console.log("en dessous de la moyesse.");
}

let year = "april";

switch (year) {
  case "april":
    console.log("Début de semaine !");
    break;
  case "may":
    console.log("Presque le week-end !");
    break;
  default:
    console.log("year standard.");
}
//CHAPITRE : Chapitre 4 – Boucles : for, while, break
for (let o =2; o <= 5; o++) {
  console.log("itération n° " + o);
}

let compteur = 5;
while (compteur <= 7) {
  console.log("compteur :" + compteur);
  compteur++;
}
let x = 0;
do{
  console.log("valeur de x : " + x);
  x++;
}while (x < 5);

for (let i = 1; i <= 10; i++) {
  if (i === 5) break; // sauter le 5
  console.log("Nombre : " + i);
}

for (let i = 1; i <=4; i++){
  if (i ===2) continue; // saute le 3
  console.log (i);
}
