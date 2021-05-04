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
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveMutationRequest = exports.getMutationRow = exports.getMutationStats = exports.processMutation = void 0;
const validate_request_1 = require("../process-data/validate-request");
// DB
const databse_1 = require("../databse");
function processMutation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.body.dna) {
            let dna = req.body.dna;
            let validDNA = yield validate_request_1.validateDNA(dna);
            console.log("validDNA: ", validDNA);
            if (validDNA == "correct format") {
                let mutation = false;
                let containMutation = yield validate_request_1.hasMutation(dna);
                console.log("DNA: ", dna);
                console.log("containMutation: ", containMutation);
                if (containMutation.length > 0) {
                    mutation = true;
                    let flagInsert = yield saveMutationRequest(JSON.stringify(dna), "POSITIVE");
                }
                else {
                    let flagInsert = yield saveMutationRequest(JSON.stringify(dna), "NEGATIVE");
                }
                res.json({
                    data: dna,
                    hasMutation: mutation,
                    mutation: containMutation,
                    error: "",
                    message: ""
                });
                res.status(200);
                res.end();
            }
            else {
                res.json({
                    data: "",
                    error: "invalid DNA",
                    message: validDNA
                });
                res.status(200);
                res.end();
            }
        }
        else {
            res.json({
                data: "",
                error: "invalid DNA",
                message: "The format of DNA is incorrect"
            });
            res.status(201);
            res.end();
        }
    });
}
exports.processMutation = processMutation;
function getMutationStats(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let dnaWithMutation = yield getMutationRow('POSITIVE');
        let dnaWithoutMutation = yield getMutationRow('NEGATIVE');
        let totalMutations = dnaWithMutation[0].total;
        let totalNoMutations = dnaWithoutMutation[0].total;
        console.log("totalMutation: ", totalMutations);
        console.log("totalNormal: ", totalNoMutations);
        let ratio = totalMutations / totalNoMutations;
        res.json({
            "count_mutations": totalMutations,
            "count_no_mutation": totalNoMutations,
            "ratio": ratio
        });
        res.status(200);
        res.end();
    });
}
exports.getMutationStats = getMutationStats;
function getMutationRow(condition) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const db = yield databse_1.connect();
            let sqlStatment = "SELECT COUNT(*) AS 'total' FROM MUTATION_REQUESTS WHERE mutation = '" + condition + "'";
            db.all(sqlStatment, (err, results) => {
                db.close();
                resolve(results);
            });
        }));
    });
}
exports.getMutationRow = getMutationRow;
function saveMutationRequest(dna, mutation) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield databse_1.connect();
        let temp = [];
        temp.push(dna, mutation);
        let sqlQuery = 'INSERT INTO MUTATION_REQUESTS ( dna, mutation) VALUES (?, ?)';
        db.run(sqlQuery, temp, (err) => {
            db.close();
            console.log("ROW INSERTED");
            console.log("err: ", err);
            return "ROW INSERTED";
        });
    });
}
exports.saveMutationRequest = saveMutationRequest;
