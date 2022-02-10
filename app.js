let myLibrary = [];

const form = document.getElementById('form');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        console.log(`${this.title} by ${this.author} has ${this.read}`)
    }
};

function handleSubmit(e) {
    const data = new Book(this.title.value, this.author.value, this.pages.value, this.checkbox.value);
    myLibrary.push(data);
    console.log(myLibrary);

    
    e.preventDefault();
}


form.addEventListener('submit', handleSubmit)