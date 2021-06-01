import { FirebaseClass } from '../firebase/firebase.controller'
import { RandomData } from '../process-data/randon.data'

/*
const fbClass = new FirebaseClass();
    let fbInstance = fbClass.getInstance()

    console.log("fbInstance: ", fbInstance)
*/



export class JobSchedule {
    static async obtieneDatosBD() {
    }


    public getInstance() {
        let ss = "return firebaseAdmin"
    }

    static async test() {

        try {

            const fbClass = new FirebaseClass();
            let fbInstance = fbClass.getInstance()

            //console.log("fbInstance: ", fbInstance)
            let ticketData = await RandomData.generaTickets()

            let arrayTickets = []
            arrayTickets.push(ticketData)
            arrayTickets.push(ticketData)
            arrayTickets.push(ticketData)
            arrayTickets.push(ticketData)
            arrayTickets.push(ticketData)
            arrayTickets.push(ticketData)
            arrayTickets.push(ticketData)
            /*
                        for(let i = 0; i < 2000; i++){
                            let empleado = "1500" + i
                            console.log(empleado)
                            var db = fbInstance.database().ref("empleados/" + empleado).set(
                                { empleado: "15008562", ticket: arrayTickets }
                            )
                        }
            */


            var db2 = await (await fbInstance.database().ref("/empleados/15000").once("value")).val()

            //console.log("db: ", fbInstance.database())
            console.log("db: ", db2)





        } catch (error) {

            console.log("Error!");
            console.log(error);

        }

    }
}