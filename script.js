
//Variables - Seleccionar elementos de HTML
const h1 = document.querySelector('h1'); 
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const rst = document.querySelector('#result');

/*
// Mostrar variables con sus propiedades
console.log({h1,form,input1,input2,btn,rst}) 
*/

form.addEventListener('submit',suma);//Funcion

//Funciones para el boton
function suma(event){
    event.preventDefault(); //Quitar el evento (recargar-pagina) por defecto del formulario
    const sum = Number(input1.value)  + Number(input2.value) ; //Leyendo HTML desde JavaScrip (input2.value)
    rst.innerText = "Suma: " + sum; 

}

// btn.addEventListener('click',suma); //Funcion

// //Funciones para el boton
// function suma(){
//     const sum = Number(input1.value)  + Number(input2.value) ;
//     rst.innerText = "Suma: " + sum;
// }


/*
//Mostrar en consola
    console.log(input.value);
//interpreta el objeto en la consola con todas las propiedades
    console.log({h1,p,paragraph,pid,input,});
//Convierte a codigo HTML
    h1.innerHTML = "Titulo";
//Solo texto
    h1.innerText = "Titulo"; 
//Leer atributos de los elementos
    //console.log(h1.getAttribute('Pantalla'))
    //h1.setAttribute('class','rojo'); /*Modificar atributos */
/*
//Añadir clase
    h1.classList.add('rojo');
//Eliminar clase 
    h1.classList.remove('verde'); 
//Cambiar su valor por defecto
    input.value = "456"; 
//creamos una imagen
    const img = document.createElement('img'); 
//añadimos atributos
    //img.setAttribute('src','https://miro.medium.com/v2/resize:fit:640/1*DGO6ZPZhbqu-S_IoYFTVnw.gif');
    //console.log(img);
//insertamos imagen en el cotenedor pid
    pid.innerHTML = "";
    pid.append(img);
*/


