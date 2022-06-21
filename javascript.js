// Array de objetos. Cada objeto representa una casilla del tablero y tiene las siguinetes propiedades.
// Ocupado: es un booleano que sirve para saber si la casilla esta ocupada o no por una ficha.
// Nombre: String que identifica el objeto con la etiqueta html. 
// Jugador: number que se utiliza para asociar la casilla a u jugador 1 ó 2 y a ninguno si es 0.
var tabla1 = [
    {
        ocupado: false,
        nombre: 'A1',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'A2',
        jugador: 0,
    },
    {
        ocupado: false,
        nombre: 'A3',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'A4',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'A5',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'A6',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'A7',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'B1',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'B2',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'B3',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'B4',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'B5',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'B6',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'B7',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'C1',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'C2',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'C3',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'C4',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'C5',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'C6',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'C7',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'D1',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'D2',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'D3',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'D4',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'D5',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'D6',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'D7',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'E1',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'E2',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'E3',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'E4',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'E5',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'E6',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'E7',
        jugador: 0,
    },
    {
        ocupado: false,
        nombre: 'F1',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'F2',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'F3',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'F4',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'F5',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'F6',
        jugador: 0
    },
    {
        ocupado: false,
        nombre: 'F7',
        jugador: 0
    }

];

// Objeto jugador con um number que ejerce de identificador y un booleano para definir su estado en el juego.
var jugador1 = {
    id: 1,
    activo: true
}

var jugador2 = {
    id: 2,
    activo: false
}

// Array de arrays. Cada array contiene una combinación ganadora.
var jugadasGanadoras = [
    ['A1', 'A2', 'A3', 'A4'],
    ['A1', 'B1', 'C1', 'D1'],
    ['A1', 'B2', 'C3', 'D4'],

    ['B1', 'B2', 'B3', 'B4'],
    ['B1', 'C2', 'D3', 'E4'],
    ['B1', 'C2', 'D3', 'E4'],

    ['C1', 'C2', 'C3', 'C4'],
    ['C1', 'D1', 'E1', 'F1'],
    ['C1', 'D2', 'E3', 'F4'],

    ['D1', 'D2', 'D3', 'D4'],
    ['D1', 'C2', 'B3', 'A4'],

    ['E1', 'E2', 'E3', 'E4'],
    ['E1', 'D2', 'C3', 'B4'],

    ['F1', 'F2', 'F3', 'F4'],
    ['F1', 'E2', 'D3', 'C4'],
    ////////////////////////////////

    ['A2', 'A3', 'A4', 'A5'],
    ['A2', 'B2', 'C2', 'D2'],
    ['A2', 'B3', 'C4', 'D5'],

    ['B2', 'B3', 'B4', 'B5'],
    ['B2', 'C3', 'D4', 'E5'],
    ['B2', 'C2', 'D2', 'E2'],

    ['C2', 'C3', 'C4', 'C5'],
    ['C2', 'D3', 'E4', 'F5'],
    ['C2', 'D2', 'E2', 'F2'],

    ['D2', 'D3', 'D4', 'D5'],
    ['D2', 'C3', 'B4', 'A5'],

    ['E2', 'E3', 'E4', 'E5'],
    ['E2', 'D3', 'C4', 'B5'],

    ['F2', 'F3', 'F4', 'F5'],
    ['F2', 'E3', 'D4', 'C5'],
    ///////////////////////////////

    ['A3', 'A4', 'A5', 'A6'],
    ['A3', 'B3', 'C3', 'D3'],
    ['A3', 'B4', 'C5', 'D6'],

    ['B3', 'B4', 'B5', 'B6'],
    ['B3', 'C4', 'D5', 'E6'],
    ['B3', 'C3', 'D3', 'E3'],

    ['C3', 'C4', 'C5', 'C6'],
    ['C3', 'D4', 'E5', 'F6'],
    ['C3', 'D3', 'E3', 'F3'],

    ['D3', 'D4', 'D5', 'D6'],
    ['D3', 'C4', 'B5', 'A6'],

    ['E3', 'E4', 'E5', 'E6'],
    ['E3', 'D4', 'C5', 'B6'],

    ['F3', 'F4', 'F5', 'F6'],
    ['F3', 'E4', 'D5', 'C6'],
    ///////////////////////////////

    ['A4', 'A5', 'A6', 'A7'],
    ['A4', 'B4', 'C4', 'D4'],
    ['A4', 'B5', 'C6', 'D7'],

    ['B4', 'B5', 'B6', 'B7'],
    ['B4', 'C5', 'D6', 'E7'],
    ['B4', 'C4', 'D4', 'E4'],
    ['B4', 'C3', 'D2', 'E1'],

    ['C4', 'C5', 'C6', 'C7'],
    ['C4', 'D5', 'E6', 'F7'],
    ['C4', 'D4', 'E4', 'F4'],
    ['C4', 'D3', 'E2', 'F1'],

    ['D4', 'D5', 'D6', 'D7'],
    ['D4', 'C5', 'B6', 'A7'],

    ['E4', 'E5', 'E6', 'E7'],
    ['E4', 'D5', 'C6', 'B7'],

    ['F4', 'F5', 'F6', 'F7'],
    ['F4', 'E5', 'D6', 'C7'],
    ///////////////////////////////

    ['A5', 'B5', 'C5', 'D5'],

    ['B4', 'C5', 'D6', 'E7'],

    ['C4', 'D4', 'E4', 'F4'],
    ///////////////////////////////

    ['A6', 'B6', 'C6', 'D6'],

    ['B6', 'C6', 'D6', 'E6'],

    ['C6', 'D6', 'E6', 'F6'],
    ///////////////////////////////

    ['A7', 'B7', 'C7', 'D7'],

    ['B7', 'C7', 'D7', 'E7'],

    ['C7', 'D7', 'E7', 'F7'],
];

