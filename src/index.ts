import { App } from './app'
import { JobSchedule } from './jobs schedule/job.test'
import { FirebaseClass } from './firebase/firebase.controller'


async function main(){
    const app = new App(4005)
    await app.listen()

    //const fbClass = new FirebaseClass();
    //let fbInstance = fbClass.getInstance()

    //JobSchedule.consultaDatosJob("Uno", fbInstance)


}


main()