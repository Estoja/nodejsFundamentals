function soyAsincrona (nombre, miCallback) {
  console.log('Hola, soy asincrono');
  setTimeout(function() {
    console.log('Hola ' + nombre);
    miCallback(nombre);
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout( function() {
    console.log('Adios ' + nombre);
    otroCallback();
  }, 1000)
}

console.log('Inicio');
soyAsincrona('Esteban', function(nombre) {
  adios(nombre, function() {
    console.log('Fin');
  });
});