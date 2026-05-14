class Book {
  title
  author
  pages
  isAvailable = true

  constructor(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
  }

  //mark book as borrowed
  borrow() {
    this.isAvailable = false
  }

  //mark book as returned
  returnBook() {
    this.isAvailable = true
  }

  //return formatted book info string
  getInfo() {
    return `${this.title} by ${this.author} (${this.pages})`
  }

  //check if book exceeds 300 pages
  isLongBook() {
    return this.pages > 300
  }
}

let count = 0
let book1 = new Book('Harry potter', 'J.R.R', 310)
let book2 = new Book('ORV', 'KA', 3600)
let book3 = new Book('TBATE', 'TurtleMe', 2500)
let book4 = new Book('RI', 'CA', 280)
let book5 = new Book('LOTM', 'CA2', 3000)

//display info of all books
console.log(book1.getInfo())
console.log(book2.getInfo())
console.log(book3.getInfo())
console.log(book4.getInfo())
console.log(book5.getInfo())
console.log()

//borrow two books and log their availability
book4.borrow()
console.log('Book 4 status:', book4.isAvailable)
book5.borrow()
console.log('Book 5 status:', book5.isAvailable)
console.log()

//return book5 and log updated status
book5.returnBook()
console.log('Book 5 status:', book5.isAvailable)
console.log()

const Books = [book1, book2, book3, book4, book5]

//count books with more than 300 pages
for (let book of Books) {
  if (book.isLongBook()) count++
}
console.log('Count of long books:', count)

//list all currently available books
for (let book of Books) {
  if (book.isAvailable) console.log(`${book.title} is Available`)
}
