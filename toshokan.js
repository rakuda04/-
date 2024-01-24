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
   this.title = title
}

function openPopup() {
    document.getElementsByClassName("sidePopup")[0].style.width = "600px";
}

function closePopup() {
    document.getElementsByClassName("sidePopup")[0].style.width = "0";
}
