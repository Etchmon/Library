let myLibrary = [];

const formContainer = document.getElementById('form-container');
const form = document.getElementById('form');
const addBtn = document.getElementById('add-book');
const closeBtn = document.getElementById('close-btn');

form.addEventListener('submit', validateForm);
addBtn.addEventListener('click', () => addBook());
closeBtn.addEventListener('click', () => formContainer.className = 'form-container hide-form');

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// };

// Book.prototype.info = function () {
//     return console.log(`${this.title} by ${this.author}, is ${pages} pages, and has ${read}`);
// }

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        console.log(this.title, this.author, this.pages, this.read)
    }
}

function handleSubmit(e) {

    const data = new Book(this.title.value, this.author.value, this.pages.value, this.checkbox.checked);
    myLibrary.push(data);
    console.log(myLibrary);
    formContainer.className = 'form-container hide-form';
    displayLibrary();
    form.reset();
}

function validateForm(e) {
    console.log(form.querySelectorAll('input'));
    const inputs = form.querySelectorAll('input');
    let arr = [];
    inputs.forEach(input => {
        arr.push(input.validity.valid);
        if (input.validity.valid === false) {
            input.className = 'error';
            e.preventDefault();
        } else {
            input.className = '';
        }
    });

    function allGood(input) {
        return input;
    };

    if (!arr.every(allGood)) {
        e.preventDefault();
    } else {
        handleSubmit(e);
    };
}


function addBook() {
    formContainer.className = 'form-container';
}

function removeBook() {
    num = this.parentElement.getAttribute('key');

    myLibrary.splice(num, 1);
    document.getElementById('display').innerHTML = '';
    displayLibrary();
}

function updateStatus() {
    key = this.parentElement.getAttribute('key');

    myLibrary[key].read = !myLibrary[key].read;
    console.log(myLibrary);

    if (myLibrary[key].read == true) {
        this.innerHTML = 'Finished'
    } else {
        this.innerHTML = 'Not Finished'
    }
}

function displayLibrary() {

    const card = document.createElement("div");
    const cardTitle = document.createElement('h1');
    const cardAuthor = document.createElement('h2');
    const cardPages = document.createElement('span');
    const bookRead = document.createElement('button');
    const removeBtn = document.createElement('button');

    removeBtn.innerHTML = "x";
    removeBtn.className = "remove-btn";
    bookRead.className = 'status';

    removeBtn.addEventListener("click", removeBook);
    bookRead.addEventListener('click', updateStatus);


    for (i = 0; i < myLibrary.length; i++) {

        cardTitle.innerHTML = myLibrary[i].title;
        cardAuthor.innerHTML = myLibrary[i].author;
        cardPages.innerHTML = myLibrary[i].pages;

        if (myLibrary[i].read == true) {
            bookRead.innerHTML = 'Finished'
        } else {
            bookRead.innerHTML = 'Not Finished'
        }

        card.setAttribute('class', 'card');
        card.setAttribute('key', [i]);
        card.appendChild(removeBtn);
        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(bookRead);

        document.getElementById('display').appendChild(card);
    }
}
