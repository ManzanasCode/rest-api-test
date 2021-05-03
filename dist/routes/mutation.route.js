"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mutation_controller_1 = require("../controllers/mutation.controller");
var router = express_1.Router();
router.route('/mutation')
    .post(mutation_controller_1.processMutation);
exports.default = router;
