import { add, addClassDisplay, delet } from './modules/add.js';
import { DateTime } from './modules/luxon.js';

addClassDisplay('addNew');

// Classe NewBook and the constructor
class NewBook {
  // Print the info in to the browser
  static printf(input) {
    document.getElementById('container-book').innerHTML = input.map((items, index) => `<div id="cards">
    <p>"${items.title}" by ${items.author} </p>
    <button id='buttonremove${index}' class="buttonRemove" type="submit">Remove</button>
    </div>`).join('');
  }

  // static getBooks() {
  //   let books = [];
  //   if (localStorage.getItem('data')) {
  //     books = JSON.parse(localStorage.getItem('data'));
  //   }
  //   return books;
  // }

  // Get date
  static sendDate() {
    const myDate = DateTime.now();
    document.getElementById('date').innerHTML = myDate.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }
}

window.addEventListener('DOMContenLoaded', NewBook.printf(add()));
window.addEventListener('DOMContenLoaded', NewBook.sendDate());
setInterval(NewBook.sendDate, 1000);

document.getElementById('add-book').addEventListener('click', () => NewBook.printf(add()));
document.getElementById('nav-list').addEventListener('click', () => addClassDisplay('list'));
document.getElementById('nav-new').addEventListener('click', () => addClassDisplay('addNew'));
document.getElementById('nav-contact').addEventListener('click', () => addClassDisplay('contact'));
const booksContainer = document.getElementById('container-book');
booksContainer.addEventListener('click', (event) => {
  const { id } = event.target;
  const regex = /(?<=buttonremove)\d+$/;
  if (regex.test(id)) {
    const index = id.match(regex)[0];
    NewBook.printf(delet(index));
  }
});