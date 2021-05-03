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

            if (containMutation.length > 0)
                mutation = true

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


export async function getPositiveMutation() {
    const db = await connect();
    let sqlStatment = "SELECT * FROM MUTATION_REQUESTS WHERE ESTATUS = 'POSITIVE'";
    db.serialize(() => {
        db.all(sqlStatment, (err, results) => {
            db.close();
            return results
        })
    });
}

export async function getNegativeMutation() {
    const db = await connect();
    let sqlStatment = "SELECT * FROM MUTATION_REQUESTS WHERE ESTATUS = 'NEGATIVE'";
    db.serialize(() => {
        db.all(sqlStatment, (err, results) => {
            db.close();
            return results
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
        return "ROW INSERTED"
    })
    return "query";
}
