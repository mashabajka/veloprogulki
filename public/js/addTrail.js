document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.add-new-form');
  const mapContainer = document.getElementById('map');
  const coordinatesInput = document.getElementById('coordinates');
  const lineCoordinates = [];

  async function initMap() {
    await ymaps3.ready;

    const {
      YMap,
      YMapDefaultSchemeLayer,
      YMapDefaultFeaturesLayer,
      YMapFeature,
      YMapControls,
      YMapControlButton,
      YMapListener,
    } = ymaps3;

    const map = new YMap(
      mapContainer,
      {
        location: {
          center: [37.621335, 55.754506],
          zoom: 10,
        },
        showScaleInCopyrights: true,
      },
      [
        new YMapDefaultSchemeLayer({}),
        new YMapDefaultFeaturesLayer({}),
      ]
    );

    const line = new YMapFeature({
      geometry: {
        type: 'LineString',
        coordinates: lineCoordinates,
      },
      style: { stroke: [{ color: '#007afce6', width: 4 }] },
    });
    map.addChild(line);

    const listener = new YMapListener({
      onClick: onClickListenerHandler,
    });
    map.addChild(listener);

    function onClickListenerHandler(object, event) {
      console.log('click', lineCoordinates);
      lineCoordinates.push(event.coordinates);
      line.update({
        geometry: {
          type: 'LineString',
          coordinates: lineCoordinates,
        },
      });
      coordinatesInput.value = JSON.stringify({ lineCoordinates });
      bottomControls.addChild(clearLineBtn);
      bottomControls.addChild(clearLastLineBtn);
    }

    const bottomControls = new YMapControls({ position: 'bottom' });
    map.addChild(bottomControls);

    //! Кнопка удаления всего маршрута
    let clearLineBtn = new YMapControlButton({
      text: 'ОЧИСТИТЬ ВСЁ',
      color: '#fff',
      background: '#007afce6',
      onClick: onClickBtnHandler,
    });

    function onClickBtnHandler() {
      lineCoordinates.length = 0; //! очищаем массив
      line.update({
        geometry: {
          type: 'LineString',
          coordinates: lineCoordinates,
        },
      });
      coordinatesInput.value = JSON.stringify({ lineCoordinates });
      if (!lineCoordinates.length) {
        bottomControls.removeChild(clearLineBtn);
        bottomControls.removeChild(clearLastLineBtn);
      }
    }

    //! Кнопка удаления последней точки маршрута
    let clearLastLineBtn = new YMapControlButton({
      text: 'УБРАТЬ ПОСЛЕДНЕЕ',
      color: '#fff',
      background: '#007afce6',
      onClick: onClickBtnLineHandler,
    });

    function onClickBtnLineHandler() {
      if (lineCoordinates.length > 2) {
        lineCoordinates.length -= 1; //! удаляем последний элемент массива
      } else if (lineCoordinates.length === 2) {
        lineCoordinates.length = 0; //! очищаем весь массив
      }
      line.update({
        geometry: {
          type: 'LineString',
          coordinates: lineCoordinates,
        },
      });
      console.log('++++++++++++++++++++++', lineCoordinates); //! проверяем массив при удалении элементов
      coordinatesInput.value = JSON.stringify({ lineCoordinates });
      if (!lineCoordinates.length) {
        bottomControls.removeChild(clearLineBtn);
        bottomControls.removeChild(clearLastLineBtn);
      }
    }
  }

  initMap();
});
