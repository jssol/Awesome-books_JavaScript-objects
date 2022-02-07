const bookList = document.querySelector('.book_list');
const removeBtn = document.querySelectorAll('.remove_book_btn');

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

const displayBooks = () => {
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
};

const addBook = (title, author) => {
  const book = {
    author: author,
    title: title,
  };
  books.push(book);
  displayBooks();
};

const removeBook = (index) => {
  books.splice(index, 1);
};

document.addEventListener('DOMContentLoaded', displayBooks);

// removeBtn.forEach((btn, index) => {
//   console.log(index);
//   console.log(btn);
//   console.log('test');
// });
