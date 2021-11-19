abstract class Transporte {
    marca: string;
    modelo: string;
    year: number;
    color: string;

    constructor(marca: string, modelo: string, year: number, color: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
    }

    abstract rideInstructions(): string;
}

class Automovil extends Transporte {
    constructor(marca: string, modelo: string, year: number, color: string) {
        super(marca, modelo, year, color);
    }

    rideInstructions() {
        return "Esto se maneja con 3 pedales y un volante"
    }
}

class Motocicleta extends Transporte {
    constructor(marca: string, modelo: string, year: number, color: string) {
        super(marca, modelo, year, color);
    }

    rideInstructions() {
        return ""
    }
}

class MotoDeAgua extends Transporte {
    constructor(marca: string, modelo: string, year: number, color: string) {
        super(marca, modelo, year, color);
    }

    rideInstructions() {
        return ""
    }
}

class Tanque extends Transporte {
    constructor(marca: string, modelo: string, year: number, color: string) {
        super(marca, modelo, year, color);
    }

    rideInstructions() {
        return ""
    }
}

class Avion extends Transporte {
    constructor(marca: string, modelo: string, year: number, color: string) {
        super(marca, modelo, year, color);
    }

    rideInstructions() {
        return ""
    }
}

enum Tipo {
    AUTO = "AUTO",
    MOTOCICLETA = "MOTOCLICLETA",
    MOTO_DE_AGUA = "MOTO_DE_AGUA",
    TANQUE = "TANQUE",
    AVION = "AVION",
}

const sampleTipos: string[] = [
    "AUTO",
    "MOTOCLICLETA",
    "MOTO_DE_AGUA",
    "TANQUE",
    "AVION",
];

const samples2 = {
    AUTO: [
        { marca: "Toyota", modelo: "Supra", year: 1978, color: "Blanco" },
        { marca: "Nissan", modelo: "R32 Skyline", year: 1990, color: "Gris" },
        { marca: "Nissan", modelo: "NSX", year: 2021, color: "Azul" },
    ],
};

// let Motocicleta1 = new Motocicleta("Kawasaki", "H2R", 2019, "negro y verde");
// let Motocicleta2 = new Motocicleta(
//     "Ktm",
//     "Super Duke R",
//     2022,
//     "naranja y blanco"
// );
// let Motocicleta3 = new Motocicleta(
//     "Ducati",
//     "Leggera V4",
//     2020,
//     "rojo y blanco"
// );

// let MotoDeAgua1 = new MotoDeAgua("Yamaha", "Vxr", 2018, "negra y azul");
// let MotoDeAgua2 = new MotoDeAgua("Nikola", "WAV", 2020, "Azul");
// let MotoDeAgua3 = new MotoDeAgua("Kawasaki", "SXR", 2020, "negro y verde");

// let Tanque1 = new Tanque("Panzer", "King Tiger II", 1943, "gris");
// let Tanque2 = new Tanque("AntiTank", "T95", 1943, "green");
// let Tanque3 = new Tanque("Stridsvagn", "103", 1965, "green");

// let Avion1 = new Avion("Boeing", "747", 1970, "blanco");
// let Avion2 = new Avion("Lockheed Martin", "F-22 Raptor", 1997, "gris");
// let Avion3 = new Avion("Thunderbolt II", "A-10A", 1972, "gris");

const tipo: Tipo = sampleTipos[Math.floor(Math.random() * sampleTipos.length)] as Tipo;
const transporte: Transporte = samples2[tipo][Math.floor(Math.random() * samples2[tipo].length)]

console.log(transporte);
console.log(transporte.rideInstructions());
