let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
        pageContent.style.fontSize = "1rem";
        pageContent.style.fontStyle = "normal";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
        pageContent.style.fontSize = "3rem";
        pageContent.style.fontStyle = "normal";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
        pageContent.style.fontSize = "1.5rem";
        pageContent.style.fontStyle = "italic";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
        pageContent.style.fontSize = "1rem";
        pageContent.style.content.fontsize = "1.5rem";
        pageContent.style.fontStyle = "normal";
    }
}
