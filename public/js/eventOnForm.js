// const ratingInputsList = document.querySelectorAll('.ratingInput');
// const ratingInputsArray = Array.from(ratingInputsList);

// ratingInputsArray.forEach((item) => item.addEventListener('click', () => {
//   const { inputValue } = item.dataset;
//   console.log(inputValue);
//   item.parentNode.dataset.totalValue = item.dataset.inputValue;
// }));

document.addEventListener('DOMContentLoaded', () => {
  const ratingInputsArray = Array.from(document.querySelectorAll('.ratingInput'));

  ratingInputsArray.forEach((item) => item.addEventListener('click', async () => {
    const { inputValue } = item.dataset;
    const { trailId } = item.closest('.ratingContainer').dataset;

    // Обновляем значение totalValue у родительского элемента
    item.parentNode.dataset.totalValue = inputValue;

    console.log('Input value:', inputValue);
    console.log('Trail ID:', trailId);
  }));

  const commentBtn = document.querySelector('.commentBtn');
  commentBtn.addEventListener('click', async (event) => {
    try {
      const response = await fetch('/details/newrating', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating: inputValue, trailId }),
      });

      if (response.ok) {
        const updatedTrail = await response.json();
        document.querySelector('.rating').textContent = `${updatedTrail.average_rating} ★`;
      } else {
        console.error('Не получилось обновить рейтинг');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
});
