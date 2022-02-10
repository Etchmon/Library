let myLibrary = [];

const form = document.getElementById('form');

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
    const data = new Book(this.title.value, this.author.value, this.pages.value, this.checkbox.value);
    myLibrary.push(data);
    console.log(myLibrary);
    displayLibrary();

    e.preventDefault();
}

function displayLibrary() {
    const card = document.createElement("div");
    const cardTitle = document.createElement('h1');
    const cardAuthor = document.createElement('h2');
    const cardPages = document.createElement('span');
    const bookRead = document.createElement('span');

    for (i = 0; i < myLibrary.length; i++) {

        cardTitle.innerHTML = myLibrary[i].title;
        cardAuthor.innerHTML = myLibrary[i].author;
        cardPages.innerHTML = myLibrary[i].pages;
        bookRead.innerHTML = myLibrary[i].read;

        card.setAttribute('class', 'card');
        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(bookRead);

        document.getElementById('display').appendChild(card);

        console.log('hi');
    }
}


form.addEventListener('submit', handleSubmit)