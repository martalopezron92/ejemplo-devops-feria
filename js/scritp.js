
const imagenes = document.querySelectorAll(".principal__ponentes__articulo__imagen");
const nombres = document.querySelectorAll(".principal__ponentes__articulo__titulo");
const botones = document.querySelectorAll("button");
const aforo = document.querySelectorAll(".aforo");
const asistentes = document.querySelectorAll(".asistentes");
const tablas = document.querySelectorAll("table");

imagenes.forEach((imagen,i) =>{
    imagen.addEventListener("mouseenter", function(){
        imagen.textContent = nombres[i].textContent;
        imagen.classList.add("fondo-js");
    })
    imagen.addEventListener("mouseleave", function(){
        imagen.textContent = "";
        imagen.classList.remove("fondo-js");
    })
})

botones.forEach((btn, pos) =>{
    btn.addEventListener("click", function(){
        let num = parseInt(asistentes[pos].textContent);
        num++;
        if(num > parseInt(aforo[pos].textContent)){
            alert("Sentimos informale de que esta ponencia ya está completa");

        }else{
            asistentes[pos].textContent = num;
            alert("Su reserva se ha realizado satisfactoriamente. Es usted el asistente numero " + num)
        }
    })
})

