function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), 
// kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
const masyvas = [];
for (let i = 0; i < 30; i++) {
    const atsitiktinisSkaicius = rand(5, 25);
    masyvas.push(atsitiktinisSkaicius);
}
console.log(masyvas);

// Naudodamiesi 1 uždavinio masyvu:
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
let daugiauUz10 = 0;
for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 10) {
        daugiauUz10++;
    }
}
console.log(`Masyve yra ${daugiauUz10} reikšmių didesnių už 10.`);

// Raskite didžiausią masyvo reikšmę ir jos indeksą;
let didziausiaReiksme = masyvas[0];
let didziausiosReiksmesIndeksas = 0;
for (let i = 1; i < masyvas.length; i++) {
    if (masyvas[i] > didziausiaReiksme) {
        didziausiaReiksme = masyvas[i];
        didziausiosReiksmesIndeksas = i;
    }
}
console.log(`Didžiausia reikšmė yra ${didziausiaReiksme} ir ji yra ${didziausiosReiksmesIndeksas}-tame masyvo indekse.`);

// Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
let suma = 0;
for (let i = 0; i < masyvas.length; i += 2) {
    suma += masyvas[i];
}
console.log(`Visų porinių indeksų reikšmių suma yra ${suma}.`);

// Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
const naujasMasyvas = [];
for (let i = 0; i < masyvas.length; i++) {
    naujasMasyvas.push(masyvas[i] - i);
}
console.log(naujasMasyvas);

// Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

// Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
// Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
// Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
