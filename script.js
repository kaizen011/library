// Step 2: Create the Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  // Step 3: Create the array to store books
  let myLibrary = [];
  
  // Step 4: Implement the addBookToLibrary function
  function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
  
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
  }
  
  // Step 5: Display books on the page
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
  
  // Step 6: Add a "NEW BOOK" button and form
  const newBookButton = document.getElementById("new-book-btn");
  const formPopup = document.getElementById("form-popup");
  const bookForm = document.getElementById("book-form");
  const closeBtn = document.getElementById("close-btn");
  
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
  
  // Step 8: Add buttons to remove a book and toggle read status
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
  
  // Function to remove a book from the library
  function removeBookFromLibrary(bookIndex) {
    myLibrary.splice(bookIndex, 1);
  }
  
  // Function to toggle the read status of a book
  function toggleReadStatus(bookIndex) {
    myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
  }
  
  // Step 7: Call displayBooks initially to display any existing books in the library
  displayBooks();
  