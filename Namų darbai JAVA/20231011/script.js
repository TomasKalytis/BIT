//Naršyklėje nupieškite linija iš 400 “*”. 
//Naudodami css stilių “suskaldykite” liniją taip, kad visos žvaigždutės matytųsi ekrane;
//Programiškai “suskaldykite” žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 50 “*”; 

document.write('<div class="row">');
document.write('<div class="container">');
document.write('<p>');
let simbol = '*';
let k = '';
for (let i = 1; i <= 400; i++) {
    k += simbol;
    if (i % 50 === 0) {
        k += '<br>';
    }
}
    document.write(k);
document.write('</p>');
document.write('</div>');
document.write("</div>");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Naudokite funkcija rand(). 
//Sugeneruokite atsitiktinį skaičių nuo 1 iki 6 ir 
//jį atspausdinkite atitinkame h tage. Pvz skaičius 3- rezultatas: <h3>3</h3>
let g = rand(1, 6);

document.write('<div class="row1">');
document.write('<div class="container">');
document.write("<h3>Gautas skaičius: " + g + "</h3>");
document.write('</div>');
document.write("</div>");

//Naudokite funkcija rand(). 
//Atspausdinkite 3 skaičius nuo -10 iki 10. 
//Skaičiai mažesni už 0 turi būti žali, 0 - raudonas, didesni už 0 mėlyni.
let a = rand(-10, 10);
let b = rand(-10, 10);
let c = rand(-10, 10);
document.write('<div class="row1">');
document.write('<div class="container">');
document.write('Gauti skaičiai: ', a , b , c);
document.write('</div>');
document.write("</div>");

//Sukurkite kintamąjį su stringu: “An American in Paris”. 
//Jame ištrinti visas balses. Rezultatą atspausdinti. 
//Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.//

let pastraipa = 'An American in Paris';
pastraipa = pastraipa.replaceAll('a','').replaceAll('e','').replaceAll('i','').replaceAll('o','').replaceAll('u','').replaceAll('y','').replaceAll('A','').replaceAll('E','').replaceAll('I','').replaceAll('O','').replaceAll('U','').replaceAll('Y','');
document.write('<div class="row1">');
document.write('<div class="container">');
document.write('Pastraipa:', pastraipa);
document.write('</div>');
document.write("</div>");

pastraipa = "Breakfast at Tiffany's";
pastraipa = pastraipa.replaceAll('a','').replaceAll('e','').replaceAll('i','').replaceAll('o','').replaceAll('u','').replaceAll('y','').replaceAll('A','').replaceAll('E','').replaceAll('I','').replaceAll('O','').replaceAll('U','').replaceAll('Y','');
document.write('<div class="row1">');
document.write('<div class="container">');
document.write('Pastraipa:', pastraipa);
document.write('</div>');
document.write("</div>");

pastraipa = "2001: A Space Odyssey";
pastraipa = pastraipa.replaceAll('a','').replaceAll('e','').replaceAll('i','').replaceAll('o','').replaceAll('u','').replaceAll('y','').replaceAll('A','').replaceAll('E','').replaceAll('I','').replaceAll('O','').replaceAll('U','').replaceAll('Y','');
document.write('<div class="row1">');
document.write('<div class="container">');
document.write('Pastraipa:', pastraipa);
document.write('</div>');
document.write("</div>");

pastraipa = "It's a Wonderful Life";
pastraipa = pastraipa.replaceAll('a','').replaceAll('e','').replaceAll('i','').replaceAll('o','').replaceAll('u','').replaceAll('y','').replaceAll('A','').replaceAll('E','').replaceAll('I','').replaceAll('O','').replaceAll('U','').replaceAll('Y','');
document.write('<div class="row1">');
document.write('<div class="container">');
document.write('Pastraipa:', pastraipa);
document.write('</div>');
document.write("</div>");

//Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, 
//atspausdinkite juos atskirtus tarpais ir 
//suskaičiuokite kiek tarp jų yra didesnių už 150.
//Skaičiai didesni nei 275 turi būti raudonos spalvos.
//let skaiciai = Math.floor(math.random()*300);
//document.write(skaiciai);

document.write('<div class="row2">');
document.write('<div class="container">');
let skaiciai = [];
let vienetai = 0;
    for (let i = 0; i < 300; i++) {
        atsitiktinisSkaicius = rand(0, 300);
        skaiciai.push(atsitiktinisSkaicius);
        if (atsitiktinisSkaicius > 150) { 
        vienetai++;
        }
        if  (i > 0 && i % 50 === 0) {
        document.write('<br>');
        }
        let spalva = atsitiktinisSkaicius > 250 ? 'red' : 'black';

        document.write('<span style="color: ' + spalva + ';">' + atsitiktinisSkaicius + '</span> ');
}

document.write('<br>Vienetai: ', vienetai);
document.write('</div>');
document.write("</div>");


