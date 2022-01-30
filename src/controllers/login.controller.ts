import { Request, Response } from 'express'



export async function login(req: Request, res: Response): Promise<Response | void> {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials","true")

    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method,');
    res.header('content-type: application/json; charset=utf-8')
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    //res.header("Cache-Control", 'private, no-cache, no-store, must-revalidate');
    res.json({msg:"LDAP_SUCCESS"});
    res.status(200)
    res.end()

}
