
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  

  let myLibrary = [];

  function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
  
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
  }
  
 
  function displayBooks() {
    const libraryContainer = document.getElementById("library-container");
    libraryContainer.innerHTML = "";
  
    for (let i = 0; i < myLibrary.length; i++) {
      const book = myLibrary[i];
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book-card");
      bookDiv.textContent = `
        Title: ${book.title}
        Author: ${book.author}
        Pages: ${book.pages}
      `;
      
      const removeButton = createRemoveButton(i);
      const readButton = createReadButton(i);
      
      bookDiv.appendChild(removeButton);
      bookDiv.appendChild(readButton);
      libraryContainer.appendChild(bookDiv);
    }
  }
  
 
  const newBookButton = document.getElementById("new-book-btn");
  const formPopup = document.getElementById("form-popup");
  const bookForm = document.getElementById("book-form");
  const closeBtn = document.getElementById("close-btn");

  bookForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (validateForm()) {
      addBookToLibrary();
      displayBooks();
      formPopup.style.display = "none";
      bookForm.reset();
    }
  });
  
  function validateForm() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    
    if (title.trim() === "" || author.trim() === "" || isNaN(pages) || pages <= 0) {
      alert("Please fill in all fields with valid data.");
      return false;
    }
    
    return true;
  }
  
  newBookButton.addEventListener("click", function() {
    formPopup.style.display = "block";
  });
  
  closeBtn.addEventListener("click", function() {
    formPopup.style.display = "none";
    bookForm.reset();
  });
  
  bookForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
    displayBooks();
    formPopup.style.display = "none";
    bookForm.reset();
  });
  
  
  function createRemoveButton(bookIndex) {
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
      removeBookFromLibrary(bookIndex);
      displayBooks();
    });
    return removeButton;
  }
  
  function createReadButton(bookIndex) {
    const readButton = document.createElement("button");
    readButton.textContent = myLibrary[bookIndex].read ? "Read" : "Unread";
    readButton.addEventListener("click", function() {
      toggleReadStatus(bookIndex);
      displayBooks();
    });
    return readButton;
  }
  

  function removeBookFromLibrary(bookIndex) {
    myLibrary.splice(bookIndex, 1);
  }
  

  function toggleReadStatus(bookIndex) {
    myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
  }
  

  displayBooks();
  