initMap();

async function initMap() {
  const response = await fetch('/profile/trail', {
    method: 'GET',
  });

  const result = await response.json();

  // const points = result.coordinates;
  const { coordinates } = result;

  const waypoints = coordinates.map((waypoint) => waypoint.reverse().join(',')).join('|');

  console.log(waypoints);

  const url = `https://static-maps.yandex.ru/v1?ll=37.620070,55.753630&size=450,450&z=13&pt=37.620070,55.753630,pmwtm1~37.64,55.76363,pmwtm99&apikey=db17377e-ace7-450b-b3b3-ada02ae51bfb`;

  const urlResponse = await fetch(url, {
    method: 'GET',
  });

  const data = await urlResponse.json();

  console.log('=======================', url);

  const points = data.route.legs[0].steps.reduce((acc, el) => {
    acc = [...acc, ...el.polyline.points.map((point) => point.reverse())];
    return acc;
  }, []);

  console.log(points);

  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapFeature, YMapDefaultFeaturesLayer } = ymaps3;

  const map = new ymaps3.YMap(
    document.getElementById('map'),
    {
      location: {
        center: [37.621335, 55.754506],
        zoom: 10,
      },
    },
    [
      new YMapDefaultSchemeLayer({}),
      new YMapDefaultFeaturesLayer({}),
    ],
  );

  const route = new YMapFeature({ geometry: { type: 'LineString', coordinates: points }, style: { stroke: [{ color: '#007afce6', width: 4 }] } });

  // Добавляем слой для отображения схематической карты

  map.addChild(route);
}
