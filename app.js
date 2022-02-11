let myLibrary = [];

const formContainer = document.getElementById('form-container');
const form = document.getElementById('form');
const addBtn = document.getElementById('add-book');
const closeBtn = document.getElementById('close-btn');

form.addEventListener('submit', handleSubmit);
addBtn.addEventListener('click', () => addBook());
closeBtn.addEventListener('click', () => formContainer.className = 'form-container hide-form');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.info = function () {
    return console.log(`${this.title} by ${this.author}, is ${pages} pages, and has ${read}`);
}

function handleSubmit(e) {
    const data = new Book(this.title.value, this.author.value, this.pages.value, this.checkbox.checked);
    myLibrary.push(data);
    console.log(myLibrary);
    formContainer.className = 'form-container hide-form';
    displayLibrary();
    form.reset();

    e.preventDefault();
}


function addBook() {
    formContainer.className = 'form-container';
}

function removeBook() {
    num = this.parentElement.getAttribute('key');

    myLibrary.splice(num);
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
