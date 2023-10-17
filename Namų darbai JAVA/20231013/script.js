function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Nupieškite kvadratą iš “*”, 
//kurio kraštines sudaro 100 “*”. 
//Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.
document.write('<div class="row">');
document.write('<div class="container">');
let y = 1;
result = "";
let size = 39;
while (y <= size) {
    let x = 1    
    while (x <= size) {
        if(x === y || x === size - y + 1)
        result += '<span class="star" style="color: red;">*</span>';
    else result += '<span class="star">*</span>';
        x++;
    }
    result += '<br/>';
    y++
}
document.write(result);
document.write('</div>');
document.write("</div>");

//Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. 
//Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas.
//Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
document.write('<div class="row">');
document.write('<div class="container">');
let h = 0;
let s = 1;
let rez;
rezult = "";

//Iškritus herbui;
// while (rez !== h){
//     rez = rand(0, 1);
// if (rez === s) {
//     rezult = "S <br/>";
// }
// else {
//    rezult = "H";
// }
// }
// document.write(rezult);

//Tris kartus iškritus herbui;

// let sumH =0;
// while (sumH <3 ){
//     rez = rand(0, 1);
//     if (rez === s) {
//         rezult = "S <br/>";
//     }
//     else {
//        rezult = "H <br/>";
//     }
//    if (rez === h) {
//      sumH++
//      }
// }
// document.write(rezult);

//Tris kartus iš eilės iškritus herbui;

let sumH =0;
while (sumH <3 ){
    rez = rand(0, 1);
    if (rez === s) {
        rezult = "S <br/>";
        break;
    }
    else {
       rezult = "H <br/>";
    }
   if (rez === h) {
    sumH++
   }
   else {sumH = 0};
   if (sumH === 3)
   rezult = "3 Herbai";
}
document.write(rezult);
document.write('</div>');
document.write("</div>");
//Kazys ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. 
//Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. 
//Taškų kiekį generuokite funkcija ​rand()​. 
//Žaidimą laimi tas, kas greičiau surenka 222 taškus. 
//Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.
document.write('<div class="row">');
document.write('<div class="container">');
let kazysTaskai = 0;
let petrasTaskai = 0;
rezult = "";

while (kazysTaskai < 222 && petrasTaskai < 222) {
    let kazysRenka = rand(5, 25);
    let petrasRenka = rand(10, 20);

    kazysTaskai += kazysRenka;
    petrasTaskai += petrasRenka;

    if (kazysTaskai >= 222) {
        rezult = "Kazys";
    } else {
        rezult = "Petras";
    }
    }
    document.write('Kazys: ' + kazysTaskai + " taškai;<br/>"); 
    document.write('Petras: ' + petrasTaskai + " taškai;<br/>");
    document.write('Partiją laimėjo: ', rezult);

document.write('</div>');
document.write("</div>");