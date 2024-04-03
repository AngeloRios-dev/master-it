// Coordenadas de MasterD 40.44144896361136, -3.6974367192803816
var coordenadas = [40.44144896361136, -3.6974367192803816];

// Intentar obtener la ubicación del usuario
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        coordenadas = [position.coords.latitude, position.coords.longitude];
        mostrarMapa(coordenadas);
    }, function() {
        mostrarMapa(coordenadas); // Mostrar mapa con las coordenadas predeterminadas
    });
} else {
    mostrarMapa(coordenadas); // Mostrar mapa con las coordenadas predeterminadas
}

function mostrarMapa(coordenadas) {
    var map = L.map('map').setView(coordenadas, 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker(coordenadas).addTo(map);
}