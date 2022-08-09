var bookName,bookAuthor,bookCost
let setbookName = E =>{bookName = E.target.value}
let setbookAuthor = E =>{bookAuthor = E.target.value}
let setbookCost = E =>{bookCost = E.target.value}

let MainDiv = document.getElementById('Main-Div')
let AddBook = document.getElementById('Add-Book')
let RemoveBook = document.getElementById('Remove-Book')
let EditBook = document.getElementById('Edit-Book')
let ListOfBooks = document.getElementById('List-Of-Books')
let Add = document.getElementById('Add')
let Remove = document.getElementById('Remove')
let Edit = document.getElementById('Edit')
let List = document.getElementById('List')
let bookList = []

let AddBookFunction = ()=>{
    RemoveBook.style.marginRight = "10px"
    EditBook.style.marginRight = "10px"
    ListOfBooks.style.marginRight = "10px"
    AddBook.style.marginRight = "0px"
    MainDiv.style.backgroundColor = "rgb(60, 0, 116)"
    MainDiv.innerHTML =
    "<fieldset>"+
       "<legend>Add Book</legend>"+
            "<b> Name of Book: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" placeholder=\"Enter Book Name\" onchange=\"setbookName(event)\" class=\"inputs\"><br><br>"+
            "<b> Author of Book: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" placeholder=\"Enter Book Author\" onchange=\"setbookAuthor(event)\" class=\"inputs\"><br><br>"+
            "<b> Cost of Book: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" step=\".5\" placeholder=\"Enter Book Cost\" onchange=\"setbookCost(event)\" class=\"inputs\"><br><br>"+
            "<button id=\"Add\" onclick=\"addBook()\">Add</button>"+
    "</fieldset>"
}
let addBook = () => {
    if(bookName === undefined ||bookAuthor === undefined ||bookCost === undefined)
        alert(`All fields are mandatory`)
    else{
        let bookInfo = {
            name: bookName,
            author: bookAuthor,
            cost: bookCost,
        }
        bookList.push(bookInfo)
        alert(`Book ${bookName} is added in List`)
        console.log(bookList)
        let inputs = document.querySelectorAll('.inputs')
        for(i in inputs)
            inputs[i].value = ''
        bookName = bookAuthor = bookCost = undefined
    }
}

let RemoveBookFunction = ()=>{
    AddBook.style.marginRight = "10px"
    EditBook.style.marginRight = "10px"
    ListOfBooks.style.marginRight = "10px"
    RemoveBook.style.marginRight = "0px"
    MainDiv.style.backgroundColor = "rgb(78, 3, 148)"
    MainDiv.innerHTML =
    "<fieldset>"+
        "<legend>Remove Book</legend>"+
            "<b> Name of Book: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" placeholder=\"Enter Book Name\" onchange=\"setbookName(event)\" class=\"inputs\"><br><br>"+
            "<button id=\"Remove\" onclick=\"removeBook()\">Remove</button>"+
    "</fieldset>"
}
let removeBook = () => {
    let temp = bookList.filter(book=>book.name!==bookName)
    if(temp.length!==bookList.length){
        bookList = temp
        alert(`Book named ${bookName} is removed from List`)
    }
    else
        alert(`Book named ${bookName} is not available in List`)
    let inputs = document.querySelectorAll('.inputs')
    for(i in inputs)
        inputs[i].value = ''
    bookName = bookAuthor = bookCost = undefined  
}

let EditBookFunction = ()=>{
    AddBook.style.marginRight = "10px"
    RemoveBook.style.marginRight = "10px"
    ListOfBooks.style.marginRight = "10px"
    EditBook.style.marginRight = "0px"
    MainDiv.style.backgroundColor = "rgb(104, 0, 201)"
    MainDiv.innerHTML =
    "<fieldset>"+
        "<legend>Edit Book</legend>"+
            "<b> Name of Book: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" placeholder=\"Enter Book Name\" onchange=\"setbookName(event)\" class=\"inputs\"><br><br>"+
            "<b> Cost of Book: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" step=\".5\" placeholder=\"Enter Book Cost\" onchange=\"setbookCost(event)\" class=\"inputs\"><br><br>"+
            "<button id=\"Edit\" onclick=\"editBook()\">Edit</button>"+
    "</fieldset>"
}
let editBook = () =>{
    let flag = false
    for(i in bookList){
        if(bookList[i].name === bookName){
            bookList[i].cost = bookCost
            flag = true
            break
        }
    }
    if(flag)
        alert(`New Cost of book ${bookName} is Rs.${bookCost}`)
    else
        alert(`Book ${bookName} is not available in List` )
    let inputs = document.querySelectorAll('.inputs')
    for(i in inputs)
        inputs[i].value = ''
    bookName = bookAuthor = bookCost = undefined
}

let ListOfBooksFunction = ()=>{
    AddBook.style.marginRight = "10px"
    EditBook.style.marginRight = "10px"
    RemoveBook.style.marginRight = "10px"
    ListOfBooks.style.marginRight = "0px"
    MainDiv.style.backgroundColor = "rgb(126, 0, 245)"
    if(bookList.length === 0){
        MainDiv.innerHTML =
        "<fieldset>"+
            "<legend>List of Books</legend>"+
            "<center>There is no any Book in this List</center>"+
        "</fieldset>"
    }
    else{
        let list = ""
        for(i in bookList){
            list+= `<tr><td>&nbsp;${+i+1}&nbsp;</td><td>&nbsp;${bookList[i].name}&nbsp;</td><td>&nbsp;${bookList[i].author}&nbsp;</td><td>&nbsp;Rs.${bookList[i].cost}/-&nbsp;</td></tr>`
        }
        MainDiv.innerHTML =
        "<fieldset>"+
            "<legend>List of Books</legend>"+
            "<table>"+
                "<thead>"+
                    "<tr><th>Id</th><th>Name</th><th>Aurther</th><th>Cost</th></tr>"+
                "</thead>"+
                "<tbody>"+list+"</tbody>"+
            "</table>"+
        "</fieldset>"
    }
}
