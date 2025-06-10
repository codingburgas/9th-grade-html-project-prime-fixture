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


let firstExpandedMap = null;
let secondExpandedMap = null;

const incidents = document.querySelectorAll('.incident');
const scrollArea = document.querySelector('.incidentScrollArea');
const expandedView = document.querySelector('.incidentExpandedView');
const backBtn = document.querySelector('.backBtn');
const incidentDetailsFirst = expandedView.querySelector('.incidentDetailsFirst');
const incidentDetailsSecond = expandedView.querySelector('.incidentDetailsSecond');

incidents.forEach((incident) => {
  incident.addEventListener('click', () => {
    

    scrollArea.classList.remove('fade-slide-in');
    scrollArea.classList.add('fade-slide-out');

    setTimeout(() => {
      scrollArea.style.display = 'none';


      expandedView.style.display = 'block';
      expandedView.classList.remove('fade-slide-out');
      expandedView.classList.add('fade-slide-in');

      const incidentId = incident.getAttribute('id');

      if (incidentId === "firstIncident") {
        incidentDetailsFirst.style.display = 'block';
        incidentDetailsSecond.style.display = 'none';

        if (!firstExpandedMap) {
          firstExpandedMap = L.map('firstExpandedMap').setView(firstMapCoords, 15.3);

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
          }).addTo(firstExpandedMap);

          L.circleMarker([42.4982, 27.4776], {
            radius: 15,
            color: 'red',
            fillColor: 'red',
            fillOpacity: 0.9
          }).addTo(firstExpandedMap);
        }

        setTimeout(() => {
          firstExpandedMap.invalidateSize(true);
        }, 50);

      } else if (incidentId === 'secondIncident') {
        incidentDetailsFirst.style.display = 'none';
        incidentDetailsSecond.style.display = 'block';

        if (!secondExpandedMap) {
          secondExpandedMap = L.map('secondExpandedMap').setView(secondMapCoords, 15.3);

          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; OpenStreetMap contributors'
          }).addTo(secondExpandedMap);

          L.circleMarker([42.4958, 27.4690], {
            radius: 15,
            color: 'red',
            fillColor: 'red',
            fillOpacity: 0.9
          }).addTo(secondExpandedMap);
        }

        setTimeout(() => {
          secondExpandedMap.invalidateSize(true);
        }, 50);
      }

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

const sendTeamButtons = document.querySelectorAll('.sendTeamBtn');
const expandedSendTeamButtons = document.querySelectorAll('.expandedSendTeamBtn');
const backBtnSecond = document.querySelector('.backBtnSecond');
const teamChoicePanel = document.querySelector('.incidentTeamChoice');
const incidentExpandedView = document.querySelector('.incidentExpandedView');

sendTeamButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();

    scrollArea.classList.remove('fade-slide-in');
    scrollArea.classList.add('fade-slide-out');


      scrollArea.style.display = 'none';
      teamChoicePanel.style.display = 'block';
      teamChoicePanel.classList.remove('fade-slide-out');
      teamChoicePanel.classList.add('fade-slide-in');

  });
});

expandedSendTeamButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();

 
    incidentExpandedView.style.display = 'none';
    

    teamChoicePanel.style.display = 'block';
    teamChoicePanel.classList.remove('fade-slide-out');
    teamChoicePanel.classList.add('fade-slide-in');
  });
});

backBtnSecond.addEventListener('click', () => {
  teamChoicePanel.classList.remove('fade-slide-in');
  teamChoicePanel.classList.add('fade-slide-out');


    teamChoicePanel.style.display = 'none';

    scrollArea.style.display = 'block';
    scrollArea.classList.remove('fade-slide-out');
    scrollArea.classList.add('fade-slide-in');

});

const selectTeamBtns = document.querySelectorAll('.selectTeamBtn');

selectTeamBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    customAlert.classList.add('show');

    setTimeout(() => {
      customAlert.classList.remove('show');
    }, 2000);
  });
});