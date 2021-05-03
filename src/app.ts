import express, {Application} from 'express'
import morgan from 'morgan'
import IndexRoute from "./routes/index.route";
import MutationRoute from "./routes/mutation.route";


export class App{

    private app: Application
    

    constructor(private port: number | string ){
        this.app = express()
        this.settings()
        this.middelwares()
        this.routes()
    }

    settings(){
        this.app.set('port',this.port || 3000 )
    }

    routes(){
        this.app.use(IndexRoute)
        this.app.use(MutationRoute);
    }

    middelwares(){
        this.app.use(morgan('dev'))
        this.app.use(express.json());
    }

    async listen(){
        await this.app.listen(this.app.get('port'))
        console.log("server on port: " + this.app.get('port'))
    }

}