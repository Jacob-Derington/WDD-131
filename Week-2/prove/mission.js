let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = '#555555'
        document.getElementById('content').style.color = 'white'
        logo.src = 'byui-logo-white.png'
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'white'
        document.getElementById('content').style.color = 'black'
        logo.src = 'byui-logo-blue.webp'
    }
}           
               