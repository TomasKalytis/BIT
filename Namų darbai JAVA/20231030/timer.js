
function addText(){
    console.log('Paspaudimas');
    
    document.querySelector('.rezultatas').textContent = 'Sveiki visi'
}

const box = document.querySelector('.box');

box.addEventListener('click', (e) => {

console.log(e);

const style = getComputedStyle(box);


box.style.height = style.height.slice(0, -2) * 2 + 'px';

box.style.backgroundColor = 'black';
});

document.querySelector('.box2').onclick = () => {
    // document.querySelector('.box2').classList.add('black');
    // document.querySelector('.box2').classList.remove('black');

//     if(document.querySelector('.box2').classList.contains('black')) {
//         document.querySelector('.box2').classList.remove('black');
//    } else {
//         document.querySelector('.box2').classList.add('black');
//    }    
//     }

// kad nerašyti "if" eilučių, naudojame "toggle"
document.querySelector('.box2').classList.toggle('black');


}