
  // ADD book
  let collectionBooks = [];
 
  class NewConstructor {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }

  const add = () => {
  
    if (localStorage.getItem('data')) {
      let books = JSON.parse(localStorage.getItem('data'));
      collectionBooks = books;
    }
    

    const newtitle = document.querySelector('#input-title').value;
    const newauthor = document.querySelector('#input-author').value;

    // If the title or the author is empty, then don't add the book
    if (newtitle === '' || newauthor === '') {
      return collectionBooks;
    }

    console.log('Recarga página', collectionBooks);

    // Create a new Book
    const bookInfo = new NewConstructor(newtitle, newauthor);
    collectionBooks.push(bookInfo);

    localStorage.setItem('data', JSON.stringify(collectionBooks));

    document.querySelector('#input-title').value = '';
    document.querySelector('#input-author').value = '';

    console.log(collectionBooks);

    return collectionBooks;
  }

    const delet = (input) => {
  console.log('Boton de borrar llamado',input);

  // Delet the number by index position
  collectionBooks.splice(input, 1);

  // Upgrade the Local Storage
  localStorage.setItem('data', JSON.stringify(collectionBooks));
  return collectionBooks;
  }

    const addClassDisplay = (input) => {
      switch (input) {
      case 'list':
      document.getElementById('listContainer').style.display = '';
      document.getElementById('formContainer').style.display = 'none';
      document.getElementById('contactContainer').style.display = 'none';

      document.getElementById('nav-list').classList.add('active');
      document.getElementById('nav-new').classList.remove('active');
      document.getElementById('nav-contact').classList.remove('active');
      break;

      case 'addNew':
      document.getElementById('listContainer').style.display = 'none';
      document.getElementById('formContainer').style.display = '';
      document.getElementById('contactContainer').style.display = 'none';

      document.getElementById('nav-list').classList.remove('active');
      document.getElementById('nav-new').classList.add('active');
      document.getElementById('nav-contact').classList.remove('active');
      break;

      case 'contact':
      document.getElementById('listContainer').style.display = 'none';
      document.getElementById('formContainer').style.display = 'none';
      document.getElementById('contactContainer').style.display = '';

      document.getElementById('nav-list').classList.remove('active');
      document.getElementById('nav-new').classList.remove('active');
      document.getElementById('nav-contact').classList.add('active');
      break;

      default:
      break;
    }
  }



export {add, delet, addClassDisplay};