function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, 
//o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. 
//Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų.
//Paskutinio masyvo paskutinis elementas yra lygus 0

// const pagrindinisKiekis = rand(10, 30);
//     for(let a = 0; a < pagrindinisKiekis; a++) {
//         const masyvas = [];
//         const kiekis = rand(10, 30);
//         console.log(kiekis);
//         for(let i = 0; i < kiekis; i++) {
//             if(i === kiekis - 1) {
//                 //Paskutinis skaicius
//                 const kiekis = rand(10, 20);
//                 masyvas[i] = [];
//                 for(let x = 0; x < kiekis; x++) {
//                     if(x === kiekis - 1) {
//                         masyvas[i][x] = [];
//                         const kiekis = rand(10, 20);
//                         for(let y = 0; y < kiekis; y++) {
//                             if(y === kiekis - 1 && a === pagrindinisKiekis - 1) {
//                                 masyvas[i][x].push(0)
//                             } else {
//                                 masyvas[i][x].push(rand(10, 20));
//                             }
//                         }
//                     } else {
//                         masyvas[i].push(rand(0, 10));
//                     }
//                 }
//             } else {
//                 masyvas.push(rand(0, 10));
//             }
//         }

//         console.log(masyvas);
//     }

    // kitas sprendimo būdas:

    const generateRandomArray = () => {
        const arr = [];
        const length = rand(10, 20);
        for (let i = 0; i < length - 1; i++) {
            arr.push(rand(0, 10));
        }
        const arr1 = generateArrays();
        arr1[arr1.length - 1] = 0;
        arr.push(arr1);
        return arr;
    };
    
    const generateArrays = () => {
        const length = rand(10, 20);
        const arr1 = [];
        for (let i = 0; i < length; i++) {
        arr1.push(rand(0, 10));
        };
        return arr1;
    };
     const repeatArray = () => {
        const count = rand(10, 30);
        const arrays = [];
        for (let i = 0; i < count; i++) {
            arrays.push(generateRandomArray());
            };
            return arrays;
        };    
    
    const randomArray = repeatArray();
console.log(randomArray);