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
  const adviceNo = document.querySelector('.advice-id');
  const adviceText = document.querySelector('.advice-text');
  
  adviceNo.innerText = `ADVICE #${advice.slip.id}`;
  adviceText.innerText = `"${advice.slip.advice}"`;

  adviceElement.appendChild(adviceNo);
  adviceElement.appendChild(adviceText);
};

getAdvice();
