import express, {Application} from 'express'
import morgan from 'morgan'
import IndexRoute from "./routes/index.route";
import LoginRoute from "./routes/login.route";
import DemoRoute from "./routes/demo.route";
import cors from 'cors'

export class App{

    private app: Application


    constructor(private port: number | string ){
        this.app = express()
        this.settings()
        this.middelwares()
        this.routes()
    }

    settings(){
        this.app.set('port',this.port || 4000 )
    }

    routes(){
        this.app.use(IndexRoute)
        this.app.use(LoginRoute);
        this.app.use(DemoRoute);

    }

    middelwares(){
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    async listen(){
        await this.app.listen(this.app.get('port'))
        console.log(`Server on: http://localhost:${this.app.get('port')}`)
    }

}