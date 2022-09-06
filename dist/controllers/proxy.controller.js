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
exports.obtenerModeloVersionOLT = exports.UP2COMMIT = exports.DOWN2COMMIT = exports.up = exports.down = exports.pruebas = exports.validacionInterfaces = exports.validateVRRP = exports.validacionLLDP = exports.datosOSPFv2 = exports.getPerformance = exports.validacionacceso = exports.servicioVoz = exports.ejecutaProtocolosPOST = exports.ejecutaProtocolos = exports.getIpRfc = exports.changestatus = exports.evidences = exports.consultarRFC = exports.userLog = exports.token = exports.getCredentials = void 0;
function getCredentials(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Credentials", "true");
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method,');
        res.header('content-type: application/json; charset=utf-8');
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
        const jsonResponse = {
            "status": "C",
            "code": "200",
            "response": "El servicio se ejecutó correctamente",
            "credentials": [
                {
                    "id": 92,
                    "anilloId": 116,
                    "userEquipo": "pdr",
                    "pwdEquipo": "Pdr1tSM#TpR3dd76",
                    "userLanWan": "pderedundancia",
                    "pwdLanwan": "321qWe...7654321",
                    "userColector": "REDUNDANCIA",
                    "pwdColector": "BMEaZIV+%4102066",
                    "userOlt": "usrpdr",
                    "pwdOlt": "SZxrtotalplay21",
                    "userUrlVideo": "mloza",
                    "pwdUrlVideo": "mloza2016",
                    "creationDate": "2021-11-18 13:11:23.0"
                }
            ]
        };
        res.json(jsonResponse);
        res.status(200);
        res.end();
    });
}
exports.getCredentials = getCredentials;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function token(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(2000);
        const jsonResponse = { "access_token": "9eacea48-ef19-4fda-b86d-883156e15771", "token_type": "bearer", "refresh_token": "dcf1e961-506a-465c-a08d-c815ec4cdaaa", "expires_in": 43199, "scope": "read write trust" };
        res.json(jsonResponse);
        res.status(200);
        res.end();
    });
}
exports.token = token;
function userLog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(2000);
        const jsonResponse = {
            "status": "C",
            "code": "200",
            "response": "Exito al registrar la bitácora"
        };
        res.json(jsonResponse);
        res.status(200);
        res.end();
    });
}
exports.userLog = userLog;
function consultarRFC(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(2000);
        const jsonResponse = {
            "rfc": "157088",
            "mensaje": null,
            "success": true
        };
        res.json(jsonResponse);
        res.status(200);
        res.end();
    });
}
exports.consultarRFC = consultarRFC;
function evidences(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(3000);
        const jsonResponse = {
            "status": "C",
            "code": "200",
            "response": "El servicio se ejecutó correctamente"
        };
        res.json(jsonResponse);
        res.status(200);
        res.end();
    });
}
exports.evidences = evidences;
function changestatus(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(2000);
        const jsonResponse = {
            "status": "C",
            "code": "200",
            "response": "El servicio se ejecutó correctamente"
        };
        res.json(jsonResponse);
        res.status(200);
        res.end();
    });
}
exports.changestatus = changestatus;
function getIpRfc(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(2000);
        const jsonResponse = {
            "status": "C",
            "code": "200",
            "response": "El servicio se ejecutó correctamente",
            "ipList": [
                {
                    "anillo": null,
                    "ip": "10.253.156.38",
                    "equipo": null
                },
                {
                    "anillo": null,
                    "ip": "10.253.156.81",
                    "equipo": null
                },
                {
                    "anillo": null,
                    "ip": "10.253.56.46",
                    "equipo": null
                },
                {
                    "anillo": null,
                    "ip": "10.253.188.215",
                    "equipo": null
                },
                {
                    "anillo": null,
                    "ip": "10.253.165.99",
                    "equipo": null
                },
                {
                    "anillo": null,
                    "ip": "10.253.157.72",
                    "equipo": null
                },
                {
                    "anillo": null,
                    "ip": "187.190.3.25",
                    "equipo": null
                }
            ]
        };
        res.json(jsonResponse);
        res.status(200);
        res.end();
    });
}
exports.getIpRfc = getIpRfc;
function ejecutaProtocolos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(10000);
        const jsonResponse = true;
        res.json(jsonResponse);
        res.status(200);
        res.end();
    });
}
exports.ejecutaProtocolos = ejecutaProtocolos;
function ejecutaProtocolosPOST(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const jsonResponse = true;
        res.json(jsonResponse);
        res.status(200);
        res.end();
    });
}
exports.ejecutaProtocolosPOST = ejecutaProtocolosPOST;
function servicioVoz(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const random = Math.random() * (10 - 1) + 1;
        const jsonResponse = (random % 2 == 0) ? true : false;
        res.status(200);
        res.json(true);
        res.end();
    });
}
exports.servicioVoz = servicioVoz;
function validacionacceso(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const jsonResponse = true;
        res.json(jsonResponse);
        res.status(200);
        res.end();
    });
}
exports.validacionacceso = validacionacceso;
function getPerformance(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var regreso = (Math.floor(Math.random() * 2)) == 1 ? "100" : "50";
        res.json(regreso);
        res.status(200);
        res.end();
    });
}
exports.getPerformance = getPerformance;
function datosOSPFv2(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(200);
        res.json({});
        res.end();
    });
}
exports.datosOSPFv2 = datosOSPFv2;
function validacionLLDP(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("validacionLLDP: ", req.body);
        yield sleep(1000);
        const responseSucces = {
            "executionSkipped": false,
            "success": true,
            "error": "",
            "mssg": "Ejecucion de LLDP correcta, anillo:UXMAL_CANCUN",
            "total": 1,
            "data": [
                {
                    "anillo": "UXMAL_CANCUN",
                    "equipo": "NINHER-CAN143757-S12-A",
                    "prueba": "LLDP",
                    "outfileb64": "c3Bhd24gc3NoIC1vIFN0cmljdEhvc3RLZXlDaGVja2luZz1ubyAtVCAtcDIwNDQ0IHBkckAxMC4xODAuOC4zOQ0KDQ0NCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogDQ0KKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBUIEUgTiBDIEkgTyBOICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiANDQoqRXN0ZSBzaXN0ZW1hIGVzIHBhcmEgZWwgdXNvIGV4Y2x1c2l2byBkZSB1c3VhcmlvcyBhdXRvcml6YWRvcywgcG9yIGxvIHF1ZSBsYXMqIA0NCipwZXJzb25hcyAgcXVlICBsbyB1dGlsaWNlbiBzaW4gYXV0b3JpemFjaW9uIG8gY29uIGFidXNvIGRlIGF1dG9yaWRhZCwgZXN0YXJhbiogDQ0KKnN1amV0b3MgIGFsIG1vbml0b3JlbyBkZSB0b2RhcyBzdXMgYWN0aXZpZGFkZXMgZW4gZWwgbWlzbW8uIEN1YWxxdWllciBwZXJzb25hKiANDQoqcXVlICB1dGlsaWNlICBlc3RlICBzaXN0ZW1hICBwZXJtaXRlICBleHByZXNhbWVudGUgdGFsIG1vbml0b3JlbyB5IGRlYmUgZXN0YXIqIA0NCipjb25jaWVudGUgZGUgIHF1ZSBzaSBlc3RlIHJldmVsYXJhIHVuYSBwb3NpYmxlIGFjdGl2aWRhZCBjcmltaW5hbCxlbCBwZXJzb25hbCogDQ0KKmRlIHNpc3RlbWFzIHByb3BvcmNpb25hcmEgbGEgZXZpZGVuY2lhIGRlbCBtb25pdG9yZW8gYWwgcGVyc29uYWwgZGVsIERTSSwgY29uKiANDQoqZWwgZmluIGRlIGVtcHJlbmRlciBsYXMgYWNjaW9uZXMgY2l2aWxlcyB5L28gbGVnYWxlcyBxdWUgY29ycmVzcG9uZGFuLiAgICAgICAqIA0NCiogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogDQ0KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiANDQoNDQpVc2VyIEF1dGhlbnRpY2F0aW9uDQ0KUGFzc3dvcmQ6IA0KDQ0KSW5mbzogVGhlIG1heCBudW1iZXIgb2YgVlRZIHVzZXJzIGlzIDE1LCBhbmQgdGhlIG51bWJlcg0NCiAgICAgIG9mIGN1cnJlbnQgVlRZIHVzZXJzIG9uIGxpbmUgaXMgMS4NDQogICAgICBUaGUgY3VycmVudCBsb2dpbiB0aW1lIGlzIDIwMjItMDMtMjggMTM6NTQ6NTAtMDY6MDAuDQ0KPE5JTkhFUi1DQU4xNDM3NTctUzEyLUE+c2NyZWVuLWxlbmd0aCAwIHRlbXBvcmFyeQ0Kc2NyZWVuLWxlbmd0aCAwIHRlbXBvcmFyeQ0NCkluZm86IFRoZSBjb25maWd1cmF0aW9uIHRha2VzIGVmZmVjdCBvbiB0aGUgY3VycmVudCB1c2VyIHRlcm1pbmFsIGludGVyZmFjZSBvbmx5Lg0NCjxOSU5IRVItQ0FOMTQzNzU3LVMxMi1BPmRpc3BsYXkgIGxsZHAgIG5laWdoYm9yICBicmllZg0KZGlzcGxheSAgbGxkcCAgbmVpZ2hib3IgIGJyaWVmDQ0KTG9jYWwgSW50ZiAgICBOZWlnaGJvciBEZXYgICAgICAgICAgICAgTmVpZ2hib3IgSW50ZiAgICAgICAgICAgICBFeHB0aW1lKHMpDQ0KWEdFMi8wLzAgICAgICBDQUxBS01VTF9DVU4gICAgICAgICAgICAgRXRoMC8xOS8xICAgICAgICAgICAgICAgICAxMDUgICAgDQ0KWEdFMi8wLzEgICAgICBDQUxBS01VTF9DVU4gICAgICAgICAgICAgRXRoMC8xOS8wICAgICAgICAgICAgICAgICAxMDQgICAgDQ0KWEdFMi8wLzIgICAgICBDQUxBS01VTF9DVU4gICAgICAgICAgICAgRXRoMC8yMC8wICAgICAgICAgICAgICAgICAxMDYgICAgDQ0KWEdFMi8wLzMgICAgICBDQUxBS01VTF9DVU4gICAgICAgICAgICAgRXRoMC8yMC8xICAgICAgICAgICAgICAgICAxMDcgICAgDQ0KMTAwR0UzLzAvMCAgICBDT0xDQU4tQ0FOMTMxOTc3LVMxMi1BICAgMTAwR0UzLzAvMSAgICAgICAgICAgICAgICAxMDkgICAgDQ0KMTAwR0UzLzAvMSAgICAyNzE4LUNBTkNVTi1RUk9PLUNBTkMuLi4gMTAwR0UwLzcvMCAgICAgICAgICAgICAgICAxMDEgICAgDQ0KPE5JTkhFUi1DQU4xNDM3NTctUzEyLUE+",
                    "error_level": "0"
                }
            ],
            "prueba": "LLDP",
            "conCortes": 0
        };
        const responseError = {
            "executionSkipped": false,
            "success": false,
            "error": "  Se produjo un error que no permitio generar el comando --  --",
            "mssg": "Ejecucion de LLDP correcta, anillo:GDL_CANADA",
            "total": 1,
            "data": [
                {
                    "anillo": "GDL_CANADA",
                    "equipo": "MEZQUITAN-GDL86443-M14-CA",
                    "prueba": "LLDP",
                    "outfileb64": "c3Bhd24gc3NoIC1vIFN0cmljdEhvc3RLZXlDaGVja2luZz1ubyAtVCAtcDIwNDQ0IHBkckAxMC4xODAuMjA1LjE4Nw0KCkVycm9yOiBTU0ggZmFpbHVyZQo=",
                    "error_level": "1"
                }
            ],
            "prueba": "LLDP",
            "conCortes": 0
        };
        const errorSSH = {
            "executionSkipped": false,
            "success": false,
            "error": "Se produjo un error que no permitio generar el comando --  SSH failure --",
            "mssg": "Ejecucion de LLDP correcta, anillo:GDL_CANADA",
            "total": 1,
            "data": [
                {
                    "anillo": "GDL_CANADA",
                    "equipo": "MEZQUITAN-GDL86443-M14-CA",
                    "prueba": "LLDP",
                    "outfileb64": "c3Bhd24gc3NoIC1vIFN0cmljdEhvc3RLZXlDaGVja2luZz1ubyAtVCAtcDIwNDQ0IHBkckAxMC4xODAuMjA1LjE4Nw0KCkVycm9yOiBTU0ggZmFpbHVyZQo=",
                    "error_level": "1"
                }
            ],
            "prueba": "LLDP",
            "conCortes": 0
        };
        const errorBUSY = {
            "executionSkipped": false,
            "success": false,
            "error": "Se produjo un error que no permitio generar el comando --  The system is busy in collecting the current configuration. Please wait...\r\r --",
            "mssg": "Ejecucion de LLDP correcta, anillo:LOMA_B",
            "total": 1,
            "data": [
                {
                    "anillo": "LOMA_B",
                    "equipo": "STATEQ-GDL86202-S93-A",
                    "prueba": "LLDP",
                    "outfileb64": "+",
                    "error_level": "1"
                }
            ],
            "prueba": "LLDP",
            "conCortes": 0
        };
        const random = Math.floor(Math.random() * 10) * (10 - 1) + 1;
        const response = (random % 2 == 0) ? responseSucces : responseSucces;
        res.json(responseSucces);
        res.status(200);
        res.end();
    });
}
exports.validacionLLDP = validacionLLDP;
function validateVRRP(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(1000);
        const random = Math.floor(Math.random() * 10) * (10 - 1) + 1;
        const responseSuccess = {
            "respuestaBoolean": true,
            "codigoRespuesta": "000",
            "descripcionRespuesta": "La interfaz 7/0/3.4085 se encontró en el dispositivo 10.180.7.3",
            "mensajeServicio": "No_Message_Found",
            "fechaSolicitud": "2021-12-01 10:13:59",
            "fechaRespuesta": "2021-12-01 10:14:01",
            "ip": "10.180.7.3",
            "idEjecutor": "pdr",
            "interfaceName": "7/0/3.4085",
            "totalSesiones": 0,
            "sesionesEstablecidas": 0,
            "totalPeers": 0,
            "peerFull": 0,
            "version": null,
            "outfileb64": "c3Bhd2Qo=",
            "state": "Master"
        };
        const responseError = {
            "respuestaBoolean": "false",
            "codigoRespuesta": "201",
            "descripcionRespuesta": "No se pudo conectar al equipo 10.180.209.36 CUBITO-PACIUSA-S93-A por el protocolo ssh, por timeout de 30 segundos",
            "fechaSolicitud": "2021-12-01 10:13:59",
            "fechaRespuesta": "2021-12-01 10:14:01",
            "ip": "10.180.7.3",
            "idEjecutor": "pdr",
            "interfaceName": "7/0/3.4085",
            "totalSesiones": 0,
            "sesionesEstablecidas": 0,
            "totalPeers": 0,
            "peerFull": 0,
            "version": null,
            "outfileb64": "c3Bhd2Qo=",
            "state": "Master"
        };
        const response = (random % 2 == 0) ? responseError : responseError;
        res.json(responseSuccess);
        res.status(200);
        res.end();
    });
}
exports.validateVRRP = validateVRRP;
function validacionInterfaces(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(1000);
        res.json(true);
        res.status(200);
        res.end();
    });
}
exports.validacionInterfaces = validacionInterfaces;
function pruebas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(1000);
        res.json(true);
        res.status(200);
        res.end();
    });
}
exports.pruebas = pruebas;
function down(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(1000);
        res.json(true);
        res.status(200);
        res.end();
    });
}
exports.down = down;
function up(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(1000);
        res.json(true);
        res.status(200);
        res.end();
    });
}
exports.up = up;
function DOWN2COMMIT(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(1000);
        res.json({
            "respuestaBoolean": true,
            "codigoRespuesta": "000",
            "descripcionRespuesta": "La interfaz 100GE7/1/1 esta en estado DOWN",
            "mensajeServicio": "No_Message_Found",
            "fechaSolicitud": "2021-12-01 10:16:35",
            "fechaRespuesta": "2021-12-01 10:16:46",
            "ip": "10.180.7.1",
            "idEjecutor": "pdr",
            "interfaceName": "100GE7/1/1",
            "totalSesiones": 0,
            "sesionesEstablecidas": 0,
            "totalPeers": 0,
            "peerFull": 0,
            "version": null,
            "outfileb64": "IyBXZCg==",
            "state": null
        });
        res.status(200);
        res.end();
    });
}
exports.DOWN2COMMIT = DOWN2COMMIT;
function UP2COMMIT(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(1000);
        res.json({
            "respuestaBoolean": true,
            "codigoRespuesta": "000",
            "descripcionRespuesta": "La interfaz 100GE7/1/1 esta en estado UP",
            "mensajeServicio": "No_Message_Found",
            "fechaSolicitud": "2021-12-01 10:16:35",
            "fechaRespuesta": "2021-12-01 10:16:46",
            "ip": "10.180.7.1",
            "idEjecutor": "pdr",
            "interfaceName": "100GE7/1/1",
            "totalSesiones": 0,
            "sesionesEstablecidas": 0,
            "totalPeers": 0,
            "peerFull": 0,
            "version": null,
            "outfileb64": "IyBXZCg==",
            "state": null
        });
        res.status(200);
        res.end();
    });
}
exports.UP2COMMIT = UP2COMMIT;
function obtenerModeloVersionOLT(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(1000);
        const random = Math.floor(Math.random() * 10) * (10 - 1) + 1;
        console.log("random: ", random);
        console.log("req.body: ", req.body);
        console.log("random val: ", random + " - " + (random % 2 == 0));
        const valueVersion = (random % 2 == 0) ? "V800R012C10SPC300" : "MA5800V100R019C10";
        const errorNull = { "ips": null };
        const responseSuccess = {
            "ips": [
                {
                    "ip": req.body.ips[0].ip,
                    "model": "MA5800-X17\r",
                    "descripcion": "LABRADORES_HMO",
                    "marca": "OLT_HUAWEI",
                    "version": "MA5800V100R020C10\r",
                    "outfileb64": ""
                }
            ]
        };
        const nullData = {
            "ips": [
                {
                    "ip": "192.168.1.254",
                    "model": null,
                    "descripcion": null,
                    "marca": null,
                    "version": null,
                    "outfileb64": null
                }
            ]
        };
        if (random % 2 == 0) {
            res.json(nullData);
            res.status(200);
            res.end();
        }
        else {
            res.json(responseSuccess);
            res.status(200);
            res.end();
        }
    });
}
exports.obtenerModeloVersionOLT = obtenerModeloVersionOLT;
