
  // ADD book
  const collectionBooks = [];

  class NewConstructor {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }



  const add = () => {
                                                                                                 console.log('Función llamada')
    const newtitle = document.querySelector('#input-title').value;
    const newauthor = document.querySelector('#input-author').value;
                                                                                              console.log('titulo:', newtitle);
                                                                                              console.log('newauthor:', newtitle);
    // If the title or the author is empty, then don't add the book
    if (newtitle === '' || newauthor === '') {
      return null;
    }
    
    // Create a new Book
    const bookInfo = new NewConstructor(newtitle, newauthor);
    collectionBooks.push(bookInfo);
    return collectionBooks;
  }

export {add}