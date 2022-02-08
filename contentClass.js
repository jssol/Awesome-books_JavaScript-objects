const bookList = document.querySelector('.book_list');
const addBtn = document.querySelector('.add_book_btn');

const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');

class Book {
  constructor() {
    this.books = [];
  }

  setLocalStore() {
    localStorage.setItem('bookStore', JSON.stringify(this.books));
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.setLocalStore(this.books);
  }

  addBook(title, author) {
    const book = {
      author,
      title,
    };
    this.books.push(book);
    this.displayBooks();
    this.setLocalStore(this.books);
  }

  displayBooks() {
    bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      const article = document.createElement('article');
      const description = document.createElement('p');
      const button = document.createElement('button');

      description.className = 'book_info';
      description.textContent = `"${book.title}" by ${book.author}`;
      button.className = 'remove_book_btn';
      button.textContent = 'Remove';

      article.append(description, button);
      li.className = 'book';
      li.appendChild(article);

      bookList.appendChild(li);

      button.addEventListener('click', () => {
        this.removeBook(index);
        this.displayBooks();
      });
    });
  }
}

const booksLib = new Book();

addBtn.addEventListener('click', (event) => {
  if (titleInput.value && authorInput.value) {
    event.preventDefault();
    booksLib.addBook(titleInput.value, authorInput.value);
    titleInput.value = '';
    authorInput.value = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('bookStore')) {
    booksLib.books = JSON.parse(localStorage.getItem('bookStore'));
    booksLib.displayBooks();
  } else if (booksLib.books) {
    booksLib.displayBooks();
  }
});