// String que contendrá el mensaje con el ganador del juago cuando esto ocurra.
var mensaje = '';

// Variable number que especifica el jugador que está activo.
var jugador = 1;
document.getElementById('jugadorNum').innerHTML = jugador;

// Array que almacena las jugadas del juagador 1.
var ocupadasJugador1 = [];
// Array que almacena las jugadas del juagador 2.
var ocupadasJugador2 = [];
// Variables number que servira de contador de las casillas que estén dentro de una combinación ganadora
var lineaGanadora01 = 0;
var lineaGanadora02 = 0;

// Bucle que recorre el array tabla1 que contiene las casillas y las colorea de blanco.
for (var i = 0; i < tabla1.length; i++) {
        document.getElementById(tabla1[i].nombre).style.backgroundColor = 'white';
};

/*
Función que recorre las casillas de la tabla, rellena los arrays especificos con las tiradas de cada jugador
y despues recorre el array de jugadas acertadas buscando las coincidencias con el arreglo de cada uno de los jugadores, si 
encuentra una coincidencia avisa del jugador ganador.
*/
function buscarganadores(tira) {
    if (tira.ocupado == true) {
        if (tira.jugador == 1) {
            ocupadasJugador1.push(tira.nombre)
        }
        if (tira.jugador == 2) {
            ocupadasJugador2.push(tira.nombre)
        }
    }
    // Jugador 01
    for (var x = 0; x < jugadasGanadoras.length; x++) {
        lineaGanadora01 = 0;
        for (var i = 0; i < ocupadasJugador1.length; i++) {
            if (jugadasGanadoras[x].includes(ocupadasJugador1[i])) {
                lineaGanadora01++;               
            } 
            if (lineaGanadora01 > 3) {
                mensaje = 'El jugador uno ha ganado';
                document.getElementById('ganador').style.display = 'block';
                document.getElementById('ganador').innerHTML = mensaje;
            }
        }
    }
    // Jugador 02
    for (var x = 0; x < jugadasGanadoras.length; x++) {
        lineaGanadora02 = 0;
        for (var i = 0; i < ocupadasJugador2.length; i++) {
            if (jugadasGanadoras[x].includes(ocupadasJugador2[i])) {
                lineaGanadora02++;          
            } if (lineaGanadora02 > 3) {
                mensaje = 'El jugador dos ha ganado';
                document.getElementById('ganador').style.display = 'block';
                document.getElementById('ganador').innerHTML = mensaje;
            }
        }
    }
}

// Función que cambia el juagador en activo.
function jugadorNum() {
    if (jugador == 2) {
        jugador = 1;
    } else {
        jugador = 2
    }
    document.getElementById('jugadorNum').innerHTML = jugador;
}

