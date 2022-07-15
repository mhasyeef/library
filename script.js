let myLibrary = [];

function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function(){
    return `${title} by ${author}, ${pages} pages, ${read}`
  }
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


const container = document.querySelector('.card-container');

// function displayBooksSpare(){
//   for(let i = 0; i < myLibrary.length; i++){
//     const newCard = document.createElement('div')
//     newCard.classList.add('card');
//     container.appendChild(newCard);

//     let arrayPosition = -1;
//     arrayPosition++;
//     newCard.dataset.arrayPtn = arrayPosition;
//     console.log(newCard.dataset.arrayPtn);

    

//   }
// }

//displayBooksSpare();

function displayBooks(){
  for(const books of myLibrary){  
    const newCard = document.createElement('div')
    newCard.classList.add('card');
    container.appendChild(newCard);

    newCard.dataset.title = books.title;  //assigns the title as the card's dataset
    let arrayPosition = 0;
    arrayPosition += 1;
    newCard.dataset.arrayPtn = arrayPosition;
    console.log(books);
    console.log(newCard.dataset.arrayPtn);

    // const iterator = myLibrary.entries();
    // console.log(iterator.next().value);
    // console.log(iterator.next().value);
    // console.log(iterator.next().value);
    

    const titleAuthor = document.createElement('p');
    newCard.appendChild(titleAuthor)
    titleAuthor.textContent = `${books.title} by ${books.author}`

    const pages = document.createElement('p');
    newCard.appendChild(pages)
    pages.textContent = `Pages: ${books.pages}`

    const read = document.createElement('p');
    newCard.appendChild(read)
    read.textContent = `Read: ${books.read}`

    const deleteCardBtn = document.createElement('button')
    deleteCardBtn.classList.add('delete-card-btn');
    deleteCardBtn.setAttribute("type", "button");
    deleteCardBtn.setAttribute("id", newCard.dataset.title);
    deleteCardBtn.textContent = `Remove`
    newCard.appendChild(deleteCardBtn);
    

    //newCard.textContent = `${books.title} by ${books.author}, Pages: ${books.pages}, Read: ${books.read}`;
  }
}

function removeBook(){
  document.querySelector('.delete-card-btn')
  myLibrary.splice(0,1);  //at position 0, remove 1 item
}

const kiteRunner = new Book('Kite Runner', 'Khaled', 23, false);
const dune = new Book('Dune', 'Frank Herbet', 43, true);
const got = new Book('Game Of Thrones', 'George R.R Martin ', 253, false);

addBookToLibrary();
displayBooks();

console.log(kiteRunner.info());
console.log(myLibrary);