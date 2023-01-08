const quote = document.getElementById('quote');
const btn = document.getElementById('submit');
const number = document.getElementById('number');

const URL = 'https://api.adviceslip.com/advice';

const getQuote = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  const advice = data.slip.advice;
  const id = data.slip.id;

  quote.innerText = `“${advice}”`;
  number.innerText = id;
};

// Event listeners
btn.addEventListener('click', getQuote);
