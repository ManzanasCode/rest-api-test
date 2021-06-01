import { FirebaseClass } from '../firebase/firebase.controller'
import { ITicket, foo } from '../models/ITicket'

export class RandomData {

    static async generaTickets() {

        let ticket: ITicket = {
            tiempos: {
                ETA: new Date,
                ETR: new Date,
                valueETA: new Date().toISOString(),
                valueETR: new Date().toISOString()
            },
            diagnostico: {
                flagDisplay: true,
                value: randomText()
            },
            solucion: {
                flagDisplay: true,
                value: randomText()
            },
            comentarios: {
                flagDisplay: true,
                value: randomText()
            },
            justificacion: {
                flagDisplay: true,
                value: randomText()
            },
            geolocaclizacion: {
                flagDisplay: true,
                value: randomText()
            },
            areaResolutora: {
                flagDisplay: true,
                value: randomText()
            },
            subirArchivo: {
                flagDisplay: true,
                value: randomText()
            },
            resolver: true,
            edicion: false,
            flagDetalle: true,
            geoConfig: {
                flagAnimation: true,
                flagData: false,
                latitude: "-97.8830557,15z",
                longitude: "18.9371573"
            },
            listFiles: randomRoutesFiles(),
            listPhotos: randomRoutesFiles()
        }

        return ticket;
    }

    static async randomNumber(min:number, max:number) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

}


function randomText(){

    const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum`

    return lorem
}


function randomRoutesFiles(){

    const filesRoutes = [
        "gs://employeecontrol-ef7e3.appspot.com/AAAC0B0C-CE69-4ED4-9918-ED2B07E3F117.jpeg",
        "gs://employeecontrol-ef7e3.appspot.com/D1BBCD57-18EB-4E17-9C0A-4997987A5EE6.jpeg",
        "gs://employeecontrol-ef7e3.appspot.com/AAAC0B0C-CE69-4ED4-9918-ED2B07E3F117.jpeg",
        "gs://employeecontrol-ef7e3.appspot.com/D1BBCD57-18EB-4E17-9C0A-4997987A5EE6.jpeg",
        "gs://employeecontrol-ef7e3.appspot.com/AAAC0B0C-CE69-4ED4-9918-ED2B07E3F117.jpeg",
        "gs://employeecontrol-ef7e3.appspot.com/D1BBCD57-18EB-4E17-9C0A-4997987A5EE6.jpeg",
        "gs://employeecontrol-ef7e3.appspot.com/AAAC0B0C-CE69-4ED4-9918-ED2B07E3F117.jpeg",
        "gs://employeecontrol-ef7e3.appspot.com/D1BBCD57-18EB-4E17-9C0A-4997987A5EE6.jpeg"
]

    return filesRoutes
}