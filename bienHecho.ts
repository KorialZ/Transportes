interface Transporte {
    marca: string;
    modelo: string;
    year: number;
    color: string;
    isJet?: boolean;
    isVapor?: boolean;
}

interface AvionInterface extends Transporte {
    calibre: string
}

enum TipoTransporte {
    TREN = "TREN",
    AVION = "AVION",
}

const sampleTypes: TipoTransporte[] = [
    TipoTransporte.TREN,
    TipoTransporte.AVION,
];

const samples: { [tipo: string]: Transporte[] } = {
    TREN: [
        {
            marca: "Tudu",
            modelo: "Tudu2",
            year: 333,
            color: "Tudu4",
            isVapor: true,
        },
        {
            marca: "Gadu",
            modelo: "Gadu2",
            year: 3333,
            color: "Gadu4",
            isVapor: false,
        },
    ],
    AVION: [
        {
            marca: "Dudu",
            modelo: "Dudu2",
            year: 3,
            color: "Dudu4",
            isJet: true,
        },
        {
            marca: "Dadu",
            modelo: "Dadu2",
            year: 33,
            color: "Dadu4",
            isJet: false,
        },
    ],
};

class MartoAvion implements Transporte {
    marca: string;
    modelo: string;
    year: number;
    color: string;
    isJet: boolean;

    constructor(
        marca: string,
        modelo: string,
        year: number,
        color: string,
        isJet: boolean
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.isJet = isJet;
    }
}

class MartoTren implements Transporte {
    marca: string;
    modelo: string;
    year: number;
    color: string;
    isVapor: boolean;

    constructor(
        marca: string,
        modelo: string,
        year: number,
        color: string,
        isVapor: boolean
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.isVapor = isVapor;
    }
}

class TransportBuilder {
    public static createTransport(
        type: TipoTransporte,
        transporte: Transporte
    ): Transporte {
        if (type === TipoTransporte.AVION) {
            return new MartoAvion(
                transporte.marca,
                transporte.modelo,
                transporte.year,
                transporte.color,
                transporte.isJet
            );
        } else if (type === TipoTransporte.TREN) {
            return new MartoTren(
                transporte.marca,
                transporte.modelo,
                transporte.year,
                transporte.color,
                transporte.isVapor
            );
        }

        return null;
    }
}

const pickRandom = (arr: any[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const pickedType = pickRandom(sampleTypes);
const picked = pickRandom(samples[pickedType]);

const myVehicle = TransportBuilder.createTransport(pickedType, picked);

console.log(myVehicle);
