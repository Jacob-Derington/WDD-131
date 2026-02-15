
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];
              
const bookList = document.getElementById('Book-list');

articles.forEach(book => {
    const article = document.createElement('article');
    article.classList.add('book');
    article.id = `book-${book.id}`;

    article.innerHTML = `
        <article class="book">
        <section class="left">
        <p class="r-date">${book.date}</p>
        <p class="age">${book.ages}</p>
        <p class="genre">${book.genre}</p>
        <p class="rating"><span>${book.stars}</span></p>
        </section>

        <section class="right">
        <h2>${book.title}</h2>
        <img src="${book.imgSrc}" alt="${book.imgAlt}">
        <p id='desc'>${book.description}</p>
        </section>
        </article>
    `;

    bookList.appendChild(article);
});

function addStars(span) {
    const stars = span.innerText.length;
    span.setAttribute('aria-label', `${stars} out of 5 stars`);
}

// const spans = document.querySelectorAll('article.book p span')

// // spans.forEach(addStars)
// for(let i = 0; i < spans.length; i++){
//     addStars(spans[i]);
// }

const allRatingE = document.querySelectorAll('article.book p span');

allRatingE.forEach((elem) => {
    elem.setAttribute('aria-label', `${elem.innerText.length} out of 5 stars`);
});