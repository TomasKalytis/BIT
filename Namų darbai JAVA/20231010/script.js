//Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.

let vardas = 'Kevinas';
let pavarde = 'Costneris';

console.log(vardas, pavarde);
console.log('Vardas Pavardė:', vardas, pavarde);

if (vardas.length < pavarde.length) {console.log('Vardas Pavardė:', vardas);}
else if (vardas.length === pavarde.length) {console.log('Vardas Pavardė:', vardas, pavarde);}
else {console.log('Vardas Pavardė:', pavarde)};

//Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
//"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)"

vardas = 'Tomas';
pavarde = 'Kalytis';
let gimimometai = 1976;
let einamimetai = 2023;
let amzius = einamimetai - gimimometai;

console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${amzius} metai`);

//Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
//Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

vardas = 'Kevinas';
pavarde = 'Costneris';
let vardopaskutine = vardas[vardas.length - 1];
let vardopriespas = vardas[vardas.length - 2];
let vardopriespriespas = vardas[vardas.length - 3];
let pavardepaskutine = pavarde[pavarde.length - 1];
let pavardepriespas = pavarde[pavarde.length - 2];
let pavardepriespriespas = pavarde[pavarde.length - 3];
console.log(`Paskutinės trys vardo ir pavardės raidės: ${vardopaskutine} ${vardopriespas} ${vardopriespriespas} ${pavardepaskutine} ${pavardepriespas} ${pavardepriespriespas}`);
console.log(`Paskutinės trys vardo ir pavardės raidės: ${vardas[vardas.length - 1]} ${vardas[vardas.length - 2]} ${vardas[vardas.length - 3]} ${pavarde[pavarde.length - 1]} ${pavarde[pavarde.length - 2]} ${pavarde[pavarde.length - 3]}`)

//pagal "slice" metodą
console.log('Paskutinės trys vardo ir pavardės raidės:', vardas.slice(-3), pavarde.slice(-3));

//Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
let pastraipa = 'Once upon a time in hollywood';
pastraipa = pastraipa.replaceAll('o','*');
pastraipa = pastraipa.replaceAll('O','*');
console.log(pastraipa);


//klausimas dėstytojui: kodėl negalima iškarto dėti į "consol.log" kaip yra nurodyta prototipe?
//console.log(pastraipa.replaceALL('o', '*'));
//console.log(pastraipa.replaceALL('O', '*'));
//console.log(pastraipa.replaceAll('o','*').replaceAll('O','*'););

//Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let a = rand(0, 2);
let b = rand(0, 2);
let c = rand(0, 2);
let d = rand(0, 2);
let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

if (a === 0) nuliai++;
if (b === 0) nuliai++;
if (c === 0) nuliai++;
if (d === 0) nuliai++;
if (a === 1) vienetai++;
if (b === 1) vienetai++;
if (c === 1) vienetai++;
if (d === 1) vienetai++;
if (a === 2) dvejetai++;
if (b === 2) dvejetai++;
if (c === 2) dvejetai++;
if (d === 2) dvejetai++;
   
console.log('Gauti skaičiai:', a, b, c, d);
console.log('Nuliai', nuliai, 'Vienetai', vienetai, 'Dvejetai', dvejetai);

//Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. 
//Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. 
//Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.

let e = rand(0, 4);
let f = rand(0, 4);
let rezultatas = e / f;
let rez = f / e;

console.log('Gauti skaičiai', e, f);
rezultatas = +rezultatas.toFixed(2);
rez = rezultatas.toFixed(2);
if(e >= f || f <= e){console.log('Gauti skaičiai:', rezultatas)};
if(e <= f || f >= e){console.log('Gauti skaičiai:', rez)};

//Naudokite funkciją ir sukurkite tris kintamuosius
// kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25. 
//Raskite ir atspausdinkite vidurinę reikšmę.
let g = rand(0, 25);
let h = rand(0, 25);
let i = rand(0, 25);

console.log('Gauti skaičiai', g, h, i);

//gautasSkaicius(Math.mid(g, h, i));
//console.log(gautasSkaicius);


//Sukurti du kintamuosius. 
//Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
//Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

let inicialai = (vardas[0] + pavarde [0]);
console.log('Inicialai:', inicialai);

//Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
let raides = 'abcdefghijklmnopqrstuvwxyz';
let pirma = raides[rand(0, 26)];
let antra = raides[rand(0, 26)];
let trecia = raides[rand(0, 26)];

console.log('Atsitiktinė raidė:', pirma, antra, trecia);





