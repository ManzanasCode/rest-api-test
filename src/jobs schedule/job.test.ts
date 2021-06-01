import { FirebaseClass } from '../firebase/firebase.controller'
import { RandomData } from '../process-data/randon.data'
import { CronJob } from 'cron';

/*
const fbClass = new FirebaseClass();
    let fbInstance = fbClass.getInstance()

    console.log("fbInstance: ", fbInstance)
*/



export class JobSchedule {

    public fbInstance: any

    static async cargaDatosBD() {

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
            console.log("db: ", db2.length())

        } catch (error) {

            console.log("Error!");
            console.log(error);

        }

    }

    static async consultaDatosJob(instanceNumber: string, fbInstance: any) {
        console.log("Instance No: " + instanceNumber)

        var job = new CronJob('*/5 * * * * *', async function () {

            //console.log("Job execute: ", new Date().getTime() )

            let randomEmployee = await RandomData.randomNumber(1, 500)

            let stringEmployee = "1500" + randomEmployee.toString()

            console.log("stringEmployee: ", stringEmployee)
            var db2 = await (await fbInstance.database().ref("/empleados/" + stringEmployee).once("value")).val()

            console.log("Firebase query: ", db2.ticket.length)

        }, null, true, 'America/Los_Angeles');

        //job.start();

    }
}