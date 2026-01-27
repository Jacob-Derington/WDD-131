// const num = 7;

// function add(a,b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// const subtract = (a, b) => {
//     return a - b
// };
// also a valid function type

// const subtract = (a, b) => a - b;
// possible but dont use

// ans = add(3, 6)
// ans = subtract(ans, 2)

// console.log(ans);

window.addEventListener('resize', function() {
    const width = window.innerWidth;
});

const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

console.log(nav)
console.log(btn);

btn.addEventListener('click', function(){
    console.log('button clicked');
    btn.classList.toggle('open');
});

window.addEventListener('resize', function() {
    const width = window.innerWidth;
    if (width >= 700) {
        btn.classList.remove('open');
    }
});

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 700) {
        nav.classList.remove('active');
    }
});