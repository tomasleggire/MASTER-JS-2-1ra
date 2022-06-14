//////////////////////////////////////////  APIs  //////////////////////////////////////////////
//Interfaz de programacion de aplicaciones.

//Las mas comunes son:

// Date() : es un constructor y se le pueden agregar propiedades.
                                                                      /*
const fecha = new Date();

console.log(fecha); // Por si solo, devuelve le fecha y horario actual.

console.log(fecha.getDate()); // .getDate()  : devuelve el dia del mes.

console.log(fecha.getDay()); // .getDay()  : devuelve el dia de la semana, si es domingo es 0, lunes es 1, ect.

console.log(fecha.getMonth()); // .getMonth()  : devuelve el mes, si es enero es 0, si es febrero es 1, etc.

console.log(fecha.getYear());  // .getYear()  : devuelve el año actual menos 1900, 2022 es igual a 122.

console.log(fecha.getHours());  // .getHours() : devuelve la hora actual.
console.log(fecha.getMinutes()); // .getMinutes() : devuelve los minutos actuales.
console.log(fecha.getSeconds());  // .getSeconds() : devuelve los segundos actuales.

const fecha2=  Date.now();

console.log(fecha2); //Nos pasa el tiempo de milisegundos desde 1970 hasta el momento actual, y con ese numero como parametro obtenemos la fecha en que se ejecutó.

                                                                      */

//RELOJ CON OBEJTO DATE:
                                                                 /*
"use strict"

const addZeros = n =>{
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

const actualizarHora = () =>{
    const time = new Date();
    let hora = addZeros(time.getHours());
    let min = addZeros(time.getMinutes());
    let seg = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
}

actualizarHora();

setInterval(actualizarHora,1000);
                                                                    */


////////////////////////////////// LocalStorage y SessionStorage ///////////////////////////////////
//Son APIs que nos permiten guardan informacion.
//SessionStorage: cuando cierro la pagina, actualizo o algo asi, la informacion se pierde.
//LocalStorage: la informacion se almacena de forma local y si cierro o actualizo, la informacion se mantiene.
                                                                      /*
"use strict" 
                                                                               
//La informacion no se pierde nunca, a menos q la removamos.

localStorage.setItem("nombre","pedro"); //Con .setItem() definimos una variable y su valor.

let nombre = localStorage.getItem("nombre"); //Con .getIteam() obtenemos un valor.

console.log(nombre);

//La informacion se pierde al actualizar o cerrar la pagina, ya que se matiene en la sesion actual.

//sessionStorage.setItem("nombre","pedrobich");

let nombre2 = sessionStorage.getItem("nombre"); 

console.log(nombre2);


localStorage.removeItem("nombre"); //Con .removeIteam() removemos el item que queramos, local o session.

localStorage.clear(); //Con .clear() removemos todo lo del storage local o session.
                                                                      */

//DEFINIR EL IDIOMA CON locaStorage:
                                                                          /*
"use strict";

const modal = document.querySelector(".modal-overlay");

const definirIdioma = ()=>{
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("idioma","en");
        cerrarModal();
    })
    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("idioma","en");
        cerrarModal();
    })
}

const cerrarModal = ()=>{
    modal.style.animation = "desaparecer 1s fordwars";
    setTimeout(()=> modal.style.display = "none",1000);
}

const idioma = localStorage.getItem("idioma");

if(idioma === null) definirIdioma();
else {
    console.log(`Idioma: ${idioma}`);
    modal.style.display = "none";
}

//ahora quedaria mostrar la pagina en el idioma seleccionado:

if(idioma == "es") mostrarEnEspañol();
else mostrarEnIngles();

                                                                            */


//////////////////////////////////////// Drag & Drop /////////////////////////////////////////////////////

//Evento del objeto: dragstart - drag - desgend.
                                                                            /*
const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");
                                                             
circulo.addEventListener("dragstart",()=>console.log(1));
circulo.addEventListener("drag",()=>console.log(2));
circulo.addEventListener("dragend",()=>console.log(3));
                                                              
//Eventos de zona: dragenter - dragover - drop - dragleave.

rectangulo.addEventListener("dragenter",()=>console.log(1)); //Verifica q entre lo q arrastramos
rectangulo.addEventListener("dragover",(e)=>{ //Verifica q sigue estando lo q arrastramos
    e.preventDefault(); //Por defecto no permite soltar nada, con esta funcion, le permitimos que se pueda ejecutar el drop.
    console.log(2)
}); 
rectangulo.addEventListener("drop",()=>console.log(3)); //Verifica q soltamos lo q arrastramos
rectangulo.addEventListener("dragleave",()=>console.log(4)); //Verifica q salio lo q arrastramos

//Propiedad dataTransfer: tranfiere informacion entre el objeto y donde se suelta.
// .getData()  conseguimos un valor definido.
// .setData()  definimos un valor en un evento.

//Se trajan desde el dragstart o el drop:

circulo.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("clase",e.target.className);
    console.log(e.dataTransfer.getData("clase"));
});

rectangulo.addEventListener("drop",(e)=>{
    console.log(e.dataTransfer.getData("clase"));
});                                                               
                                                                               */

//TEXTURIZADOR CON DRAG Y DROP:
                                                                            /*
"use strict";

const zona = document.querySelector(".zona");
zona.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
zona.addEventListener("drop",(e)=>{
    let n = e.dataTransfer.getData("textura");
    zona.style.background = `url("textura${n}.png")`;
})

for (let i = 1; i < document.querySelector(".texturas").children.length + 1; i++){
    document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>transferirTextura(i,e));
}

const transferirTextura = (n,e) =>{
    e.dataTransfer.setData("textura",n);
}
                                                                          */

/////////////////////////////////////////// GEOLOCALIZATION ////////////////////////////////////////
                                                                        /*
"use strict";

const geolocation = navigator.geolocation;

const posicion = (pos)=>{
    console.log(pos);
}

const err = ()=>{
    console.log(e);
}

const options = {
    maximumAge: 0,
    timeout: 3000,
    enableHightAccuracy: true
}

geolocation.getCurrentPosition(posicion,err,options);
                                                                         */

///////////////////////////////////////////// HISTORY API /////////////////////////////////////////
                                                                         /*
"use strict";

console.log(history);

// history.back();  //Vuelve una pagina hacia atras.
 
// history.forward();  //Va una pagina hacia adelante.

// console.log(history.length); //Muestra el numero de paginas en el historial.

// history.go(1); //Va hacia pagina en el indice indicado, y si ya esta en esa, muestra undefined.

history.pushState({nombre:"pedro"},"","?jajaxd"); 

// pushState() crea nuevas entradas al historial y general el evento "popstate" que se activa cada vez que entramos a esa entrada.

addEventListener("popstate",(e)=>{
    console.log(e.state);
})

history.replaceState({nombre:"pedro"},"","?jajaxd");

// replaceState() es igual que pushState, modifica la url, pero no activa el evento state ni conserva la url.

                                                                          */

///////////////////////////////////////////// FileReader //////////////////////////////////////

