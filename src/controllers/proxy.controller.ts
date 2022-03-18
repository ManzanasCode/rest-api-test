import { Request, Response } from 'express'


export async function getCredentials(req: Request, res: Response): Promise<Response | void> {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Credentials", "true")

  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method,');
  res.header('content-type: application/json; charset=utf-8')
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");



  const jsonResponse =
  {
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
  }

  res.json(jsonResponse);
  res.status(200)
  res.end()
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function token(req: Request, res: Response): Promise<Response | void> {

  await sleep(2000)

  const jsonResponse =
    { "access_token": "9eacea48-ef19-4fda-b86d-883156e15771", "token_type": "bearer", "refresh_token": "dcf1e961-506a-465c-a08d-c815ec4cdaaa", "expires_in": 43199, "scope": "read write trust" }

  res.json(jsonResponse);
  res.status(200)
  res.end()
}


export async function userLog(req: Request, res: Response): Promise<Response | void> {

  await sleep(2000)

  const jsonResponse =
  {
    "status": "C",
    "code": "200",
    "response": "Exito al registrar la bitácora"
  }

  res.json(jsonResponse);
  res.status(200)
  res.end()
}


export async function consultarRFC(req: Request, res: Response): Promise<Response | void> {

  await sleep(2000)

  const jsonResponse =
  {
    "rfc": "157088",
    "mensaje": null,
    "success": true
  }


  res.json(jsonResponse);
  res.status(200)
  res.end()
}

export async function evidences(req: Request, res: Response): Promise<Response | void> {

  await sleep(3000)

  const jsonResponse =
  {
    "status": "C",
    "code": "200",
    "response": "El servicio se ejecutó correctamente"
  }

  res.json(jsonResponse);
  res.status(200)
  res.end()
}

export async function changestatus(req: Request, res: Response): Promise<Response | void> {

  await sleep(2000)

  const jsonResponse =
  {
    "status": "C",
    "code": "200",
    "response": "El servicio se ejecutó correctamente"
  }


  res.json(jsonResponse);
  res.status(200)
  res.end()
}

export async function getIpRfc(req: Request, res: Response): Promise<Response | void> {

  await sleep(2000)

  const jsonResponse =
  {
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
  }

  res.json(jsonResponse);
  res.status(200)
  res.end()
}


export async function ejecutaProtocolos(req: Request, res: Response): Promise<Response | void> {

  const jsonResponse = true

  res.json(jsonResponse);
  res.status(200)
  res.end()
}

export async function validacionacceso(req: Request, res: Response): Promise<Response | void> {
  const jsonResponse = true
  res.json(jsonResponse);
  res.status(200)
  res.end()
}



export async function getPerformance(req: Request, res: Response): Promise<Response | void> {

  var regreso = (Math.floor(Math.random() * 2)) == 1 ? "100" : "50";
  res.json(regreso);
  res.status(200)
  res.end()
}


export async function datosOSPFv2(req: Request, res: Response): Promise<Response | void> {

  await sleep(1000)

  console.log("OSPF Req: ", JSON.stringify(req.body))
  res.json({});
  res.status(200)
  res.end()
}

export async function validacionLLDP(req: Request, res: Response): Promise<Response | void> {

  await sleep(3000)


  res.json({
    "success": true,
    "timeRes": "7 s, 779 ms",
    "error": "",
    "mssg": "Ejecucion de LLDP correcta, anillo:ECATEPEC_CENTRO_B",
    "total": 1,
    "data": [
      {
        "anillo": "ECATEPEC_CENTRO_B",
        "equipo": "LA-PAZ-PUE7013-X8-CA",
        "prueba": "LLDP",
        "outfileb64": "c3BhQ0E+",
        "error_level": "0",
        "interfaz": null,
        "desc": null,
        "ipolt": null
      }
    ],
    "prueba": "LLDP",
    "conCortes": 0,
    "executionSkipped": false
  });
  res.status(200)
  res.end()
}

export async function validateVRRP(req: Request, res: Response): Promise<Response | void> {

  await sleep(3000)

  console.log("validateVRRP: ", req.body)
  res.json({
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
  });
  res.status(200)
  res.end()
}


export async function validacionInterfaces(req: Request, res: Response): Promise<Response | void> {

  await sleep(3000)

  res.json(true);
  res.status(200)
  res.end()
}


export async function down(req: Request, res: Response): Promise<Response | void> {
  await sleep(3000)
  res.json(true);
  res.status(200)
  res.end()
}

export async function up(req: Request, res: Response): Promise<Response | void> {
  await sleep(3000)
  res.json(true);
  res.status(200)
  res.end()
}

export async function DOWN2COMMIT(req: Request, res: Response): Promise<Response | void> {
  await sleep(3000)
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
  res.status(200)
  res.end()
}


export async function UP2COMMIT(req: Request, res: Response): Promise<Response | void> {
  await sleep(3000)
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
  res.status(200)
  res.end()
}

export async function obtenerModeloVersionOLT(req: Request, res: Response): Promise<Response | void> {
  await sleep(1000)
  const random = Math.random() * (10 - 1) + 1;
  console.log("random: ", random)

  const valueModel = (random % 2 == 0) ? "V800R012C10SPC300": "MA5800V100R019C10"


  res.json({
    "ips": [
      {
        "descripcion": "LW_140639_CHIHUAHUA-CARRANZA",
        "ip": "LW_140639_CHIHUAHUA-CARRANZA",
        "marca": "10.59.244.76",
        "version": "HUAWEI",
        "model": valueModel,
        "outfileb64": null
      }
    ]
  });
  res.status(200)
  res.end()
}
