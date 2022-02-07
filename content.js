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

const displayBooks = () => {
	bookList.innerHTML = '';
  books.forEach((book) => {
 	const li = document.createElement('li');
	const article = document.createElement('article');
	const title = document.createElement('p');
	const author = document.createElement('p');
	const button = document.createElement('button');
	
	
	title.className = "book_title";
	title.textContent = book.title;
	author.className = "book_author";
	author.textContent = book.author;
	button.className = "remove_book_btn";
	button.textContent = "Remove";
	article.append(title, author, button);
	li.className = "book";
	li.appendChild(article);
	
  bookList.appendChild(li);
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
  displayBooks();
};

document.addEventListener('load', displayBooks);

const removeBtn = document.querySelectorAll('.remove_book_btn');
removeBtn.forEach((btn, index) => {
   btn.addEventListener('click', (event) => {
     removeBook(index);
   });
});
