let myLibrary = [];

class Book{
  constructor(id, title, author, pages, read) {
    this.id = id;
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
}

function addBookToLibrary(){
  myLibrary.push(kiteRunner)
  myLibrary.push(dune)
  myLibrary.push(got)
  //myLibrary.push(got1)

}

const addBooks = document.querySelector('#add-btn')
addBooks.addEventListener('click', () =>{
  openForm();
  hideBtn();
})
const close = document.querySelector('#close')
close.addEventListener('click', () =>{
  closeForm();
  showBtn()
})

popupAdd = document.querySelector('#popupForm');

function openForm(){
  popupAdd.style.display = "block";
}
function hideBtn(){
  addBooks.style.display = "none";
}
function showBtn(){
  addBooks.style.display = "block";
}
function closeForm(){
  popupAdd.style.display = "none";
}

const shelf = document.querySelector('.card-container');

function displayBooks(){
  let arrayPosition = 0;
  for(const books of myLibrary){  
    const newBook = document.createElement('div')
    newBook.classList.add('card');
    shelf.appendChild(newBook);
    
    arrayPosition += 1;
    newBook.dataset.arrayPtn = arrayPosition;
    console.log(`${books.title} ${newBook.dataset.arrayPtn}`);

    const titleAuthor = document.createElement('p');
    newBook.appendChild(titleAuthor)
    titleAuthor.textContent = `${books.title} by ${books.author}`

    const pages = document.createElement('p');
    newBook.appendChild(pages)
    pages.textContent = `Pages: ${books.pages}`

    const read = document.createElement('p');
    newBook.appendChild(read)
    read.textContent = `Read: ${books.read}`

    //to toggle read status
    const toggleReadBtn = document.createElement('label');
    read.appendChild(toggleReadBtn);
    toggleReadBtn.classList.add('switch');
    const input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    const span = document.createElement('span');
    span.classList.add('slider');
    newBook.appendChild(toggleReadBtn);
    toggleReadBtn.appendChild(input);
    toggleReadBtn.appendChild(span);

    span.addEventListener("click", () => {
      if(books.read === true) {
        books.read = false;
        read.textContent = `Read: ${books.read}`
      } else {
        books.read = true;
        read.textContent = `Read: ${books.read}`
      }
    })

    //remove button
    const deleteCardBtn = document.createElement('button')
    newBook.dataset.arrayPtn = arrayPosition;
    deleteCardBtn.classList.add('delete-card-btn');
    deleteCardBtn.setAttribute("type", "button");
    deleteCardBtn.setAttribute("id", arrayPosition); //assigning of dataset to deleteCardBtn id
    deleteCardBtn.textContent = `Remove`
    newBook.appendChild(deleteCardBtn);

    //deleting of books
    deleteCardBtn.addEventListener("click", () => {
      deleteCardBtn.parentNode.remove();
      myLibrary.splice((deleteCardBtn.id - 1),1); 
    })
    
  }
}

const kiteRunner = new Book('1', 'Kite Runner', 'Khaled', 23, false);
const dune = new Book('2', 'Dune', 'Frank Herbet', 43, true);
const got = new Book('3','Game Of Thrones', 'George R.R Martin ', 253, false);
const got1 = new Book('3','Game Of Thrones', 'George R.R Martin ', 253, false);

//const book = new Book(title, author, pages, read);

addBookToLibrary();
displayBooks();
