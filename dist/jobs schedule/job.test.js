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
exports.JobSchedule = void 0;
const firebase_controller_1 = require("../firebase/firebase.controller");
const randon_data_1 = require("../process-data/randon.data");
const cron_1 = require("cron");
/*
const fbClass = new FirebaseClass();
    let fbInstance = fbClass.getInstance()

    console.log("fbInstance: ", fbInstance)
*/
class JobSchedule {
    static cargaDatosBD() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fbClass = new firebase_controller_1.FirebaseClass();
                let fbInstance = fbClass.getInstance();
                //console.log("fbInstance: ", fbInstance)
                let ticketData = yield randon_data_1.RandomData.generaTickets();
                let arrayTickets = [];
                arrayTickets.push(ticketData);
                arrayTickets.push(ticketData);
                arrayTickets.push(ticketData);
                arrayTickets.push(ticketData);
                arrayTickets.push(ticketData);
                arrayTickets.push(ticketData);
                arrayTickets.push(ticketData);
                /*
                            for(let i = 0; i < 2000; i++){
                                let empleado = "1500" + i
                                console.log(empleado)
                                var db = fbInstance.database().ref("empleados/" + empleado).set(
                                    { empleado: "15008562", ticket: arrayTickets }
                                )
                            }
                */
                var db2 = yield (yield fbInstance.database().ref("/empleados/15000").once("value")).val();
                //console.log("db: ", fbInstance.database())
                console.log("db: ", db2.length());
            }
            catch (error) {
                console.log("Error!");
                console.log(error);
            }
        });
    }
    static consultaDatosJob(instanceNumber, fbInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Instance No: " + instanceNumber);
            var job = new cron_1.CronJob('*/5 * * * * *', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    //console.log("Job execute: ", new Date().getTime() )
                    let randomEmployee = yield randon_data_1.RandomData.randomNumber(1, 500);
                    let stringEmployee = "1500" + randomEmployee.toString();
                    console.log("stringEmployee: ", stringEmployee);
                    var db2 = yield (yield fbInstance.database().ref("/empleados/" + stringEmployee).once("value")).val();
                    console.log("Firebase query: ", db2.ticket.length);
                });
            }, null, true, 'America/Los_Angeles');
            //job.start();
        });
    }
}
exports.JobSchedule = JobSchedule;
