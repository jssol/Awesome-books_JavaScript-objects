const bookList = document.querySelector('.book_list');
const addBtn = document.querySelector('.add_book_btn');

const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');

let books = [
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
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const li = document.createElement('li');
    const article = document.createElement('article');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const button = document.createElement('button');

    title.className = 'book_title';
    title.textContent = book.title;
    author.className = 'book_author';
    author.textContent = book.author;
    button.className = 'remove_book_btn';
    button.textContent = 'Remove';

    article.append(title, author, button);
    li.className = 'book';
    li.appendChild(article);

    bookList.appendChild(li);

    button.addEventListener('click', () => {
      removeBook(index);
    });
  });
};

const setLocalStore = (books) => {
  const bookStore = localStorage.setItem('bookStore', JSON.stringify(books));
};

const addBook = (title, author) => {
  const book = {
    author,
    title,
  };
  books.push(book);
  displayBooks();
  setLocalStore(books);
};

const removeBook = (index) => {
  books.splice(index, 1);
  displayBooks();
  setLocalStore(books);
};

addBtn.addEventListener('click', () => {
  addBook(titleInput.value, authorInput.value);
  titleInput.value = '';
  authorInput.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('bookStore')) {
    books = JSON.parse(localStorage.getItem('bookStore'));
    displayBooks();
  }
});
