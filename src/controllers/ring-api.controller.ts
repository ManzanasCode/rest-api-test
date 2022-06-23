import { Request, Response } from 'express'


function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getAnillos(req: Request, res: Response): Promise<Response | void> {

    const jsonResponse =
    {
        "anillos": [
            {
                "id": 22,
                "anillo": "FAROLILLO A",
                "estatus": 2,
                "bloqueo": 0,
                "fechacreacion": "2022-05-02 15:36:55",
                "fechamodificacion": "2022-05-02 15:36:55",
                "usuarioalta": "rcruzv",
                "usuariomodifica": "rcruzv",
                "inactivo": 1,
                "id_cmdb": "0x2c7d201c058f9c45ae12e39133c59918"
            },
            {
                "id": 101,
                "anillo": "XALAPA A",
                "estatus": 2,
                "bloqueo": 0,
                "fechacreacion": "2022-06-07 15:51:15",
                "fechamodificacion": "2022-06-07 15:51:15",
                "usuarioalta": "rcruzv",
                "usuariomodifica": "rcruzv",
                "inactivo": 1,
                "id_cmdb": "0x2969fdbf3778af47b597117b5c30144a"
            },
        ]
    }

    res.json(jsonResponse);
    res.status(200)
    res.end()
}

export async function getDetalleAnillo(req: Request, res: Response): Promise<Response | void> {

    console.log("****** getDetalleAnillo: ", req.body)
    let jsonResponse = {}

    const xalapa =
    {
        "anillos": [
            {
                "id": 101,
                "anillo": "XALAPA A",
                "estatus": 2,
                "id_cmdb": "0x2969fdbf3778af47b597117b5c30144a",
                "noNodos": 0,
                "version": 1,
                "nodos": [
                    {
                        "equipo": "TELXAL-VERSSSS-X8A-CA-A",
                        "ip": "10.180.7.9",
                        "mpls": "10.180.7.8",
                        "vrrp": "no",
                        "orden": "1",
                        "interfaz": "100GE8/1/0",
                        "down": "NO",
                        "lldp": "SI",
                        "conectacon": "LAZCAR-VERZ-XLPA-0034-M14-A",
                        "ipcolectorvalidacionserviciodatosping": null,
                        "iplanwanvalidacionserviciodatos": null,
                        "ipolt": null,
                        "posont": null,
                        "ipdestinovalidacioninternetont": null,
                        "modelo": null,
                        "version": "V800R012C10SPC300"
                    },
                    {
                        "equipo": "LAZCAR-VERZ-XLPA-0034-M14-A",
                        "ip": "10.180.147.15",
                        "mpls": null,
                        "vrrp": "no",
                        "orden": "2",
                        "interfaz": "50|100GE0/14/0",
                        "down": "NO",
                        "lldp": "SI",
                        "conectacon": "PORCOL-XAL146977-S93-A",
                        "ipcolectorvalidacionserviciodatosping": null,
                        "iplanwanvalidacionserviciodatos": "10.216.16.210",
                        "ipolt": "10.180.217.135",
                        "posont": "0/1/0 1",
                        "ipdestinovalidacioninternetont": "www.huawei.com",
                        "modelo": null,
                        "version": "V800R012C10SPC300"
                    },
                    {
                        "equipo": "PORCOL-XAL146977-S93-A",
                        "ip": "10.180.7.165",
                        "mpls": null,
                        "vrrp": "no",
                        "orden": "3",
                        "interfaz": "100GE1/0/0",
                        "down": "NO",
                        "lldp": "SI",
                        "conectacon": "JARXAL-XAL147950-S93-A",
                        "ipcolectorvalidacionserviciodatosping": "10.59.244.108",
                        "iplanwanvalidacionserviciodatos": "10.216.16.210",
                        "ipolt": "10.180.217.136",
                        "posont": "0/1/0 1",
                        "ipdestinovalidacioninternetont": "www.cisco.com",
                        "modelo": null,
                        "version": null
                    },
                    {
                        "equipo": "JARXAL-XAL147950-S93-A",
                        "ip": "10.180.7.168",
                        "mpls": null,
                        "vrrp": "no",
                        "orden": "4",
                        "interfaz": "100GE1/0/0",
                        "down": "NO",
                        "lldp": "SI",
                        "conectacon": "TREBOL-XAL143559-S93-A",
                        "ipcolectorvalidacionserviciodatosping": null,
                        "iplanwanvalidacionserviciodatos": null,
                        "ipolt": null,
                        "posont": null,
                        "ipdestinovalidacioninternetont": null,
                        "modelo": null,
                        "version": null
                    },
                    {
                        "equipo": "TREBOL-XAL143559-S93-A",
                        "ip": "10.180.7.167",
                        "mpls": null,
                        "vrrp": "no",
                        "orden": "5",
                        "interfaz": "100GE1/0/0",
                        "down": "NO",
                        "lldp": "SI",
                        "conectacon": "TELXAL-VERSSSS-X8A-CA-A",
                        "ipcolectorvalidacionserviciodatosping": null,
                        "iplanwanvalidacionserviciodatos": null,
                        "ipolt": null,
                        "posont": null,
                        "ipdestinovalidacioninternetont": null,
                        "modelo": null,
                        "version": null
                    }
                ]
            }
        ]
    }

    const farolillo =
    {
        "anillos": [
            {
                "id": 22,
                "anillo": "FAROLILLO A",
                "id_cmdb": "0x2c7d201c058f9c45ae12e39133c59918",
                "estatus": 2,
                "noNodos": 0,
                "version": 1,
                "nodos": [
                    {
                        "equipo": "ZONCEN-NVL4034-X8A-CA",
                        "ip": "10.180.4.7",
                        "mpls": "10.180.204.30",
                        "vrrp": "8/1/3.4083",
                        "orden": "1",
                        "interfaz": "100GE1/1/0",
                        "down": "NO",
                        "lldp": "SI",
                        "conectacon": "KIO-MTY-NE40E-X8A",
                        "ipcolectorvalidacionserviciodatosping": null,
                        "iplanwanvalidacionserviciodatos": null,
                        "ipolt": null,
                        "posont": null,
                        "ipdestinovalidacioninternetont": null,
                        "modelo": null,
                        "version": "V800R012C10SPC300"
                    },
                    {
                        "equipo": "KIO-MTY-NE40E-X8A",
                        "ip": "10.180.204.13",
                        "mpls": "10.180.6.18",
                        "vrrp": "8/1/3.4083",
                        "orden": "2",
                        "interfaz": "50|100GE8/1/4",
                        "down": "SI",
                        "lldp": "SI",
                        "conectacon": "PLAZA100-NLEO-MONT-0062-M14-CA",
                        "ipcolectorvalidacionserviciodatosping": null,
                        "iplanwanvalidacionserviciodatos": "10.216.16.210",
                        "ipolt": "10.180.214.103",
                        "posont": "0/1/0 4",
                        "ipdestinovalidacioninternetont": "www.cisco.com",
                        "modelo": null,
                        "version": "V800R012C10SPC300"
                    },
                    {
                        "equipo": "PLAZA100-NLEO-MONT-0062-M14-CA",
                        "ip": "10.180.204.57",
                        "mpls": null,
                        "vrrp": null,
                        "orden": "3",
                        "interfaz": "50|100GE0/14/0",
                        "down": "NO",
                        "lldp": "SI",
                        "conectacon": "PEDGAR-MTY145787-S93-A",
                        "ipcolectorvalidacionserviciodatosping": "10.59.244.111",
                        "iplanwanvalidacionserviciodatos": "10.216.16.210",
                        "ipolt": null,
                        "posont": null,
                        "ipdestinovalidacioninternetont": null,
                        "modelo": "NE40E",
                        "version": "V800R012C10SPC300"
                    },
                    {
                        "equipo": "PEDGAR-MTY145787-S93-A",
                        "ip": "10.180.4.139",
                        "mpls": null,
                        "vrrp": null,
                        "orden": "4",
                        "interfaz": "100GE1/0/1",
                        "down": "SI",
                        "lldp": "SI",
                        "conectacon": "HUMLOB-NVL4039-S93-A",
                        "ipcolectorvalidacionserviciodatosping": null,
                        "iplanwanvalidacionserviciodatos": null,
                        "ipolt": null,
                        "posont": null,
                        "ipdestinovalidacioninternetont": null,
                        "modelo": null,
                        "version": null
                    },
                    {
                        "equipo": "HUMLOB-NVL4039-S93-A",
                        "ip": "10.180.4.138",
                        "mpls": null,
                        "vrrp": null,
                        "orden": "5",
                        "interfaz": "100GE1/0/1",
                        "down": "NO",
                        "lldp": "SI",
                        "conectacon": "GALERI-MTY133651-S93-A",
                        "ipcolectorvalidacionserviciodatosping": null,
                        "iplanwanvalidacionserviciodatos": "10.216.16.210",
                        "ipolt": "10.180.214.105",
                        "posont": "0/5/0 14",
                        "ipdestinovalidacioninternetont": "www.huawei.com",
                        "modelo": null,
                        "version": null
                    },
                    {
                        "equipo": "GALERI-MTY133651-S93-A",
                        "ip": "10.180.4.135",
                        "mpls": null,
                        "vrrp": null,
                        "orden": "6",
                        "interfaz": "100GE1/0/1",
                        "down": "SI",
                        "lldp": "SI",
                        "conectacon": "ZONCEN-NVL4034-X8A-CA",
                        "ipcolectorvalidacionserviciodatosping": null,
                        "iplanwanvalidacionserviciodatos": null,
                        "ipolt": null,
                        "posont": null,
                        "ipdestinovalidacioninternetont": null,
                        "modelo": null,
                        "version": null
                    }
                ]
            }
        ]
    }
    
    jsonResponse = ( req.body.onfigName == 'FAROLILLO A') ? farolillo : xalapa
    res.json(jsonResponse);
    res.status(200)
    res.end()
}