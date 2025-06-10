var map = L.map('map').setView([42.5000, 27.4656], 14); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

let marker=L.marker([42.4949,27.4664]).addTo(map);
marker.bindPopup(' <h1>Пожарна Бургас 1</h1> <img src="../media/fireStationBurgas.jpg" style: width=200px > ')

let secondMarker=L.marker([42.5633, 27.5133]).addTo(map);
secondMarker.bindPopup(' <h1>Пожарна Бургас 2</h1> <img src="../media/secondFireStationBurgas.png" style: width=200px > ')