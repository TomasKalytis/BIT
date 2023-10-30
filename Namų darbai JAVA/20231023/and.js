function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Parašykite funkciją, kurios argumentas būtų tekstas, 
//kuris yra atspausdinamas su console.log;
const firstTask = function(text){

}
console.log("Bet koks tekstas");

//Parašykite funkciją su dviem argumentais, 
//pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log, 
//o antrasis kiek kartų spausdinimas atliekamas. 
//Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;

const secondTask = function(text1, text1num){
    const repeatedText = text1.repeat(text1num);
    return `Kartojamas tekstas: ${repeatedText}`;
}
console.log(secondTask('labas', 5));

//Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)

const fourthTask = function(num){
    let sum = 0;
    for (let i = 2; i <= num; i++){
        if (num % i === 0 && i !== num) {
            sum++;
        }
    }
        return sum;
}
const num = 21;
const rezult = fourthTask(num);
console.log(`Skaičius ${num} dalijasi be liekanos su ${rezult} sveikaisiais skaičiais, išskyrus 1'ą ir patį save.`);

//Sugeneruokite masyvą iš 100 elementų, 
//kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. 
//Išrūšiuokite masyvą pagal daliklių be liekanos kiekį 
//mažėjimo tvarka, 
//panaudodami ketvirto uždavinio funkciją.

// PATIKRINTI IR KAIP PARAŠYTI PAPRASIČIAU?

// const fifthTask = function(from, to, limit){
//     const ranNumbersMasyvas = [];
//     for (let i = 0; i < limit; i++){
//     const randoNumber = rand(from, to);
//         ranNumbersMasyvas.push(randoNumber);
//         }
//         ranNumbersMasyvas.sort((a, b)=> a -b);
//     ranNumbersMasyvas.sort((a, b) =>{
//         const countA = count(a);
//         const countB = count(b);
//         return countA - countB;
//     });
//     return ranNumbersMasyvas;
//     }
//     const count = function(number){
//         let sum = 0;
//         for (let i = 2; i <= number; i++){
//             if (number % i === 0) {
//                 sum++;
//             }
//         }
//             return sum;
//     }
//     const realMasyvas = fifthTask(33, 77, 100);
//     console.log (realMasyvas);
    const fifthTask = function(from, to, limit){
        const ranNumbersMasyvas = [];
        for (let i = 0; i < limit; i++){
        const randoNumber = rand(from, to);
            ranNumbersMasyvas.push(randoNumber);
            };
        return ranNumbersMasyvas;
        }
        const count = function(number){
            let sum = 0;
            for (let i = 2; i <= number; i++){
                if (number % i === 0) {
                    sum += i + ' ';// t.y. tas pats (sum = i + sum)
                }
                return sum;
            }
            number.sort((a, b)=> a -b);
        number.sort((a, b) =>{
            const countA = count(a);
            const countB = count(b);
            return countA - countB;
        });
                
        }
        const realMasyvas = fifthTask(10, 30, 20);
        console.log (realMasyvas);

// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. 
// Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.

const sixthTask = function(from, to, limit){
    const ranNumbersMasyvas = [];
    for (let i = 0; i < limit; i++){
    const randoNumber = rand(from, to);
        ranNumbersMasyvas.push(randoNumber);
        }
    
    const count1 = function(number){
        if (number < 2){
            return false;
        }
        for (let i = 2; i * i <= number; i++){
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = ranNumbersMasyvas.length - 1; i >= 0; i--) {
        if (count1(ranNumbersMasyvas[i])) {
            ranNumbersMasyvas.splice(i, 1);
        }
    }
    return ranNumbersMasyvas;
}

    const realMasyvas1 = sixthTask(333, 777, 100);
    console.log (realMasyvas1);

    //Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, 
    //o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. 
    //Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų.
    //Paskutinio masyvo paskutinis elementas yra lygus 0

    //Komplikuotas būdas
    const pagrindinisKiekis = rand(10, 30);
    for(let a = 0; a < pagrindinisKiekis; a++) {
        const masyvas = [];
        const kiekis = rand(10, 20);
        console.log(kiekis);

        for(let i = 0; i < kiekis; i++) {
            if(i === kiekis - 1) {
                //Paskutinis skaicius
                const kiekis = rand(10, 20);
                masyvas[i] = [];
                for(let x = 0; x < kiekis; x++) {
                    if(x === kiekis - 1) {
                        masyvas[i][x] = [];
                        const kiekis = rand(10, 20);
                        for(let y = 0; y < kiekis; y++) {
                            if(y === kiekis - 1 && a === pagrindinisKiekis - 1) {
                                masyvas[i][x].push(0)
                            } else {
                                masyvas[i][x].push(rand(10, 20));
                            }
                        }
                    } else {
                        masyvas[i].push(rand(0, 10));
                    }
                }
            } else {
                masyvas.push(rand(0, 10));
            }
        }

        console.log(masyvas);
    }
        
    //Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. 
    //Skaičiuoti reikia visuose masyvuose ir submasyvuose.
    
    // const eighthTask = function(){
    // }

    //Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. 
    //Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, 
    //prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. 
    //Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. 
    //Kartokite, kol sąlyga nereikalaus pridėti elemento. 

    const ninthTask = ranNumbersMasyvas = [];
    for (i = 0; i < 3; i++){
    ranNumbersMasyvas.push(rand(1, 33));
    }
    
   console.log (ranNumbersMasyvas);



    // const fourthTask = function(num){
    //     let sum = 0;
    //     for (let i = 2; i <= num; i++){
    //         if (num % i === 0 && i !== num) {
    //             sum++;
    //         }
    //     }
    //         return sum;
    // }
    // const num = 15;
    // const rezult = fourthTask(num);
    // console.log(`Skaičius ${num} dalijasi be liekanos su ${rezult} sveikaisiais skaičiais, išskyrus 1'ą ir patį save.`);

    // let arrayLenght = rand(10, 20);
    //   let repeat = rand(10, 30);
    //   let test = [20, 30, 40];
    //   console.log(test.filter((index) => index !== test.slice(-1)));
    //   console.log(test.slice(0, -1));
    //   const differentArrays = (arrayLenght, repeat) => {
    //     difarray2 = [];
    //     array = [];
    //     for (i = 0; i < repeat; i++) {
    //       difarray2[i] = [];
    //       if (i < repeat - 1) {
    //         for (y = 0; y < arrayLenght; y++) {
    //           difarray2[i][y] = rand(0, 10);
    //         }
    //       } else
    //         for (y = 0; y < arrayLenght; y++) {
    //           if (y < arrayLenght - 1) {
    //             difarray2[i][y] = rand(0, 10);
    //           } else difarray2[i][y] = 0;
    //         }
    //     }
    //     return difarray2;
    //   };
 
    //   array = differentArrays(arrayLenght, repeat);
    //   console.log(array);
