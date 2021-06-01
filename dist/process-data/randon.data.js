"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomData = void 0;
class RandomData {
    static generaTickets() {
        return __awaiter(this, void 0, void 0, function* () {
            let ticket = {
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
            };
            return ticket;
        });
    }
    static randomNumber(min, max) {
        return __awaiter(this, void 0, void 0, function* () {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        });
    }
}
exports.RandomData = RandomData;
function randomText() {
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;
    return lorem;
}
function randomRoutesFiles() {
    const filesRoutes = [
        "gs://employeecontrol-ef7e3.appspot.com/AAAC0B0C-CE69-4ED4-9918-ED2B07E3F117.jpeg",
        "gs://employeecontrol-ef7e3.appspot.com/D1BBCD57-18EB-4E17-9C0A-4997987A5EE6.jpeg",
        "gs://employeecontrol-ef7e3.appspot.com/AAAC0B0C-CE69-4ED4-9918-ED2B07E3F117.jpeg",
        "gs://employeecontrol-ef7e3.appspot.com/D1BBCD57-18EB-4E17-9C0A-4997987A5EE6.jpeg",
        "gs://employeecontrol-ef7e3.appspot.com/AAAC0B0C-CE69-4ED4-9918-ED2B07E3F117.jpeg",
        "gs://employeecontrol-ef7e3.appspot.com/D1BBCD57-18EB-4E17-9C0A-4997987A5EE6.jpeg",
        "gs://employeecontrol-ef7e3.appspot.com/AAAC0B0C-CE69-4ED4-9918-ED2B07E3F117.jpeg",
        "gs://employeecontrol-ef7e3.appspot.com/D1BBCD57-18EB-4E17-9C0A-4997987A5EE6.jpeg"
    ];
    return filesRoutes;
}
