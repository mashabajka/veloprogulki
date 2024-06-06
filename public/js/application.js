const modal = document.querySelector('dialog');
const modalBox = document.getElementById('modal-box');
const showModalBtn = document.getElementById('show-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const logForm = document.querySelector('.logForm');
const errMsg = document.querySelector('.logErrMsg');
const inputEmail = document.querySelector('#exampleInputEmail1');
const inputPass = document.querySelector('#exampleInputPassword1');
const regForm = document.querySelector('.regForm');
const errRegMsg = document.querySelector('.regErrMsg');

let isModalOpen = false;

showModalBtn.addEventListener('click', (e) => {
  modal.showModal();
  isModalOpen = true;
  e.stopPropagation();
});

closeModalBtn.addEventListener('click', () => {
  modal.close();
  isModalOpen = false;
});

document.addEventListener('click', (e) => {
  if (isModalOpen && !modalBox.contains(e.target)) {
    modal.close();
  }
});

logForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(logForm);
  const res = Object.fromEntries(data);
  if (!res.password || !res.email) {
    errMsg.innerText = 'Введите данные';
  } else {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(res),
        credentials: 'include',
      });
      const result = await response.json();
      console.log('result:', result);
      if (result.logErr) {
        errMsg.innerText = result.logErr;

        inputEmail.value = '';
        inputPass.value = '';
        setTimeout(() => {
          window.location.href = '/registration';
        }, 1500);
      }
      if (result.logDone) {
        setTimeout(() => {
          window.location.href = '/';
        }, 250);
      } if (result.passErr) {
        errMsg.innerText = result.passErr;
        inputPass.value = '';
      }
    } catch (error) {
      console.log(error);
    }
  }
});

regForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(regForm);
  console.log(data);
  const res = Object.fromEntries(data);
  if (!res.login || !res.password || !res.email) {
    errMsg.innerText = 'Введите данные';
  } else {
    try {
      const response = await fetch('/registration', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      if (result.regDone) {
        setTimeout(() => {
          window.location.href = '/';
        }, 250);
      }
      if (result.regErr) {
        errRegMsg.innerText = result.regErr;
      }
    } catch (error) {
      console.log(error);
    //   alert('Reg error');
    }
  }
});
