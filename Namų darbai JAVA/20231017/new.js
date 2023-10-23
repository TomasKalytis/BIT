//Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 
//ir atspausdintų konsolėje vienoje eilutėje atskirtus kableliais. 
//Po paskutinio skaičiaus kablelio neturi būti.

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
document.write('<div class="row">');
function numbers() {
    let randomNumbers = [];
    for (let i = 0; i < 3; i++){
        let randomNumber = rand(0, 5);
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  }
  let randomNumbers = numbers();
  document.write(randomNumbers);
  document.write("</div>");

  //Parašykite funkciją kuri priimtų tris parametrus "from" ir "to" ir "limit". 
  //Patikrinkite ar šie perduodami parametrai yra skaičiai 
  //ir pagal juos sugeneruokite masyvą, 
  //kurio ilgį nusako "limit" parametras, 
  //o reikšmės from ir to nurodo atsitiktinį skaičių šiuose rėžiuose.

  document.write('<div class="row">');
  const param = function(from, to, limit){
    if (typeof from === 'number' && typeof to === 'number' && typeof limit === 'number' && limit >= 0){
        const paramMasyvas = [];
        for (let i = 0; i < limit; i++){
        const randomNumber = rand(from, to);
        paramMasyvas.push(randomNumber) 
        }
        // if (typeof limit === 'number' && limit >= 0)
        if (paramMasyvas.length > limit){
            paramMasyvas.length = limit;
        }
        return paramMasyvas;
    }
    else { 
        console.log('Bent vienas iš trijų parametrų nėra skaičius.')
        return null;
        }
    }
const tikrasMasyvas = param(1, 10, 7);
console.log (tikrasMasyvas)
document.write(tikrasMasyvas);
  document.write("</div>");

//Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, 
//ir grąžintų reikšmę (perduodami du parametrai: skaičius ir laipsnis)
document.write('<div class="row">');
const degrees = function(num, deg){
    const result = Math.pow(num, deg);
    return `Skaičius: ${num} ${deg} = ${result}`;
}

document.write(degrees(5,3));
document.write("</div>");

// Parašykite funkciją, kurios parametras būtų tekstas, 
// kuris yra įterpiamas į h1 tagą. 
// Rezultatą atvaizduokite naršyklėje.
document.write('<div class="row">');
function message(text){
        return `<h1>${text}</h1>`;
    }
document.write (message('Mano tekstas'));

document.write("</div>");

// Parašykite funkciją su dviem parametrais. 
// Pirmasis yra tekstas, įterpiamas į h tagą, 
// o antrasis tago numeris (1-6). 
// Rašydami šią funkciją remkitės antrame uždavinyje parašyta funkcija.

document.write('<div class="row">');
function mineText(text1, text2){
    return `<h1>${text1}</h1>` + `<h5>${text2}</h5>`;
}
document.write (mineText('Mano tekstas', 'yra geras'));
document.write("</div>");

//Aprašykite funkciją kuri priimtų vieną parametrą "number"
//  bei patikrintų ar duotas skaičius yra pirminis.
//  Atgal grąžinkite teigiamą arba neigiamą (boolean) atsakymą.

// mano
document.write('<div class="row">');
const primeNumber = (num) => {
    if (num <= 1) {
       return false;
    }
    for (let i = 2; i <= num; i++) {
       if (num % i === 0) {
          return false;
       }
       return true;
    }
 };
 
 document.write(primeNumber(10));
 document.write("</div>");

// kolegų sprendimas
// document.write('<div class="row">');
// const primeNumber = (num) => {
//     if (num < 0 || num === 1) {
//        return false;
//     }
//     for (let i = 2; i <= num; i++) {
//        if (num % i === 0) {
//           return false;
//        }
//        return true;
//     }
//  };
 
//  document.write(primeNumber(5));
//  document.write("</div>");

// Sugeneruokite 100 elementų masyvą 
// kurio reikšmės atsitiktiniai skaičiai nuo 997 iki 15991.
document.write('<div class="row">');
    
        const ranNumbers = function(from1, to1, limit1){
        const ranNumbersMasyvas = [];
        for (let i = 0; i < limit1; i++){
        const randoNumber = rand(from1, to1);
        ranNumbersMasyvas.push(randoNumber) 
        }
        if (ranNumbersMasyvas.length > limit1){
            ranNumbersMasyvas.length = limit1;
        }
        return ranNumbersMasyvas;
         }
    
        const realMasyvas = ranNumbers(997, 15991, 100);
        console.log (realMasyvas)
        document.write(realMasyvas);
    
document.write("</div>");

// Pasinaudodami devintoje užduotyje aprašyta funkcija masyve palikite tik pirminius skaičius, kurie yra didesni nei 5000;
document.write('<div class="row">');
const primNumbers = function(num2) {
    const primeNumbersArray = [];
    for (let i = 5001; i <= num2; i++) {
        let iPrime = true;
        if (i < 2) {
           continue;
        }
    for (let ip = 2; ip <= Math.sqrt(i); ip++) {
       if (i % ip === 0) {
          iPrime = false;
          break
       }
    }
    if (iPrime){
        primeNumbersArray.push(i);
    }
 };
 return primeNumbersArray;
};
 
 document.write(primNumbers(8000));
 document.write("</div>");