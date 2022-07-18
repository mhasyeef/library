let myLibrary = [];

function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(){
  myLibrary.push(kiteRunner)
  myLibrary.push(dune)
  myLibrary.push(got)

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
  for(const books of myLibrary){  
    const newBook = document.createElement('div')
    newBook.classList.add('card');
    shelf.appendChild(newBook);
    
    let arrayPosition = 0;
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

    //remove button
    const deleteCardBtn = document.createElement('button')
    newBook.dataset.title = books.title;  //assigns the title as the book's dataset
    newBook.setAttribute("id", newBook.dataset.title)
    deleteCardBtn.classList.add('delete-card-btn');
    deleteCardBtn.setAttribute("type", "button");
    //deleteCardBtn.setAttribute("id", newBook.dataset.title);
    deleteCardBtn.textContent = `Remove`
    newBook.appendChild(deleteCardBtn);

    deleteCardBtn.addEventListener("click", () => {
      const toRemove = document.querySelector('dataset.title');
      //shelf.remove(toRemove);
      myLibrary.splice(0,1); 
      console.log(myLibrary[0].title);
    })
    
  }
}

const kiteRunner = new Book('Kite Runner', 'Khaled', 23, false);
const dune = new Book('Dune', 'Frank Herbet', 43, true);
const got = new Book('Game Of Thrones', 'George R.R Martin ', 253, false);

//const book = new Book(title, author, pages, read);

addBookToLibrary();
displayBooks();
