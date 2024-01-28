const myLibrary = []

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

function addBookToLibrary() {
    var title = document.getElementsByName("title")[0].value;
    var author = document.getElementsByName("author")[0].value;
    var pages = document.getElementsByName("page number")[0].value;
    var readStatus = document.getElementsByName("read status")[0].value;
    var newBook = new book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    return newBook;
}

var submit = document.getElementById('sidePopUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var newBook = addBookToLibrary();
    console.log(newBook);
});

function openPopup() {
    document.getElementsByClassName("sidePopup")[0].style.width = "40vw";
}

function closePopup() {
    document.getElementsByClassName("sidePopup")[0].style.width = "0";
}
