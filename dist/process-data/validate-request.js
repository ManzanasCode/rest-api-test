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
exports.convertCharToString = exports.rotateRightArray = exports.hasMutation = exports.convertCharsToNumbers = exports.convertStringToChars = exports.validateDNA = void 0;
function validateDNA(dnaRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        let DNA = dnaRequest;
        let response = "correct format";
        //console.log(DNA)
        // Primero, se valida que sea un arrglo con 6 posiciones
        if (DNA.length != 6) {
            response = "the length is incorrect";
        }
        // Segundo, se valida que los elementos del arreglo sean de 6 posiciones
        DNA.forEach((element, index) => {
            //console.log(element)
            if (element.length != 6) {
                response = "someone item is incorrect";
                //console.log("incorrecto ", element)
            }
            else {
                //console.log("correct")
            }
        });
        let charsArray = yield convertStringToChars(DNA);
        let numbersArray = yield convertCharsToNumbers(charsArray);
        //console.log("charsArray: ", charsArray)
        //console.log("numbersArray: ", numbersArray)
        let filtro = numbersArray.filter((number) => {
            return number != 65 && number != 84 && number != 67 && number != 71;
        });
        //console.log("filtro: ", filtro)
        if (filtro.length > 0) {
            response = "the format of characters is not correct";
        }
        return response;
    });
}
exports.validateDNA = validateDNA;
function convertStringToChars(dnaRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        let DNA = dnaRequest;
        let charsArray = []; //= new Array(6);
        DNA.forEach((element, index) => {
            charsArray.push(element.split(""));
        });
        return charsArray;
    });
}
exports.convertStringToChars = convertStringToChars;
function convertCharsToNumbers(arrayRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        let charsArray = arrayRequest;
        let numbersArray = []; //= new Array(6);
        for (let r = 0; r < charsArray.length; r++) {
            for (let c = 0; c < charsArray[r].length; c++) {
                numbersArray.push(charsArray[r][c].codePointAt(0));
            }
        }
        return numbersArray;
    });
}
exports.convertCharsToNumbers = convertCharsToNumbers;
function hasMutation(dnaRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        let arrayMutation = ["AAAA", "TTTT", "CCCC", "GGGG"];
        let DNA = dnaRequest;
        let coincidences = [];
        let charsArray = yield convertStringToChars(DNA);
        let rotateArray = yield rotateRightArray(charsArray);
        let DNArotated = yield convertCharToString(rotateArray);
        //console.log("charsArray 22: ", charsArray)
        //console.log("rotateDNA: ", rotateDNA)
        //console.log("DNArotated: ", DNArotated)
        DNA.forEach((dnaElement, index) => {
            arrayMutation.forEach((mutationElement, idx) => {
                //console.log(index + ":" + dnaElement + " - " + mutationElement + "=> ", dnaElement.includes(mutationElement))
                if (dnaElement.includes(mutationElement))
                    coincidences.push({ index: index, "DNA element": dnaElement, "type mutation": mutationElement, mutation: true });
            });
        });
        DNArotated.forEach((dnaElement, index) => {
            arrayMutation.forEach((mutationElement, idx) => {
                //console.log(index + ":" + dnaElement + " - " + mutationElement + "=> ", dnaElement.includes(mutationElement))
                if (dnaElement.includes(mutationElement)) {
                    let temp = dnaElement.split("").reverse();
                    coincidences.push({ index: index, "DNA element": temp, "type mutation": mutationElement, mutation: true });
                }
            });
        });
        return coincidences;
    });
}
exports.hasMutation = hasMutation;
function rotateRightArray(arrayRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        let tempArray = arrayRequest;
        let responseArray = Array.from(Array(6), () => new Array(6));
        let sizeArray = tempArray.length;
        for (let r = 0; r < tempArray.length; r++) {
            for (let c = 0; c < tempArray[r].length; c++) {
                let temporal = tempArray[sizeArray - c - 1][r];
                responseArray[r][c] = temporal;
            }
        }
        return responseArray;
    });
}
exports.rotateRightArray = rotateRightArray;
function convertCharToString(arrayRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        let tempArray = arrayRequest;
        let responseArray = [];
        tempArray.forEach((element, index) => {
            responseArray.push(element.join(''));
        });
        return responseArray;
    });
}
exports.convertCharToString = convertCharToString;
