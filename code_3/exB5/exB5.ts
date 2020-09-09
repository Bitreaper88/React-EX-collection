import fs from "fs";

let library = [ 
    {
        author: 'David Wallace',
        title:  'Infinite Jest',
        readingStatus: false,
        id: 1,
    },
    {
        author: 'Douglas Hofstadter',
        title:  'Gödel, Escher, Bach',
        readingStatus: true,
        id: 2,
    },
    {
        author: 'Harper Lee',
        title:  'To Kill A Mockingbird', 
        readingStatus: false,
        id: 3,
    },
 ];

 // fuction calls start

 //printBookData(1);
printReadingStatus("Harper Lee", "To Kill A Mockingbird");
addNewBook("Poopy Head", "Da toilet");
printBookData(4);
readBook(4);
printBookData(4);
saveToJSON();
loadFromJSON();
// fuction calls end


function getBook(id: number) {

    for (let key in library) {
        if (library[key].id === id) {
            //console.log (`The book is ${library[key].title}`);
            return library[key];
        }
    }
}

function printBookData(id: number) {
    let book = getBook(id);
    console.log(book?.author);
    console.log(book?.title);
    console.log(book?.readingStatus);
    console.log(book?.id);
}

function printReadingStatus(author: string, title: string){
    for (let key in library) {
        if (library[key].author === author && library[key].title === title) {
            printBookData(library[key].id);
        }
    }
}
function addNewBook(author: string, title: string){
    let keys = Object.keys(library);
    let last: number = parseInt(keys[keys.length-1])+2;
    //console.log("last index: " + last)

    let newEntry = {author: author,
                    title: title,
                    readingStatus: false,
                    id: last};

    library.push(newEntry);
    console.log(library);
}
function readBook(id: number){
    let book = getBook(id);
    if (book) {
        book.readingStatus = true;
     }
}
function saveToJSON() {
    fs.writeFileSync("exB5.json", JSON.stringify(library), "utf8");
    console.log("JSON saved");
}

function loadFromJSON() {
    const newLibrary = JSON.parse(fs.readFileSync("exB5.json", "utf8"));
    console.log("JSON loaded");
    console.log(newLibrary);
}