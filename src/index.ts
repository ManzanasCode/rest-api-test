import { App } from './app'
import { JobSchedule } from './jobs schedule/job.test'
import { FirebaseClass } from './firebase/firebase.controller'


async function main(){
    const app = new App(4000)
    await app.listen()

    const fbClass = new FirebaseClass();
        let fbInstance = fbClass.getInstance()

    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)
    JobSchedule.consultaDatosJob(fbInstance)

    
}


main()