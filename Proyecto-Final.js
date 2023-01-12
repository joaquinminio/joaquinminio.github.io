 let botonveneto = document.getElementById('botonveneto')
 let veneto1 = document.getElementById('veneto1')

 botonveneto.addEventListener('click', function (){
    veneto1.classList.toggle('mostrarveneto');
    if(veneto1.classList.contains('mostrarveneto')){
        botonveneto.innerHTML = 'Ver Menos';
    }
    else {
        botonveneto.innerHTML = 'Detalles';
    }
})


let botonlibreria = document.getElementById('botonlibreria')
 let libreria1 = document.getElementById('libreria1')

 botonlibreria.addEventListener('click', function (){
    libreria1.classList.toggle('mostrarlibreria');
    if(libreria1.classList.contains('mostrarlibreria')){
        botonlibreria.innerHTML = 'Ver Menos';
    }
    else {
        botonlibreria.innerHTML = 'Detalles';
    }
})


let botonlavanguardia = document.getElementById('botonlavanguardia')
 let lavanguardia1 = document.getElementById('lavanguardia1')

 botonlavanguardia.addEventListener('click', function (){
    lavanguardia1.classList.toggle('mostrarlavanguardia');
    if(lavanguardia1.classList.contains('mostrarlavanguardia')){
        botonlavanguardia.innerHTML = 'Ver Menos';
    }
    else {
        botonlavanguardia.innerHTML = 'Detalles';
    }
})


let botonsecundario = document.getElementById('botonsecundario')
 let secundario1 = document.getElementById('secundario1')

 botonsecundario.addEventListener('click', function (){
    secundario1.classList.toggle('mostrarsecundario');
    if(secundario1.classList.contains('mostrarsecundario')){
        botonsecundario.innerHTML = 'Ver Menos';
    }
    else {
        botonsecundario.innerHTML = 'Detalles';
    }
})



