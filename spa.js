const bookListSection = document.querySelector('.book_list_section');
const AddbookSection = document.querySelector('.add_book');
const contactSection = document.querySelector('.contact_section');
const timeDisplay = document.querySelector('.time-display');

const listBtn = document.querySelector('.list');
const addNewBtn = document.querySelector('.add_new');
const contactBtn = document.querySelector('.contact');

const setTime = () => {
  const date = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const day = date.getDate();
  let minutes = date.getMinutes();
  const hours = date.getHours();
  let seconds = date.getSeconds();

  if (seconds.toString().length < 2) {
    seconds = `0${seconds}`;
  }
  if (minutes.toString().length < 2) {
    minutes = `0${minutes}`;
  }

  const time = `${month} ${day}th ${year}, ${hours}:${minutes}:${seconds}`;
  timeDisplay.textContent = '';
  timeDisplay.textContent = `${time}`;
};

setInterval(setTime, 1000);

listBtn.addEventListener('click', () => {
  bookListSection.style.display = 'flex';
  AddbookSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addNewBtn.addEventListener('click', () => {
  bookListSection.style.display = 'none';
  AddbookSection.style.display = 'flex';
  contactSection.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  bookListSection.style.display = 'none';
  AddbookSection.style.display = 'none';
  contactSection.style.display = 'flex';
});
