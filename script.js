const adviceId = document.querySelector('.advice__title');
const paragraph = document.querySelector('.advice__quote');
const btn = document.querySelector('.advice__btn');

function getAdvice() {
  let advice = '';
  paragraph.innerText = 'Loading...';
  const url = 'https://api.adviceslip.com/advice';
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      advice = data.slip.advice;
      adviceId.innerText = `Advice #${data.slip.id}`;
      paragraph.innerText = `“${advice}”`;
    })
    .catch((err) => {
      advice.innerText = 'Check your internet connection.';
    });
}

btn.addEventListener('click', getAdvice);
getAdvice();