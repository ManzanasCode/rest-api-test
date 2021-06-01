export interface ITicket {
    tiempos: {
        ETA: Date,
        ETR: Date,
        valueETA: string,
        valueETR: string
    },
    diagnostico: {
        flagDisplay: boolean,
        value: string
    },
    solucion: {
        flagDisplay: boolean,
        value: string
    },
    comentarios: {
        flagDisplay: boolean,
        value: string
    },
    justificacion: {
        flagDisplay: boolean,
        value: string
    },
    geolocaclizacion: {
        flagDisplay: boolean,
        value: string
    },
    areaResolutora: {
        flagDisplay: boolean,
        value: string
    },
    subirArchivo: {
        flagDisplay: boolean,
        value: string
    },
    resolver: boolean,
    edicion: boolean,
    flagDetalle: boolean,
    geoConfig: {
        flagAnimation: boolean,
        flagData: boolean,
        latitude: string,
        longitude: string
    },
    listFiles: string[],
    listPhotos: string[]

}


export interface foo {
    one: number;
    two: string;
}