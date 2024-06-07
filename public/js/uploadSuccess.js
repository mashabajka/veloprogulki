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
    imgElement.style.marginLeft = '12px';
    imgElement.style.marginRight = '12px';
    imgElement.style.borderRadius = '5px';
    imgElement.src = imageObjectUrl;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌'; // Emoji for a cross mark
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => {
      gallery.removeChild(imageContainer);
      URL.revokeObjectURL(imageObjectUrl); // Free up the resources
    });

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    imageContainer.appendChild(imgElement);
    imageContainer.appendChild(deleteButton);

    gallery.appendChild(imageContainer);
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
