import { App } from './app'


async function main(){
    const app = new App(4005)
    await app.listen()
}

main()