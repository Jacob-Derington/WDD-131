const allRatingE = document.querySelectorAll('article.movie p span');

allRatingE.forEach((elem) => {
    const rating = elem.innerText.length; 
    elem.setAttribute('aria-label', `${rating} out of 5 stars`);
});

// function addStars(span) {
//     const stars = span.innerText.length;
//     span.setAttribute('aria-label', `${stars} out of 5 stars`);
// }

// const spans = document.querySelectorAll('article.movie p span')

// // spans.forEach(addStars)
// for(let i = 0; i < spans.length; i++){
//     addStars(spans[i]);
// }