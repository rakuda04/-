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

    var titleRegex = /^[a-zA-Z0-9\s.,!?'"()]+$/;
    var authorRegex = /^[a-zA-Z\s.,'-]+$/;
    var pagesRegex = /^\d+$/;

    if (!titleRegex.test(title)) {
        alert("Title must start with a Capital letter and only contain letters, numbers, and punctuation");
        return;
    }

    if (!authorRegex.test(author)) {
        alert("author must start with a Capital letter and only contain letters");
        return;
    }

    if (!pagesRegex.test(pages)) {
        alert("should be a positive integer");
        return;
    }

    var newBook = new book(title, author, pages, readStatus);
    myLibrary.push(newBook);

    
    var bookDiv = document.createElement('div');
    bookDiv.className = 'bookCard';

    
    bookDiv.innerHTML = `
        <div class="bookCardHeader">
            <div class="bookCardHeaderLeft"> 
                <div class="bookCardTitle">${title}</div>
                <div class="bookCardSubtitle">${author}</div>
            </div>
            <div class="bookCardHeaderRight">
                <h4>${pages}</h4>
            </div>
        </div>
        <div class="h-divider"></div>
        <div class="bookCardBody">
            <button type="button" onclick="myFunction()">読んだのか</button>
            <button type="button" onclick="myFunction()">削除</button>
        </div>
        <div class="h-divider"></div>
        <div class="bookCardFooter">${readStatus}</div>
    `;

    
    document.body.appendChild(bookDiv);
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
