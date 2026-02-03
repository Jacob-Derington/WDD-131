const allRatingE = document.querySelectorAll('article.movie p span');

allRatingE.forEach((elem) => {
    const rating = elem.innerHTML.length; 
    elem.setAttribute('aria-label', `${rating} out of 5 stars`);
});