"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controllers/login.controller");
const router = express_1.Router();
router.route('/rings-api/admin/doLogin').post(login_controller_1.login);
router.route('/rings-api/admin/doLogin2').get(login_controller_1.login);
exports.default = router;
