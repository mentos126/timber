const map = L.map('map')
  .setView([44.396138, 2.086415], 12);

const myIcon = L.icon({
  iconUrl: '/timber/resources/img/marker-with-tree.png',
  shadowUrl: '/timber/resources/img/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const popup = '<a style="color: black; text-decoration: underline;" href="https://www.google.com/maps/dir//44.3959535,2.0565589/@44.3974805,2.0426889,13.96z/data=!4m2!4m1!3e0" target="_blank" rel="noopener noreferrer">LD. Nieyreval<br>12200 Saint-Rémy</a>'

L.marker([44.396138, 2.056415], {
    icon: myIcon
  })
  .addTo(map)
  .bindPopup(popup)
  .openPopup();

map.options.minZoom = 2;

var gl = L.mapboxGL({
  style: 'https://api.maptiler.com/maps/3d29931f-a8d2-4850-9a7a-b15b3a4fe9fd/style.json?key=QOoIcT5IkHrO1kMC4yh9'
}).addTo(map);