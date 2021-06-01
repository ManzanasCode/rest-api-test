"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mutation_controller_1 = require("../controllers/mutation.controller");
const router = express_1.Router();
router.route('/mutation')
    .post(mutation_controller_1.processMutation);
exports.default = router;
