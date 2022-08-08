import {add} from './modules/add.js'
import {addClassDisplay} from './modules/addClassDisplay.js'


// Classe NewBook and the constructor
let collectionBooks;
class NewBook {


  // DELET book
  static delet(input) {
    // Delet the number by index position
    collectionBooks.splice(input, 1);

    // Upgrade the DOM
    NewBook.printf(collectionBooks);

    // Upgrade the Local Storage
    localStorage.setItem('data', JSON.stringify(collectionBooks));

    return collectionBooks;
  }

  // Print the info in to the browser
  static printf(input) {
    document.getElementById('container-book').innerHTML = input.map((items, index) => `
    <div id="cards">
    <p>"${items.title}" by ${items.author} </p>
    <button class="buttonRemove" onclick="NewBook.delet(${index})">Remove</button>
    </div>
    `).join('');
  }

  static getBooks() {
    let books = [];
    if (localStorage.getItem('data')) {
      books = JSON.parse(localStorage.getItem('data'));
    }
    return books;
  }

  // Get date
  static sendDate() {
    const hora = Array.from(Date());
    let ordinal;

    const dayWeek = hora.splice(0, 3).join(''); // día de la semana
    const monthAndDay = hora.splice(1, 6).join(''); // Mes y día
    const year = hora.splice(2, 4).join(''); // Año
    const hour = hora.splice(3, 8).join(''); // Hora, minutos y segundos

    if (monthAndDay.substring(4, 6) === 1 || monthAndDay.substring(4, 6) === 21) {
      ordinal = 'st';
    } if (monthAndDay.substring(4, 6) === 2 || monthAndDay.substring(4, 6) === 22) {
      ordinal = 'nd';
    } if (monthAndDay.substring(4, 6) <= 3 || monthAndDay.substring(4, 6) === 23) {
      ordinal = 'rd';
    }

    if (monthAndDay.substring(4, 6) <= 20 && monthAndDay.substring(4, 6) > 3) {
      ordinal = 'th';
    } if (monthAndDay.substring(4, 6) >= 24 && monthAndDay.substring(4, 6) <= 31) {
      ordinal = 'th';
    }
    document.getElementById('date').innerHTML = `${dayWeek}, ${monthAndDay}${ordinal} ${year}, ${hour}`;
  }


}




// Call get date
window.addEventListener('DOMContenLoaded', NewBook.sendDate());
setInterval(NewBook.sendDate, 1000);

// Get information from LocalStorage in to browser
collectionBooks = NewBook.getBooks();
NewBook.printf(collectionBooks);

// Save info in LocalStorage
document.querySelector('#bookForm').addEventListener('submit', () => {
  localStorage.setItem('data', JSON.stringify(collectionBooks));

  // Clean inputs info
  document.querySelector('#input-title').value = '';
  document.querySelector('#input-author').value = '';
});



// Call the function to add classes to the main sections
addClassDisplay('addNew');



document.getElementById('add-book').addEventListener('click', () => {
  NewBook.printf(add())
});


// Links para cambiar pantallas
document.getElementById('nav-list').addEventListener('click', () => addClassDisplay('list'));
document.getElementById('nav-new').addEventListener('click', () => addClassDisplay('addNew'));
document.getElementById('nav-contact').addEventListener('click', () => addClassDisplay('contact'));