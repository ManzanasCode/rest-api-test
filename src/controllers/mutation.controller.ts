import { Request, Response } from 'express'
import { validateDNA, hasMutation } from '../process-data/validate-request'



export async function processMutation(req: Request, res: Response): Promise<Response | void> {

    
        res.json({
            data: "",
            error: "invalid DNA",
            message: "The format of DNA is incorrect"
        });
        res.status(201)
        res.end()
    
}
