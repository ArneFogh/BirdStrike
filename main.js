
const birdStrikesLatLng = birdStrikes.map((strikes) => {
    return {
        LATITUDE: parseFloat(birdStrikes[0]),
        LONGITUDE: parseFloat(birdStrikes[1]),
    };
});

const map = L.map("map").setView([41.41, -97.06], 4);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

for (let i = 0; i < birdStrikes.length; i++) {
    L.circle([birdStrikes[i].LATITUDE, birdStrikes[i].LONGITUDE]).addTo(map);
}

console.log(birdStrikes);
console.log(birdStrikesLatLng);
