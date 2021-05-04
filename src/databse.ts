import * as sqlite from 'sqlite3';
const sqlite3 = sqlite.verbose();

let urlDatabase: string = "";

export async function connect(){
    
    const connection = new sqlite3.Database("DATABASE_MUTATION.sqlite3",
        error => {
            if (error) {
                console.log('Could not connect to database', error)
            } else {
                console.log('CONNECTED TO DATABASE  !!!!!!')
            }
        }
    )
    
    return connection;
}


export async function getPositiveMutation(){
    
}



