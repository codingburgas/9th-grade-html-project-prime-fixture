const firstMapCoords = [42.4982, 27.4775];
const map = L.map('firstMap').setView(firstMapCoords, 16.8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.circleMarker([42.4982, 27.4776], {
    radius: 15,
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.9
}).addTo(map);

const secondMapCoords = [42.4962, 27.4695];
const secondMap = L.map('secondMap').setView(secondMapCoords, 16.8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(secondMap);

L.circleMarker([42.4958, 27.4690], {
    radius: 15,
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.9
}).addTo(secondMap);
