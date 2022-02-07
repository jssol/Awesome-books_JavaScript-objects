const bookList = document.querySelector('.book_list');

const books = [
  {
    author: 'ipsum',
    title: 'Testyy',
  },
  {
    author: 'lorem',
    title: 'Testeroo',
  },
];

function displayBooks() {
  books.forEach((book) => {
    bookList.innerHTML += `
		<article class="book">
        <p class="book_title">${book.title}</p>
        <p class="book_author">${book.author}</p>
        <button class="remove_book_btn" type="button">Remove</button>
        <hr />
    </article>
		`;
  });
}

document.addEventListener('DOMContentLoaded', displayBooks);
