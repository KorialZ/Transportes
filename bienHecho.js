var TipoTransporte;
(function (TipoTransporte) {
    TipoTransporte["TREN"] = "TREN";
    TipoTransporte["AVION"] = "AVION";
})(TipoTransporte || (TipoTransporte = {}));
var sampleTypes = [
    TipoTransporte.TREN,
    TipoTransporte.AVION,
];
var samples = {
    TREN: [
        {
            marca: "Tudu",
            modelo: "Tudu2",
            year: 333,
            color: "Tudu4",
            isVapor: true
        },
        {
            marca: "Gadu",
            modelo: "Gadu2",
            year: 3333,
            color: "Gadu4",
            isVapor: false
        },
    ],
    AVION: [
        {
            marca: "Dudu",
            modelo: "Dudu2",
            year: 3,
            color: "Dudu4",
            isJet: true
        },
        {
            marca: "Dadu",
            modelo: "Dadu2",
            year: 33,
            color: "Dadu4",
            isJet: false
        },
    ]
};
var MartoAvion = /** @class */ (function () {
    function MartoAvion(marca, modelo, year, color, isJet) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.isJet = isJet;
    }
    return MartoAvion;
}());
var MartoTren = /** @class */ (function () {
    function MartoTren(marca, modelo, year, color, isVapor) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.isVapor = isVapor;
    }
    return MartoTren;
}());
var TransportBuilder = /** @class */ (function () {
    function TransportBuilder() {
    }
    TransportBuilder.createTransport = function (type, transporte) {
        if (type === TipoTransporte.AVION) {
            return new MartoAvion(transporte.marca, transporte.modelo, transporte.year, transporte.color, transporte.isJet);
        }
        else if (type === TipoTransporte.TREN) {
            return new MartoTren(transporte.marca, transporte.modelo, transporte.year, transporte.color, transporte.isVapor);
        }
        return null;
    };
    return TransportBuilder;
}());
var pickRandom = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};
var pickedType = pickRandom(sampleTypes);
var picked = pickRandom(samples[pickedType]);
var myVehicle = TransportBuilder.createTransport(pickedType, picked);
console.log(myVehicle);
