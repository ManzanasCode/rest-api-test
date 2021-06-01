import { App } from './app'
import { JobSchedule } from './jobs schedule/job.test'



async function main(){
    const app = new App(4000)
    await app.listen()

    JobSchedule.test()
}


main()