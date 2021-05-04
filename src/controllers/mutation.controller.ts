import { Request, Response } from 'express'
import { validateDNA, hasMutation } from '../process-data/validate-request'

// DB
import { connect } from '../databse'


export async function processMutation(req: Request, res: Response): Promise<Response | void> {

    if (req.body.dna) {
        let dna: string[] = req.body.dna
        let validDNA = await validateDNA(dna);
        console.log("validDNA: ", validDNA)
        if (validDNA == "correct format") {
            let mutation: boolean = false
            let containMutation = await hasMutation(dna)
            console.log("DNA: ", dna)
            console.log("containMutation: ", containMutation)

            if (containMutation.length > 0){
                mutation = true
                let flagInsert = await saveMutationRequest(JSON.stringify(dna), "POSITIVE")
            }else{
                let flagInsert = await saveMutationRequest(JSON.stringify(dna), "NEGATIVE")
            }
            res.json({
                data: dna,
                hasMutation: mutation,
                mutation: containMutation,
                error: "",
                message: ""
            });
            res.status(200)
            res.end()

        }
        else {
            res.json({
                data: "",
                error: "invalid DNA",
                message: validDNA
            });
            res.status(200)
            res.end()
        }

    }
    else {
        res.json({
            data: "",
            error: "invalid DNA",
            message: "The format of DNA is incorrect"
        });
        res.status(201)
        res.end()
    }
}

export async function getMutationStats(req: Request, res: Response): Promise<Response | void> {

    let dnaWithMutation = await getMutationRow('POSITIVE')
    let dnaWithoutMutation = await getMutationRow('NEGATIVE')

    let totalMutations = dnaWithMutation[0].total
    let totalNoMutations = dnaWithoutMutation[0].total

    console.log("totalMutation: ", totalMutations)
    console.log("totalNormal: ", totalNoMutations)

    let ratio = totalMutations / totalNoMutations

    res.json({
        "count_mutations": totalMutations,
        "count_no_mutation": totalNoMutations,
        "ratio": ratio
       });
    res.status(200)
    res.end()
}


export async function getMutationRow(condition:string): Promise<any | void> {
    return new Promise(async (resolve) => {
        const db = await connect();
        let sqlStatment = "SELECT COUNT(*) AS 'total' FROM MUTATION_REQUESTS WHERE mutation = '" + condition + "'";
        db.all(sqlStatment, (err, results) => {
            db.close();
            resolve(results)
        })
    });
}



export async function saveMutationRequest(dna: string, mutation: string) {
    const db = await connect();
    let temp = [];
    temp.push(dna, mutation)
    let sqlQuery = 'INSERT INTO MUTATION_REQUESTS ( dna, mutation) VALUES (?, ?)';
    db.run(sqlQuery, temp, (err) => {
        db.close();
        console.log("ROW INSERTED")
        console.log("err: ", err)
        return "ROW INSERTED"
    })
    
}
