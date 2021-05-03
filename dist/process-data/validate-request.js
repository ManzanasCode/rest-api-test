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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCharToString = exports.rotateRightArray = exports.hasMutation = exports.convertCharsToNumbers = exports.convertStringToChars = exports.validateDNA = void 0;
function validateDNA(dnaRequest) {
    return __awaiter(this, void 0, void 0, function () {
        var DNA, response, charsArray, numbersArray, filtro;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    DNA = dnaRequest;
                    response = "correct format";
                    //console.log(DNA)
                    // Primero, se valida que sea un arrglo con 6 posiciones
                    if (DNA.length != 6) {
                        response = "the length is incorrect";
                    }
                    // Segundo, se valida que los elementos del arreglo sean de 6 posiciones
                    DNA.forEach(function (element, index) {
                        //console.log(element)
                        if (element.length != 6) {
                            response = "someone item is incorrect";
                            //console.log("incorrecto ", element)
                        }
                        else {
                            //console.log("correct")
                        }
                    });
                    return [4 /*yield*/, convertStringToChars(DNA)];
                case 1:
                    charsArray = _a.sent();
                    return [4 /*yield*/, convertCharsToNumbers(charsArray)
                        //console.log("charsArray: ", charsArray)
                        //console.log("numbersArray: ", numbersArray)
                    ];
                case 2:
                    numbersArray = _a.sent();
                    filtro = numbersArray.filter(function (number) {
                        return number != 65 && number != 84 && number != 67 && number != 71;
                    });
                    //console.log("filtro: ", filtro)
                    if (filtro.length > 0) {
                        response = "the format of characters is not correct";
                    }
                    return [2 /*return*/, response];
            }
        });
    });
}
exports.validateDNA = validateDNA;
function convertStringToChars(dnaRequest) {
    return __awaiter(this, void 0, void 0, function () {
        var DNA, charsArray;
        return __generator(this, function (_a) {
            DNA = dnaRequest;
            charsArray = [] //= new Array(6);
            ;
            DNA.forEach(function (element, index) {
                charsArray.push(element.split(""));
            });
            return [2 /*return*/, charsArray];
        });
    });
}
exports.convertStringToChars = convertStringToChars;
function convertCharsToNumbers(arrayRequest) {
    return __awaiter(this, void 0, void 0, function () {
        var charsArray, numbersArray, r, c;
        return __generator(this, function (_a) {
            charsArray = arrayRequest;
            numbersArray = [] //= new Array(6);
            ;
            for (r = 0; r < charsArray.length; r++) {
                for (c = 0; c < charsArray[r].length; c++) {
                    numbersArray.push(charsArray[r][c].codePointAt(0));
                }
            }
            return [2 /*return*/, numbersArray];
        });
    });
}
exports.convertCharsToNumbers = convertCharsToNumbers;
function hasMutation(dnaRequest) {
    return __awaiter(this, void 0, void 0, function () {
        var arrayMutation, DNA, coincidences, charsArray, rotateArray, DNArotated;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    arrayMutation = ["AAAA", "TTTT", "CCCC", "GGGG"];
                    DNA = dnaRequest;
                    coincidences = [];
                    return [4 /*yield*/, convertStringToChars(DNA)];
                case 1:
                    charsArray = _a.sent();
                    return [4 /*yield*/, rotateRightArray(charsArray)];
                case 2:
                    rotateArray = _a.sent();
                    return [4 /*yield*/, convertCharToString(rotateArray)
                        //console.log("charsArray 22: ", charsArray)
                        //console.log("rotateDNA: ", rotateDNA)
                        //console.log("DNArotated: ", DNArotated)
                    ];
                case 3:
                    DNArotated = _a.sent();
                    //console.log("charsArray 22: ", charsArray)
                    //console.log("rotateDNA: ", rotateDNA)
                    //console.log("DNArotated: ", DNArotated)
                    DNA.forEach(function (dnaElement, index) {
                        arrayMutation.forEach(function (mutationElement, idx) {
                            //console.log(index + ":" + dnaElement + " - " + mutationElement + "=> ", dnaElement.includes(mutationElement))
                            if (dnaElement.includes(mutationElement))
                                coincidences.push({ index: index, "DNA element": dnaElement, "type mutation": mutationElement, mutation: true });
                        });
                    });
                    DNArotated.forEach(function (dnaElement, index) {
                        arrayMutation.forEach(function (mutationElement, idx) {
                            //console.log(index + ":" + dnaElement + " - " + mutationElement + "=> ", dnaElement.includes(mutationElement))
                            if (dnaElement.includes(mutationElement)) {
                                var temp = dnaElement.split("").reverse();
                                coincidences.push({ index: index, "DNA element": temp, "type mutation": mutationElement, mutation: true });
                            }
                        });
                    });
                    return [2 /*return*/, coincidences];
            }
        });
    });
}
exports.hasMutation = hasMutation;
function rotateRightArray(arrayRequest) {
    return __awaiter(this, void 0, void 0, function () {
        var tempArray, responseArray, sizeArray, r, c, temporal;
        return __generator(this, function (_a) {
            tempArray = arrayRequest;
            responseArray = Array.from(Array(6), function () { return new Array(6); });
            sizeArray = tempArray.length;
            for (r = 0; r < tempArray.length; r++) {
                for (c = 0; c < tempArray[r].length; c++) {
                    temporal = tempArray[sizeArray - c - 1][r];
                    responseArray[r][c] = temporal;
                }
            }
            return [2 /*return*/, responseArray];
        });
    });
}
exports.rotateRightArray = rotateRightArray;
function convertCharToString(arrayRequest) {
    return __awaiter(this, void 0, void 0, function () {
        var tempArray, responseArray;
        return __generator(this, function (_a) {
            tempArray = arrayRequest;
            responseArray = [];
            tempArray.forEach(function (element, index) {
                responseArray.push(element.join(''));
            });
            return [2 /*return*/, responseArray];
        });
    });
}
exports.convertCharToString = convertCharToString;
