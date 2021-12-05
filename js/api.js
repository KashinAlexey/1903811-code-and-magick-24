const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/code-and-magick/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://24.javascript.pages.academy/code-and-magick1',
    {
      method: 'POST',
      body,
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess('Данные отправлены');
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
