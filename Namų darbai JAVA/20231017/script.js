
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Sukurkite funkciją kuri priimtų parametrą "name".
//Jos tikslas atspausdinti naršyklėje tekstą "Labas," 
//ir šalia jo perduotą vardą. Pvz "Labas, Elena".
document.write('<div class="row">');
function message(name){ 
    if(!name)
        return `Labas: Neneįvestas joks tekstas`;
    else
        return `Labas: ${name}`
    }
document.write(message('Elena'));
document.write("</div>");


//Sukurkite funkciją, kuri priimtų vieną parametrą (tekstą)
// ir grąžintų atsakymą kiek simbolių yra tame tekste.
// Iš funkcijos gautą rezultatą atvaizduokite naršyklėje.
document.write('<div class="row">');
function mess(text){
    let count = text.length;
    if(text === '')
        return `Neneįvestas joks tekstas`;
        
        return `Simbolių skaičius: ${count}`;
    }
document.write(mess("pasikiskekopusteliaudamas"));
document.write("</div>");

// document.write('<div class="row">');
// function count(text){
//     return text=text.length
// };
// let word = count("pasikiskekopusteliaudamas");
// document.write(word);
// document.write("</div>");

//Sukurkite funkciją kuri priimtų du parametrus "name" ir "last_name". 
//Funkcija turi grąžinti vieną stringą, kuriame būtų vardas ir pavardė prasidedantys didžiosiomis raidėmis.
document.write('<div class="row">');
function nameSurname(name, last_name){
 
    if(!name || !last_name)
        return `Neįvesti duomenys`;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        last_name = last_name.charAt(0).toUpperCase() + last_name.slice(1);
    return `Vardas Pavardė: ${name} ${last_name}`
}
document.write(nameSurname("tomas", "kalytis"));
document.write("</div>");

//Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 
//ir atspausdintų konsolėje vienoje eilutėje atskirtus kableliais. 
//Po paskutinio skaičiaus kablelio neturi būti.

let randomNumber = rand(0, 5);
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
  

  document.write('<div class="row">');
let sum = 0;
for ( let i = 1; i <= 20; i++){
    if (i % 2 === 0) {
        sum = sum + i;
    }
}
document.write(sum);
  document.write("</div>");