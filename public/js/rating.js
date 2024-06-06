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
  }));
});


const div = document.querySelector('.oldComments');
const commentForm = document.querySelector('.commentForm');

commentForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(commentForm);
  const res = Object.fromEntries(data);
  console.log(res);
  try {
    const response = await fetch(`/details/${e.target.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(res),
    });
    const result = await response.json();
    console.log(result);
    if (result.status === 'success') {
      const newDivComment = `
      <div key=${e.target.id} class="comment">
              <p>${result.newComment.user_id}: ${result.newComment.text}</p>
              <p>Дата: ${new Date(result.newComment.createdAt).toLocaleString()}</p>
            </div>
      `;

      div.appendChild(newDivComment);
    }
    const textarea = document.querySelector('textarea');
    textarea.value = '';
  } catch (error) {
    console.log(error);
    window.location.reload();
  }
});
