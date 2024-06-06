document.addEventListener('DOMContentLoaded', () => {
  const ratingInputsArray = Array.from(document.querySelectorAll('.ratingInput'));
  const existingRatingMessage = document.querySelector('.existingRatingMessage');

  ratingInputsArray.forEach((item) => item.addEventListener('click', async () => {
    const { inputValue } = item.dataset;
    const { trailId } = item.closest('.starsContainer').dataset;

    if (item.parentNode.dataset.totalValue !== '0') {
      existingRatingMessage.innerText = 'Вы уже оставляли оценку для этого маршрута!';
      setTimeout(() => {
        existingRatingMessage.innerText = '';
      }, 1500);
      return;
    }
    // Обновляем значение totalValue у родительского элемента
    item.parentNode.dataset.totalValue = inputValue;

    console.log('Input value:', inputValue);
    console.log('Trail ID:', trailId);

    try {
      const response = await fetch('/details/newrating', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating: inputValue, trailId }),
      });

      const result = await response.json();

      if (response.ok) {
        document.querySelector('.rating').textContent = `${result.average_rating}★`;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }));
});
