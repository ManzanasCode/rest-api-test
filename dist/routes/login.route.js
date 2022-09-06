"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = require("../controllers/books.controller");
const router = express_1.Router();
router.route('/rings-api/admin/test').post(books_controller_1.test);
exports.default = router;
