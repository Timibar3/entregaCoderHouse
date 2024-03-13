let entradasEnCalorTrenSuperior = [
    'Saltos estrella','Push-Ups piso','Push-Ups Inclinado','Push-Ups Declinado','Burpees'
];

let entradasEnCalorTrenInferior = [
    'Air Squat','Puente','Sentadilla Bulgara','Gemelos', 'Salto de rana'
];

let ejerciciosPrincipalesTrenSuperior = [
    'Vuelos laterales','Press sobre cabeza','Trapecio con disco','Press banca plana','Press banca inclinda','Biceps mancuerna'
];

let ejerciciosPrincipalesTrenInferior = [
    'Squats','Cuadriceps en máquina','Isquios en máquina','Hip thrust','Peso muerto','Peso muerto Rumano'
];

let ejerciciosDeFuerza = [
    'thrusters','wall balls','kettlebell swings'
];

let stretchings = [
    'Opcion01','Opcion02','Opcion03','Opcion04','Opcion05'
];

let eleccionDeUsuario = confirm('Si es usuario elija "ACEPTAR", si es administrados elija "CANCELAR"');


const agregarEjercicio = () => {
    let mensajeAgregar = confirm('¿Desea agregar un ejercicio?');

    while (mensajeAgregar){
        let mensajeOpciones = Number(prompt('Elija una de las opciones: \nOpcion "1" Entradas en calor tren superior. \nOpcion "2" Entradas en calor tren inferior. \nOpcion "3" Principales tren superio. \nOpcion "4" Principales tren inferior. \nOpcion "5" Fuerza. \nOpcion "6" Stretchings'))

        switch (mensajeOpciones) {
            case 1: 
                let nombreECTS = prompt('Ingrese nombre del ejercicio.');
                entradasEnCalorTrenSuperior.push(nombreECTS);
                alert(nombreECTS + ' cargado con exito')
                mensajeAgregar = confirm('¿Desea agregar un nuevo ejercicio?')
                break;
            case 2:
                let nombreECTI = prompt('Ingrese nombre del ejercicio.');
                entradasEnCalorTrenInferior.push(nombreECTI);
                alert(nombreECTI + ' cargado con exito')
                mensajeAgregar = confirm('¿Desea agregar un nuevo ejercicio?')
                break;
            case 3:
                let nombreEPTS = prompt('Ingrese nombre del ejercicio.');
                ejerciciosPrincipalesTrenSuperior.push(nombreEPTS);
                alert(nombreEPTS + ' cargado con exito')
                mensajeAgregar = confirm('¿Desea agregar un nuevo ejercicio?')
                break;
            case 4:
                let nombreEPTI = prompt('Ingrese nombre del ejercicio.');
                ejerciciosPrincipalesTrenInferior.push(nombreEPTI);
                alert(nombreEPTI + ' cargado con exito')
                mensajeAgregar = confirm('¿Desea agregar un nuevo ejercicio?')
                break;
            case 5:
                let nombreEF = prompt('Ingrese nombre del ejercicio.');
                ejerciciosDeFuerza.push(nombreEF);
                alert(nombreEF + ' cargado con exito')
                mensajeAgregar = confirm('¿Desea agregar un nuevo ejercicio?')
                break;
            case 6:
                let nombreS = prompt('Ingrese nombre del ejercicio.');
                stretchings.push(nombreS);
                alert(nombreS + ' cargado con exito')
                mensajeAgregar = confirm('¿Desea agregar un nuevo ejercicio?')
                break;
            default:
                console.log('Opcion no valida');
                mensajeAgregar = false;
                break;
        };
    };
};

if (eleccionDeUsuario == false){
    agregarEjercicio();
}else if (eleccionDeUsuario){

    const elegirNivel = Number(prompt('Elige tu nivel: \n"1" para Principiante. \n"2" para Intermedio. \n"3" para Avanzado.' ));



    function seleccionAlAzar(datos) {
        return datos[Math.floor(Math.random() * datos.length)];
    };

    let rutinaParcial = [];

    const creacioDeRutina = (array, cantidadEjercicios) => {


        while (rutinaParcial.length < cantidadEjercicios) {
            let ejercicioElegido = seleccionAlAzar(array);
            let bandera = true;

            for (let i = 0; i <= rutinaParcial.length; i++ ){
                if (rutinaParcial[i] == ejercicioElegido){
                    bandera = false;
                };
            };

            if (bandera){
                rutinaParcial.push(ejercicioElegido);
            };
        };

    };

    let rutinaFinal = [];

    const agregarARutinaFinal = (rutinaParcial) => {
        for(let i = 0; i < rutinaParcial.length; i++){
            rutinaFinal.push('\n' + rutinaParcial[i])
        };
        
    }

    if(elegirNivel == 1){
        creacioDeRutina(entradasEnCalorTrenSuperior, 1);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

        creacioDeRutina(entradasEnCalorTrenInferior, 1);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

        creacioDeRutina(ejerciciosPrincipalesTrenSuperior, 2);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

        creacioDeRutina(ejerciciosPrincipalesTrenInferior, 2);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

        creacioDeRutina(ejerciciosDeFuerza, 1);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

        creacioDeRutina(stretchings, 1);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

    }else if (elegirNivel == 2){
        creacioDeRutina(entradasEnCalorTrenSuperior, 2);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

        creacioDeRutina(entradasEnCalorTrenInferior, 2);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

        creacioDeRutina(ejerciciosPrincipalesTrenSuperior, 2);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

        creacioDeRutina(ejerciciosPrincipalesTrenInferior, 2);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

        creacioDeRutina(ejerciciosDeFuerza, 1);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

        creacioDeRutina(stretchings, 1);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

    }else if (elegirNivel == 3){
        creacioDeRutina(entradasEnCalorTrenSuperior, 3);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

        creacioDeRutina(entradasEnCalorTrenInferior, 3);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

        creacioDeRutina(ejerciciosPrincipalesTrenSuperior, 3);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

        creacioDeRutina(ejerciciosPrincipalesTrenInferior, 3);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

        creacioDeRutina(ejerciciosDeFuerza, 1);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];

        creacioDeRutina(stretchings, 1);
        agregarARutinaFinal(rutinaParcial);
        rutinaParcial = [];
    }else{
        alert('Opcion no encontrada')
    };
    alert('Su rutina del día de hoy es:' + rutinaFinal)
};




