$(document).ready(function () { 
//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa
//con le seguenti proprietà: nome e peso. Stampare a schermo la bici 
//con peso minore utilizzando destructuring e template literal
/*var biciclette = [
    {
        "nome" : colnago,
        "peso" : 4,
    },
    {
        "nome" : coppi,
        "peso" : 6,
    },
    {
        "nome" : merida,
        "peso" : 9,
    },
    {
        "nome" : campagnolo,
        "peso" : 7,
    },
    {
        "nome" : atala,
        "peso" : 20,
    }
] */
var biciclette = [
    {name: 'colnago', peso: 2},
    {name: 'bianchi', peso: 1},
    {name: 'coppi', peso: 5}
];

function findBicycles(bici) {
    let tmp = [];

    for (let i = 0; i < tmp.length; i++ ) {

    }
    return bici.name === 'bianchi';
}

console.log(biciclette.find(findBicycles));

});

/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate
a 0. Generare numeri random al posto degli 0 nelle proprietà: 
Punti fatti e falli subiti.Infine usando la destrutturazione creiamo 
un nuovo array i cui elementi contengono solo nomi e falli subiti e 
stampiamo tutto in console. */

const squadre = [
    {
        "nome" : "squadra1",
        "punti" : 0,
        "falli" : 0,
    },
    {
        "nome" : "squadra2",
        "punti" : 0,
        "falli" : 0,
    },
    {
        "nome" : "squadra3",
        "punti" : 0,
        "falli" : 0,
    },
    {
        "nome" : "squadra4",
        "punti" : 0,
        "falli" : 0,
    },
    {
        "nome" : "squadra5",
        "punti" : 0,
        "falli" : 0,
    },
    {
        "nome" : "squadra6",
        "punti" : 0,
        "falli" : 0,
    },
]

squadre.forEach((element) => {
    element.punti = Math.floor(Math.random() * 10) + 1;
    element.falli = Math.floor(Math.random() * 10) + 1; 
    });

    console.log(`$(element.nome) + $(element.falli)`);




