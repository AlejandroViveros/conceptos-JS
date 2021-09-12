//  ARRAY O ARREGLO EN JS SIRVEN PARA GUARDAR MULTIPLES VALORES
//  SE DEFINEN COMO [ VALOR1, VALOR2, VALOR3 , ...]
//  LAS POCISIONES DE LOS ARREGLOS COMIENZAN EN 0
//  * SE PUEDEN ACCESAR LOS VALORES LLAMANDO AL ARRAY Y SU POCISION , EJEMPLO: ARRAY[0] , DEVOLVERÁ EL VALOR DE LA POSICION 0 DEL ARRAY
//  
//  * SE PUEDEN AÑADIR ELEMENTOS AL FINAL ARRAY CON EL COMANDO PUSH -> ARRAY.PUSH('NUEVO VALOR')
//  * SE PUEDE ELIMINAR EL ULTIMO ELEMENTO DE UN ARREGLO CON EL COMANDO POP -> ARRAY.POP()
//  * SE PUEDE ELIMINAR EL PRIMER ELEMENTO DE UN ARREGLO CON EL COMANDO SHIFT -> ARRAY.SHIFT()
//  * SE PUEDEN AÑADIR ELEMENTOS AL COMIENZO DE UN ARRAY CON EL COMANDO UNSHIFT -> ARRAY.UNSHIFT()
//  * SE PUEDE ELIMINAR EL ELEMENTO DE UNA POCISION ESPECIFICA CON SPLICE -> ARRAY.SPLICE(0,1) 

relojArena();
function relojArena() {
    const array = Array(6);
    array[0] = [5, 1, 2, 0, 3, 1];
    array[1] = [0, 1, 0, 3, 4, 0];
    array[2] = [0, 3, 4, 3, 0, 2];
    array[3] = [3, 1, 8, 0, 4, 0];
    array[4] = [0, 1, 2, 3, 4, 1];
    array[5] = [0, 3, 0, 2, 4, 1];

    let arraySuma = []
    for (let index = 0; index < array.length - 2; index++) {
        for (let c = 0; c < array[index].length - 2; c++) {
            let suma = array[index][c] + array[index][c + 1] + array[index][c + 2] +
                array[index + 1][c + 1] + array[index + 2][c + 0] + array[index + 2][c + 1] + array[index + 2][c + 2];
            arraySuma.push(suma)

        }

    }
    console.log(`la suma mas alta es ${Math.max.apply(null,arraySuma)}`);
}


/// DADO EL SIGUIENTE ARRAY BIDIMENSIONAL TOMAR TODOS LOS "RELOJES DE ARENA"
/// GUARDAR LA SUMA DE LAS POSICIONES QUE LO COMPONEN
/// Y INDICAR CUAL ES EL RELOJ DE ARENA QUE MAS SUMA

// EJEMPLO RELOJ DE ARENA
// a b c
//   d
// e f g