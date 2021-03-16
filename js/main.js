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
/*var biciclette = [
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

});*/

/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate
a 0. Generare numeri random al posto degli 0 nelle proprietà: 
Punti fatti e falli subiti.Infine usando la destrutturazione creiamo 
un nuovo array i cui elementi contengono solo nomi e falli subiti e 
stampiamo tutto in console. */

/*const squadre = [
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

    console.log(`$(element.nome) + $(element.falli)`);*/


//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//Usiamo i nuovi metodi degli array foreach o filter

var array1 = ["a","b","c","d","e","f"];
var primo = 2;
var secondo = 6;
var newArray = [];


//metodo con forEach
newArray = Prova(array1, primo,secondo);
console.log(newArray);

function Prova(array,a,b) {
 var risultato = [];

 array.forEach((element, index) => {
     if (index > a && index < b) {
         risultato.push(element);
     }
 });
 return risultato;
}


//metodo con filter
/*newArray = array1.filter((element, index) => {      (esempio di sintassi ottimizzata)
    return index > a && index < b;
 });*/

newArray = provaFilter(array1, primo, secondo);
console.log(newArray);

function provaFilter (array,a,b) {
    return array.filter((element, index) => {
        return index > a && index < b;
     });
}

