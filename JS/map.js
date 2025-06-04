


var map = L.map('map').setView([42.7339, 25.4858], 7); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

let marker=L.marker([42.4949,27.4664]).addTo(map);
marker.bindPopup(' <h1>Пожарна Бургас</h1> <img src="../media/firestation_burgas.png" style: width=200px > ')