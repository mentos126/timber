const map = L.map('map').setView([44.396138, 2.056415], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const myIcon = L.icon({
  iconUrl: '/resources/img/marker-icon-black.png',
  shadowUrl: '/resources/img/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
  });

L.marker([44.396138, 2.056415], {icon: myIcon})
  .addTo(map)
  .bindPopup('<a style="color: black;" href="https://www.google.com/maps/dir//44.3959535,2.0565589/@44.3974805,2.0426889,13.96z/data=!4m2!4m1!3e0" target="_blank" rel="noopener noreferrer">LD. Nieiyreval<br>12200 Saint-Rémy</a>')
  .openPopup();

map.options.minZoom = 2;

const gl = L.mapboxGL({
  accessToken: '{token}',
  style: 'https://openmaptiles.github.io/osm-bright-gl-style/style-cdn.json'
}).addTo(map);
map.fitWorld();