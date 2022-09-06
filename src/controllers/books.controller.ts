import { Request, Response } from 'express'
import databse from '../dataDemo/databse.json'
import { Book, RequestBook } from '../models/Book'
import { v4 as uuidv4 } from 'uuid';

let str = JSON.stringify(databse);
let booksDB: Book[] = JSON.parse(str);

export async function test(req: Request, res: Response): Promise<Response | void> {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", "true")

    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method,');
    res.header('content-type: application/json; charset=utf-8')
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");

    res.json({ msg: "success" });
    res.status(200)
    res.end()

}


export async function getAllBooks(req: Request, res: Response): Promise<Response | void> {
    res.json(booksDB);
    res.status(200)
    res.end()
}


export async function findById(req: Request, res: Response): Promise<Response | void> {
    try {
        var idBookParam = req.params.idbook.toString()
        const bookFound = booksDB.find((book: Book) => { return book.id == idBookParam })
        const responseData = (bookFound != undefined) ? bookFound : "book not founded"
        res.json(responseData);
        res.status(201)
        res.end()
    } catch (error) {
        res.json("WS error");
        res.status(201)
        res.end()
    }
}

export async function update(req: Request, res: Response): Promise<Response | void> {
    try {
        let responseData: any = ""
        var reqBook: Book = {
            id: req.body.id,
            name: req.body.name,
            author: req.body.author,
            languaje: req.body.languaje,
            yearPublished: req.body.yearPublished,
        }
        if (reqBook.id.length == 0 || reqBook.name.length == 0 || reqBook.author.length == 0 || reqBook.languaje.length == 0 || reqBook.yearPublished.length == 0) {
            responseData = "bad request"
        }
        else {
            //const bookFound = booksDB.find((book: Book) => { return book.id == reqBook.id })
            const idxBook = booksDB.findIndex(x => x.id === reqBook.id);
            if (idxBook == -1) {
                responseData = "book not founded"
            }
            else {
                booksDB.splice(idxBook, 1)
                booksDB.push(reqBook)
                responseData = `Book modified: ${reqBook.id}`
            }
        }
        res.json(responseData);
        res.status(201)
        res.end()
    } catch (error) {
        res.json("WS error");
        res.status(201)
        res.end()
    }
}


export async function deleteBook(req: Request, res: Response): Promise<Response | void> {
    try {
        let responseData: any = ""
        const idBook = req.body.id
        
        const idxBook = booksDB.findIndex(x => x.id === idBook);
        if (idxBook == -1) {
            responseData = "book not founded"
        }
        else {
            booksDB.splice(idxBook, 1)
            responseData = `Book deleted: ${idBook}`
        }

        res.json(responseData);
        res.status(201)
        res.end()
    } catch (error) {
        res.json("WS error");
        res.status(201)
        res.end()
    }
}

export async function insert(req: Request, res: Response): Promise<Response | void> {
    try {
        let responseData: any = ""
        var reqBook: Book = {
            id: "",
            name: req.body.name,
            author: req.body.author,
            languaje: req.body.languaje,
            yearPublished: req.body.yearPublished,
        }
        if (reqBook.name.length == 0 || reqBook.author.length == 0 || reqBook.languaje.length == 0 || reqBook.yearPublished.length == 0) {
            responseData = "bad request"
        }
        else {
            reqBook.id = uuidv4()
            booksDB.push(reqBook)
            responseData = `Book inserted: ${reqBook.id}`

        }
        res.json(responseData);
        res.status(201)
        res.end()
    } catch (error) {
        res.json("WS error");
        res.status(201)
        res.end()
    }
}