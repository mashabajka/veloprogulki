/* eslint-disable no-restricted-syntax */
const imageUpload = document.querySelector('#imageUpload');
const addNewForm = document.querySelector('.add-new-form');
const gallery = document.querySelector('.gallery');

imageUpload?.addEventListener('change', async (event) => {
  event.preventDefault();
  const curFiles = document.getElementById('imageUpload').files;

  gallery.innerHTML = '';
  for (const file of curFiles) {
    const imageObjectUrl = URL.createObjectURL(file);
    const imgElement = document.createElement('img');
    imgElement.style.maxWidth = '150px';
    imgElement.src = imageObjectUrl;

    gallery.appendChild(imgElement);
  }
});

addNewForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(addNewForm);
  const inputs = Object.fromEntries(formData);
  console.log(inputs);

  // for (const file of imageUpload.files) {
  //   formData.append('images', file);
  // }

  formData.append('data', JSON.stringify(inputs));

  try {
    const response = await fetch('/profile/save', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    if (result.createTrailSuccess) {
      window.location.href = `/profile/newtrail/${result.trail_id}`;
    }
  } catch (error) {
    console.error('Ошибка:', error);
    alert(`Ошибка добавления картинки: ${error.message}`);
  }
});
