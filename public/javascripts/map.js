var map = L.map('main_map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);
var marker = L.marker([55.5, -0.09]).addTo(map);
var marker = L.marker([21.5, -0.09]).addTo(map);