const rating = document.querySelector('.ratingContainer');

// Инициализируем рейтинг
function initRating(rating) {
  let ratingActive;
  let ratingValue;

  // Создаём переменные
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.ratingActive');
    ratingValue = rating.querySelector('.ratingValue');
  }

  // Управляем шириной активной полосы звёзд
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.1; // С учетом 10 звезд
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  // Возможность указать оценку
  function setRating() {
    // Получаем массив объектов с инпутами звёздочками
    const ratingItemsArray = rating.querySelectorAll('.ratingInput');
    for (let index = 0; index < ratingItemsArray.length; index++) {
      const ratingItem = ratingItemsArray[index];
      ratingItem.addEventListener('mouseenter', (event) => {
        // Обновление переменных
        initRatingVars(rating);
        // Обновление ширины активной полосы звёзд
        setRatingActiveWidth(ratingItem.value);
      });

      ratingItem.addEventListener('mouseleave', (event) => {
        // Обновление ширины активной полосы звёзд
        setRatingActiveWidth();
      });

      ratingItem.addEventListener('click', (event) => {
        // Обновление переменных
        initRatingVars(rating);
        if (rating.dataset.ajax) {
          // Отправить на сервер
          setRatingValue(ratingItem.value, rating);
        } else {
          // Отобразить указанную оценку
          ratingValue.innerHTML = index + 1;
          setRatingActiveWidth();
        }
      });
    }
  }

  async function setRatingValue(value, rating) {
    if (!rating.classList.contains('ratingSending')) {
      rating.classList.add('ratingSending');

      // const trailId = event.target.getAttribute('data-trail-id');

      // Отправляем value на сервер
      try {
        const response = await fetch(`/alltrails/details/${trailId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ value }),
        });

        if (response.ok) {
          const result = await response.json();

          // Получаем новый рейтинг
          const newRating = result.newRating;

          // Выводим новый средний результат
          ratingValue.innerHTML = newRating;

          // Обновляем ширину активной полосы звёзд
          setRatingActiveWidth();

          rating.classList.remove('ratingSending');
        } else {
          console.log('Ошибка');
          rating.classList.remove('ratingSending');
        }
      } catch (error) {
        console.error('Error:', error);
        rating.classList.remove('ratingSending');
      }
    }
  }

  initRatingVars(rating);

  setRatingActiveWidth();

  if (rating.classList.contains('ratingSet')) {
    setRating(rating);
  }
}

initRating(rating);