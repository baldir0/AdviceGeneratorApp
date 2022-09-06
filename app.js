const ADVICE_API_URL = 'https://api.adviceslip.com/advice';

const getAdvice = () => {
  fetch(ADVICE_API_URL, {
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((results) => setAdvice(results))
    .catch((error) => console.log(error));
};

const setAdvice = (advice) => {
  const adviceElement = document.querySelector('.advice');
  const adviceNo = document.querySelector('#adviceNo');
  adviceNo.innerText = `ADVICE ${advice.slip.id}`;
  const adviceText = document.querySelector('#adviceText');
  adviceText.innerText = `"${advice.slip.advice}"`;

  adviceElement.appendChild(adviceNo);
  adviceElement.appendChild(adviceText);
};

getAdvice();
