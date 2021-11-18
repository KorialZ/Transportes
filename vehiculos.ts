class Transporte {
    marca;
    modelo;
    year;
    color;
    
    constructor(marca = "string", modelo= "string", year = 0, color= "string") {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
    }   
}

class Automovil extends Transporte {
    
    constructor(marca = "string", modelo= "string", year = 0, color= "string") {
        marca = marca;
        modelo = modelo;
        year = year;
        color = color;
        super(marca, modelo, year, color);
    }
}

class Motocicleta extends Transporte {
    
    constructor(marca= "string", modelo= "string", year = 0, color= "string") {
        marca = marca;
        modelo = modelo;
        year = year;
        color = color;
        super(marca, modelo, year, color);
    }    
}

class MotoDeAgua extends Transporte {
    
    constructor(marca= "string", modelo= "string", year = 0, color= "string") {
        marca = marca;
        modelo = modelo;
        year = year;
        color = color;
        super(marca, modelo, year, color);
    }    
}

class Tanque extends Transporte {
    
    constructor(marca= "string", modelo= "string", year = 0, color= "string") {
        marca = marca;
        modelo = modelo;
        year = year;
        color = color;
        super(marca, modelo, year, color, );
    } 
}

class Avion extends Transporte {
    
    constructor(marca= "string", modelo= "string", year = 0, color= "string") {
        marca = marca;
        modelo = modelo;
        year = year;
        color = color;
        super(marca, modelo, year, color);
    }   
}

let Automovil1 = new Automovil("Toyota", "Supra", 1978, "Blanco");
let Automovil2 = new Automovil("Nissan", "R32 Skyline", 1990, "Gris");
let Automovil3 = new Automovil("Nissan", "NSX", 2021, "Azul");

let Motocicleta1 = new Motocicleta("Kawasaki", "H2R", 2019, "negro y verde");
let Motocicleta2 = new Motocicleta("Ktm", "Super Duke R", 2022, "naranja y blanco");
let Motocicleta3 = new Motocicleta("Ducati", "Leggera V4", 2020, "rojo y blanco");

let MotoDeAgua1 = new MotoDeAgua("Yamaha", "Vxr", 2018, "negra y azul");
let MotoDeAgua2 = new MotoDeAgua("Nikola", "WAV", 2020, "Azul");
let MotoDeAgua3 = new MotoDeAgua("Kawasaki", "SXR", 2020, "negro y verde");

let Tanque1 = new Tanque("Panzer", "King Tiger II", 1943, "gris");
let Tanque2 = new Tanque("AntiTank", "T95", 1943, "green");
let Tanque3 = new Tanque("Stridsvagn", "103", 1965, "green");

let Avion1 = new Avion("Boeing", "747", 1970, "blanco");
let Avion2 = new Avion("Lockheed Martin", "F-22 Raptor", 1997, "gris");
let Avion3 = new Avion("Thunderbolt II", "A-10A", 1972, "gris");

let Transportes = 
    [   Automovil1, Automovil2, Automovil3,
        Motocicleta1, Motocicleta2, Motocicleta3, 
        MotoDeAgua1, MotoDeAgua2, MotoDeAgua3,
        Tanque1, Tanque2, Tanque3, 
        Avion1, Avion2, Avion3
    ];

var item = Transportes[Math.floor(Math.random()*Transportes.length)];

console.log(item);