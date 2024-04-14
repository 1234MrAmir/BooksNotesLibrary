console.log('This coding is using prototype ');

//todos
// store all the data to th localstorage.
//Give another columns an option to delete the book.
// Add a scroll bar to thr view.

// constructor
function book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display
function display() {

}

// addding prototype in display constructor
display.prototype.add = function (Book) {
    // console.log('You have added succcessfully');
    let tableBody = document.getElementById('tablebody');
    let UiString = ` <tr>
                       <td>${Book.name}</td>
                        <td>${Book.author}</td>
                        <td>${Book.type}}</td>
                    </tr>  
    `
    tableBody.innerHTML += UiString;
}

// implement the clear function
display.prototype.clear = function () {
    let laibraryForm = document.getElementById('laibraryForm');
    laibraryForm.
        reset();
}

// implement the Validate function
display.prototype.validate = function (Book) {
    if (Book.name.length <= 2 || Book.author.length <= 2) {
        return false
    }
    else {
        return true
    }
}

// implement the show function
display.prototype.show = function (type, displaymesssage) {
    let messagee = document.getElementById('message');
    messagee.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message: </strong> ${displaymesssage}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`
    setTimeout(() => {
        messagee.innerHTML = '';
    }, 10000);
}

// event listner 
let laibraryForm = document.getElementById('laibraryForm');
laibraryForm.addEventListener('submit', laibraryFormSubmit);

function laibraryFormSubmit(e) {

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    // fiction, programming, cooking
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    
    //constructor using new
    let Book = new book(name, author, type);
    // console.log('you have submited a form');

    // console.log(Book);
    let Display = new display();

    if (Display.validate(Book)) {
        Display.add(Book);
        Display.clear();
        Display.show('success', 'Your book has been successfully added');
    }
    else {
        // show error to the user
        Display.show('danger', `Sorry you can't add this book`);
    }

    // when we submit a form than default behaviour form is form reload automnatically  so to stop this reloading by default we use preventDefault()
    e.preventDefault();
}