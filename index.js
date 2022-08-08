import {add, addClassDisplay, delet} from './modules/add.js'
import { DateTime } from './modules/luxon.js';



// Classe NewBook and the constructor
class NewBook {
  // Print the info in to the browser
  static printf(input) {
    document.getElementById('container-book').innerHTML = input.map((items, index) => `
    <div id="cards">
    <p>"${items.title}" by ${items.author} </p>
    <button id='buttonremove${index}' class="buttonRemove" type="submit">Remove</button>
    </div>
    `);
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
    document.getElementById('date').innerHTML =  myDate.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }
}

// Call get date
window.addEventListener('DOMContenLoaded', NewBook.sendDate());
setInterval(NewBook.sendDate, 1000);

window.addEventListener('DOMContenLoaded', NewBook.printf(add()));


// Save info in LocalStorage
// document.querySelector('#bookForm').addEventListener('submit', () => {
//   localStorage.setItem('data', JSON.stringify(collectionBooks));

//   document.querySelector('#input-title').value = '';
//   document.querySelector('#input-author').value = '';
// });




// Call the function to add classes to the main sections
addClassDisplay('addNew');
document.getElementById('add-book').addEventListener('click', () => NewBook.printf(add()));

// Links to changes the windows
document.getElementById('nav-list').addEventListener('click', () => addClassDisplay('list'));
document.getElementById('nav-new').addEventListener('click', () => addClassDisplay('addNew'));
document.getElementById('nav-contact').addEventListener('click', () => addClassDisplay('contact'));

// Match the remove button
const booksContainer = document.getElementById('container-book');
booksContainer.addEventListener('click', (event) => {
  const id = event.target.id;
  const regex = /(?<=buttonremove)\d+$/;
  if(regex.test(id)) {
    const index = id.match(regex)[0];
    NewBook.printf(delet(index));
  }
});