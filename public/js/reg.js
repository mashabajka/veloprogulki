const regForm = document.querySelector('.regForm');
const errMsg = document.querySelector('.errMsg');
console.log('hello');

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
      console.log(result);
      if (result.regDone) {
        console.log(result.regDone);
        setTimeout(() => {
          window.location.href = '/';
        }, 250);
      }
      if (result.regErr) {
        errMsg.innerText = result.regErr;
      }
    } catch (error) {
      console.log(error);
    //   alert('Reg error');
    }
  }
});
