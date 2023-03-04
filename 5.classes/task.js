//Задача №1
class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name; //название книги
        this.releaseDate = releaseDate; //дата выпуска
        this.pagesCount = pagesCount; //количество страниц
        this.state = 100; //состояние
        this.type = null; // жанр
    }
    fix(){
        this.state *= 1.5;
    }
    set state(value){
        if (value < 0) {
            this._state = 0;
        }
        else if (value > 100) {
            this._state = 100;
        }
        else {
            this._state = value;
        }
    }
    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, type){
        super(name, releaseDate, pagesCount, type);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, type){
        super(name, releaseDate, pagesCount, type);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount, type){
        super(author, name, releaseDate, pagesCount, type);
        this.type = "novel";
    }
}
class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount, type){
        super(author, name, releaseDate, pagesCount, type);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount, type){
        super(author, name, releaseDate, pagesCount, type);
        this.type = "detective";
    }
}

//Задача№2

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30){
            this.books.push(book);
        }
    }
    findBookBy(type, value){
        const findBook = this.books.find((item) => item[type] === value);
        return findBook || null;
    }
    giveBookByName(bookName) {
        const book = this.findBookBy("name", bookName);
        if (!book) return null;
        this.books = this.books.filter((item) => item.name !== bookName);
        return book;
    }
}