/* Función que recibe como argumento un número de columna, revisa las casillas de la columna para ver la última 
ocupada y coloca la nueva ficha encima de la misma con el color que corresponda al jugador en activo.
Al final llama a la funcion que cambia el jugador en activo y a la función que busca si alguno de los jugadores 
ha hecho una combinación ganadora. 
*/
function tirada(tar) {
    var tirada;
    switch (tar) {
        case '1':
            for (var i = 0; i < tabla1.length; i++) {
                if (tabla1[i].nombre.substring(1) == '1') {
                    if (tabla1[i].ocupado == false) {
                        if (jugador == 1) {
                            document.getElementById(tabla1[i].nombre).style.backgroundColor = 'red';
                            tabla1[i].ocupado = true;
                            tabla1[i].jugador = jugador;
                            tirada = tabla1[i];
                            break;
                        }
                        if (jugador == 2) {
                            document.getElementById(tabla1[i].nombre).style.backgroundColor = 'yellow';
                            tabla1[i].ocupado = true;
                            tabla1[i].jugador = jugador;
                            tirada = tabla1[i];
                            break;
                        }
                    }
                }
            };
            break;
        case '2':
            for (var i = 0; i < tabla1.length; i++) {
                if (tabla1[i].nombre.substring(1) == '2') {
                    if (tabla1[i].ocupado == false) {
                        if (jugador == 1) {
                            document.getElementById(tabla1[i].nombre).style.backgroundColor = 'red';
                            tabla1[i].ocupado = true;
                            tabla1[i].jugador = jugador
                            tirada = tabla1[i];
                            break;
                        } else if (jugador == 2) {
                            document.getElementById(tabla1[i].nombre).style.backgroundColor = 'yellow';
                            tabla1[i].ocupado = true;
                            tabla1[i].jugador = jugador;
                            tirada = tabla1[i];
                            break;
                        }
                    }
                }
            };
            break;
        case '3':
            for (var i = 0; i < tabla1.length; i++) {
                if (tabla1[i].nombre.substring(1) == '3') {
                    if (tabla1[i].ocupado == false) {
                        if (jugador == 1) {
                            document.getElementById(tabla1[i].nombre).style.backgroundColor = 'red';
                            tabla1[i].ocupado = true;
                            tabla1[i].jugador = jugador;
                            tirada = tabla1[i];
                            break;
                        } else if (jugador == 2) {
                            document.getElementById(tabla1[i].nombre).style.backgroundColor = 'yellow';
                            tabla1[i].ocupado = true;
                            tabla1[i].jugador = jugador;
                            tirada = tabla1[i];
                            break;
                        }
                    }
                }
            };
            break;
        case '4':
            for (var i = 0; i < tabla1.length; i++) {
                if (tabla1[i].nombre.substring(1) == '4') {
                    if (tabla1[i].ocupado == false) {
                        if (jugador == 1) {
                            document.getElementById(tabla1[i].nombre).style.backgroundColor = 'red';
                            tabla1[i].ocupado = true;
                            tabla1[i].jugador = jugador;
                            tirada = tabla1[i];
                            break;
                        } else if (jugador == 2) {
                            document.getElementById(tabla1[i].nombre).style.backgroundColor = 'yellow';
                            tabla1[i].ocupado = true;
                            tabla1[i].jugador = jugador;
                            tirada = tabla1[i];
                            break;
                        }
                    }
                }
            };
            break;
        case '5':
            for (var i = 0; i < tabla1.length; i++) {
                if (tabla1[i].nombre.substring(1) == '5') {
                    if (tabla1[i].ocupado == false) {
                        if (jugador == 1) {
                            document.getElementById(tabla1[i].nombre).style.backgroundColor = 'red';
                            tabla1[i].ocupado = true;
                            tabla1[i].jugador = jugador;
                            tirada = tabla1[i];
                            break;
                        } else if (jugador == 2) {
                            document.getElementById(tabla1[i].nombre).style.backgroundColor = 'yellow';
                            tabla1[i].ocupado = true;
                            tabla1[i].jugador = jugador;
                            tirada = tabla1[i];
                            break;
                        }
                    }
                }
            };
            break;
        case '6':
            for (var i = 0; i < tabla1.length; i++) {
                if (tabla1[i].nombre.substring(1) == '6') {
                    if (tabla1[i].ocupado == false) {
                        if (jugador == 1) {
                            document.getElementById(tabla1[i].nombre).style.backgroundColor = 'red';
                            tabla1[i].ocupado = true;
                            tabla1[i].jugador = jugador;
                            tirada = tabla1[i];
                            break;
                        } else if (jugador == 2) {
                            document.getElementById(tabla1[i].nombre).style.backgroundColor = 'yellow';
                            tabla1[i].ocupado = true;
                            tabla1[i].jugador = jugador;
                            tirada = tabla1[i];
                            break;
                        }
                    }
                }
            };
            break;
        case '7':
            for (var i = 0; i < tabla1.length; i++) {
                if (tabla1[i].nombre.substring(1) == '7') {
                    if (tabla1[i].ocupado == false) {
                        if (jugador == 1) {
                            document.getElementById(tabla1[i].nombre).style.backgroundColor = 'red';
                            tabla1[i].ocupado = true;
                            tabla1[i].jugador = jugador;
                            tirada = tabla1[i];
                            break;
                        } else if (jugador == 2) {
                            document.getElementById(tabla1[i].nombre).style.backgroundColor = 'yellow';
                            tabla1[i].ocupado = true;
                            tabla1[i].jugador = jugador;
                            tirada = tabla1[i];
                            break;
                        }
                    }
                }
            };
            break;
    }
    jugadorNum();
    buscarganadores(tirada);
}
