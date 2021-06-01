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
const app_1 = require("./app");
const job_test_1 = require("./jobs schedule/job.test");
const firebase_controller_1 = require("./firebase/firebase.controller");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = new app_1.App(4000);
        yield app.listen();
        const fbClass = new firebase_controller_1.FirebaseClass();
        let fbInstance = fbClass.getInstance();
        job_test_1.JobSchedule.consultaDatosJob("Uno", fbInstance);
        job_test_1.JobSchedule.consultaDatosJob("Dos", fbInstance);
        job_test_1.JobSchedule.consultaDatosJob("Tres", fbInstance);
        job_test_1.JobSchedule.consultaDatosJob("Cuatro", fbInstance);
        job_test_1.JobSchedule.consultaDatosJob("Cinco", fbInstance);
    });
}
main();
