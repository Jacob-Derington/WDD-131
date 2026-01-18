let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        pageContent.style.color = 'gray'
        pageContent.style.font.color = 'white'
    } else {
        // code for changes to colors and logo
    }
}           
               