"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert = exports.deleteBook = exports.update = exports.findById = exports.getAllBooks = exports.test = void 0;
const databse_json_1 = __importDefault(require("../dataDemo/databse.json"));
const uuid_1 = require("uuid");
let str = JSON.stringify(databse_json_1.default);
let booksDB = JSON.parse(str);
function test(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Credentials", "true");
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method,');
        res.header('content-type: application/json; charset=utf-8');
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
        res.json({ msg: "success" });
        res.status(200);
        res.end();
    });
}
exports.test = test;
function getAllBooks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.json(booksDB);
        res.status(200);
        res.end();
    });
}
exports.getAllBooks = getAllBooks;
function findById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var idBookParam = req.params.idbook.toString();
            const bookFound = booksDB.find((book) => { return book.id == idBookParam; });
            const responseData = (bookFound != undefined) ? bookFound : "book not founded";
            res.json(responseData);
            res.status(201);
            res.end();
        }
        catch (error) {
            res.json("WS error");
            res.status(201);
            res.end();
        }
    });
}
exports.findById = findById;
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let responseData = "";
            var reqBook = {
                id: req.body.id,
                name: req.body.name,
                author: req.body.author,
                languaje: req.body.languaje,
                yearPublished: req.body.yearPublished,
            };
            if (reqBook.id.length == 0 || reqBook.name.length == 0 || reqBook.author.length == 0 || reqBook.languaje.length == 0 || reqBook.yearPublished.length == 0) {
                responseData = "bad request";
            }
            else {
                //const bookFound = booksDB.find((book: Book) => { return book.id == reqBook.id })
                const idxBook = booksDB.findIndex(x => x.id === reqBook.id);
                if (idxBook == -1) {
                    responseData = "book not founded";
                }
                else {
                    booksDB.splice(idxBook, 1);
                    booksDB.push(reqBook);
                    responseData = `Book modified: ${reqBook.id}`;
                }
            }
            res.json(responseData);
            res.status(201);
            res.end();
        }
        catch (error) {
            res.json("WS error");
            res.status(201);
            res.end();
        }
    });
}
exports.update = update;
function deleteBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let responseData = "";
            const idBook = req.body.id;
            const idxBook = booksDB.findIndex(x => x.id === idBook);
            if (idxBook == -1) {
                responseData = "book not founded";
            }
            else {
                booksDB.splice(idxBook, 1);
                responseData = `Book deleted: ${idBook}`;
            }
            res.json(responseData);
            res.status(201);
            res.end();
        }
        catch (error) {
            res.json("WS error");
            res.status(201);
            res.end();
        }
    });
}
exports.deleteBook = deleteBook;
function insert(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let responseData = "";
            var reqBook = {
                id: "",
                name: req.body.name,
                author: req.body.author,
                languaje: req.body.languaje,
                yearPublished: req.body.yearPublished,
            };
            if (reqBook.name.length == 0 || reqBook.author.length == 0 || reqBook.languaje.length == 0 || reqBook.yearPublished.length == 0) {
                responseData = "bad request";
            }
            else {
                reqBook.id = uuid_1.v4();
                booksDB.push(reqBook);
                responseData = `Book inserted: ${reqBook.id}`;
            }
            res.json(responseData);
            res.status(201);
            res.end();
        }
        catch (error) {
            res.json("WS error");
            res.status(201);
            res.end();
        }
    });
}
exports.insert = insert;
