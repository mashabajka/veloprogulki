initMap();

async function initMap() {
  const urlHref = window.location.href;
  const split = urlHref.split('/');
  const trail_id = split[split.length - 1];

  console.log(trail_id);

  const response = await fetch(`/profile/coordinates/${trail_id}`, {
    method: 'GET',
  });

  const result = await response.json();

  const { coordinates } = result;

  console.log(typeof coordinates);

  const waypoints = coordinates.map((waypoint) => waypoint.reverse().join(',')).join('|');

  const url = `https://api.routing.yandex.net/v2/route?waypoints=${waypoints}&mode=bicycle&apikey=44f64c3d-a1cc-452b-8abb-6e08577200b7`;

  const urlResponse = await fetch(url, {
    method: 'GET',
  });

  const data = await urlResponse.json();

  let distance = 0;

  data.route.legs.forEach((leg) => {
    leg.steps.forEach((step) => {
      distance += step.length;
    });
  });

  distance = parseFloat((distance / 1000).toFixed(2));

  console.log('Общая дистанция в км:', distance);

  const distanceResponse = await fetch('/profile/save/distance', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ distance, trail_id }),
  });

  const distanceResult = await distanceResponse.json();
  if (distanceResult.saveDistanceSuccess) {
    console.log('Дистанция успешно сохранена');
  } else {
    console.log('Ошибка при сохранении дистанции');
  }

  let points = [];
  for (let i = 0; i < data.route.legs.length; i++) {
    const dataArray = data.route.legs[i].steps.reduce((acc, el) => {
      acc = [...acc, ...el.polyline.points.map((point) => point.reverse())];
      return acc;
    }, []);
    points = [...points, ...dataArray];
  }

  //! Функция, возвращающая среднюю точку маршрута для центра карты
  function findCenter(route) {
    let sumLat = 0;
    let sumLng = 0;

    route.forEach((point) => {
      sumLat += point[0];
      sumLng += point[1];
    });
    const avgLat = sumLat / route.length;
    const avgLng = sumLng / route.length;
    return [avgLng, avgLat];
  }

  const midpoint = findCenter(coordinates);

  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapFeature, YMapDefaultFeaturesLayer } = ymaps3;

  const map = new ymaps3.YMap(
    document.getElementById('map'),
    {
      location: {
        center: midpoint, //! midpoint - значение из функции findCenter
        zoom: 14,
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
