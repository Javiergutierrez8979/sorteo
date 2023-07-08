
function boton(){

    const check = document.getElementById('check').checked
console.log(check)
const name = document.getElementById('nombre').value
const lastName = document.getElementById('apellido').value

    if(check === true){

prompt(name + ' ' + lastName + ' ' + 'FELICITACIONES!!! Fuiste seleccionado como padrino de VALENTIN ASTOR GUTIERREZ--- Para mas informaión comuniquese con sus padres por favor !! Gracias jeje')

    } else{
        prompt('Debe aceptar primero los terminos y condiciones.')
    }


    // prompt ('nombre' + 'desea ingresar') 
}


