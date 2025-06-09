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



const incidentDetails = {
  firstIncident: `
    <h2>Инцидент 1 - Детайли</h2>
    <p>Час на подаване: 14:35</p>
    <p>Адрес: ул. Св. Кирил и Методий №24 8000 Бургас</p>
    <p>Тип инцидент: Пожар</p>
    <p>Статус: Очаква изпращане</p>
    <p>Тук може да добавите още информация, снимки и връзки.</p>
  `,
  secondIncident: `
    <h2>Инцидент 2 - Детайли</h2>
    <p>Час на подаване: 12:35</p>
    <p>Адрес: ул. Сливница №11-13 8000 Бургас</p>
    <p>Тип инцидент: Пожар</p>
    <p>Статус: Непотвърден</p>
    <p>Тук може да добавите още информация, снимки и връзки.</p>
  `
};


const incidents = document.querySelectorAll('.incident');
const scrollArea = document.querySelector('.incidentScrollArea');
const expandedView = document.querySelector('.incidentExpandedView');
const backBtn = document.querySelector('.backBtn');
const expandedContent = expandedView.querySelector('.expandedContent');


incidents.forEach(incident => {
  incident.addEventListener('click', () => {
    scrollArea.classList.remove('fade-slide-in');
    scrollArea.classList.add('fade-slide-out');

    setTimeout(() => {
      scrollArea.style.display = 'none';

      expandedView.style.display = 'block';
      expandedView.classList.remove('fade-slide-out');
      expandedView.classList.add('fade-slide-in');

      const incidentId = incident.getAttribute('id');
      const details = incidentDetails[incidentId];
      expandedContent.innerHTML = details;
    }, 300);
  });
});

backBtn.addEventListener('click', () => {
  expandedView.classList.remove('fade-slide-in');
  expandedView.classList.add('fade-slide-out');

  scrollArea.style.display = 'block';
  scrollArea.classList.remove('fade-slide-out');
  scrollArea.classList.add('fade-slide-in');

  setTimeout(() => {
    expandedView.style.display = 'none';
    expandedView.classList.remove('fade-slide-out');
    scrollArea.classList.remove('fade-slide-in');
  }, 300);
});