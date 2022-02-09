const bookListSection = document.querySelector('.book_list_section');
const AddbookSection = document.querySelector('.add_book');
const contactSection = document.querySelector('.contact_section');

const listBtn = document.querySelector('.list');
const addNewBtn = document.querySelector('.add_new');
const contactBtn = document.querySelector('.contact');

listBtn.addEventListener('click', () => {
  bookList.style.display = 'block';
  AddbookSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addNewBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  AddbookSection.style.display = 'flex';
  contactSection.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  AddbookSection.style.display = 'none';
  contactSection.style.display = 'flex';
});
