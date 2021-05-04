
export async function validateDNA(dnaRequest: string[]) {
    let DNA: string[] = dnaRequest;
    let response: string = "correct format";
    //console.log(DNA)

    // Primero, se valida que sea un arrglo con 6 posiciones
    if (DNA.length != 6) {
        response = "the length is incorrect"
    }

    // Segundo, se valida que los elementos del arreglo sean de 6 posiciones
    DNA.forEach((element, index) => {
        //console.log(element)
        if (element.length != 6) {
            response = "someone item is incorrect"
            //console.log("incorrecto ", element)
        }
        else {
            //console.log("correct")
        }
    })

    let charsArray: any[] = await convertStringToChars(DNA)
    let numbersArray: any[] = await convertCharsToNumbers(charsArray)

    //console.log("charsArray: ", charsArray)
    //console.log("numbersArray: ", numbersArray)


    let filtro = numbersArray.filter((number) => {
        return number != 65 && number != 84 && number != 67 && number != 71
    })

    //console.log("filtro: ", filtro)

    if (filtro.length > 0) {
        response = "the format of characters is not correct";
    }

    return response;
}


export async function convertStringToChars(dnaRequest: string[]) {
    let DNA: string[] = dnaRequest;
    let charsArray: any[] = []//= new Array(6);
    DNA.forEach((element, index) => {
        charsArray.push(element.split(""));
    });
    return charsArray;
}

export async function convertCharsToNumbers(arrayRequest: any[]) {
    let charsArray: any[] = arrayRequest;
    let numbersArray: any[] = []//= new Array(6);
    for (let r = 0; r < charsArray.length; r++) {
        for (let c = 0; c < charsArray[r].length; c++) {
            numbersArray.push(charsArray[r][c].codePointAt(0))
        }
    }
    return numbersArray;
}


export async function hasMutation(dnaRequest: string[]) {
    let arrayMutation = ["AAAA", "TTTT", "CCCC", "GGGG"]
    let DNA: string[] = dnaRequest;
    let coincidences: any[] = [];

    let charsArray: any = await convertStringToChars(DNA)
    let rotateArray = await rotateRightArray(charsArray)
    let DNArotated = await convertCharToString(rotateArray)

    //console.log("charsArray 22: ", charsArray)
    //console.log("rotateDNA: ", rotateDNA)
    //console.log("DNArotated: ", DNArotated)

    DNA.forEach((dnaElement, index) => {
        arrayMutation.forEach((mutationElement, idx) => {
            //console.log(index + ":" + dnaElement + " - " + mutationElement + "=> ", dnaElement.includes(mutationElement))
            if (dnaElement.includes(mutationElement))
                coincidences.push({ index: index, "DNA element": dnaElement, "type mutation": mutationElement, mutation: true })
        })
    })

    DNArotated.forEach((dnaElement, index) => {
        arrayMutation.forEach((mutationElement, idx) => {
            //console.log(index + ":" + dnaElement + " - " + mutationElement + "=> ", dnaElement.includes(mutationElement))
            if (dnaElement.includes(mutationElement)){
                let temp = dnaElement.split("").reverse()
                coincidences.push({ index: index, "DNA element": temp, "type mutation": mutationElement, mutation: true })
            }
        })
    })
    

    return coincidences;
}

export async function rotateRightArray(arrayRequest: any[]) {
    let tempArray: string[] = arrayRequest;
    let responseArray: any = Array.from(Array(6), () => new Array(6))
    let sizeArray = tempArray.length
    for (let r = 0; r < tempArray.length; r++) {
        for (let c = 0; c < tempArray[r].length; c++) {
            let temporal = tempArray[sizeArray - c - 1][r]
            responseArray[r][c] = temporal;
        }
    }
    return responseArray;
}

export async function convertCharToString(arrayRequest: any[]) {
    let tempArray: any[] = arrayRequest;
    let responseArray: string[] = [];
    tempArray.forEach((element,index) => {
        responseArray.push(element.join(''));
    })
    return responseArray;
}