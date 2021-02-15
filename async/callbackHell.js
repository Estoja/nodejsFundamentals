function Hola(nombre, miCallback) {

  setTimeout(function() {
    console.log('Hola ' + nombre);
    miCallback(nombre);
  }, 1000)
}

function hablar(hablarCallback) {
  setTimeout( function() {
    console.log('bla bla...');
    hablarCallback();
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout( function() {
    console.log('Adios ' + nombre);
    otroCallback();
  }, 1000)
}

function conversacion(nombre, veces, callback) {
  if(veces > 0) {
    hablar(function() {
      conversacion(nombre, --veces, callback);
    })
  } else {
    adios(nombre, callback);
  }
}

// ******
console.log('Inicio');
Hola('Esteban', function(nombre) {
  conversacion(nombre, 3, function () {
    console.log('Proceso terminado');
  });
});
// soyAsincrona('Esteban', function(nombre) {

//   hablar(function() {
//     hablar(function () {
//       adios(nombre, function() {
//         console.log('Fin');
//       });
//     });
//   });

// });