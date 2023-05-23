let resultContainer = document.querySelector('.result-component');
let stateRange = document.getElementById('state-range');
let status = document.getElementById('status');
let paragraph = document.getElementById('result-paragraph');
let reaction = document.getElementById('reaction');
let memory = document.getElementById('memory');
let verbal = document.getElementById('verbal');
let visual = document.getElementById('visual');
let buttonContinue = document.querySelector('.button');

window.addEventListener('load', randomValues);

buttonContinue.addEventListener('click', randomValues);

function randomValues() {
  let values = [];
  for (let i = 1; i <= 4; i++) {
    randomNumbers = Math.round(Math.random() * 100);
    values.push(randomNumbers);
  }

  values.forEach((element, index) => {
    switch (index) {
      case 0:
        reaction.innerText = element + ' / 100';
        break;
      case 1:
        memory.innerText = element + ' / 100';
        break;
      case 2:
        verbal.innerText = element + ' / 100';
        break;
      case 3:
        visual.innerText = element + ' / 100';
        break;
      default:
        'Error';
    }
  });

  const media = values.reduce((valuePrevious, currentValue) => {
    return valuePrevious + currentValue;
  });

  let result = Math.round(media / 4);

  if (result >= 75) {
    resultContainer.classList.add('result-component');
    resultContainer.classList.remove('result-component-warning', 'result-component-danger');
    stateRange.innerText = result;
  }

  if (result <= 74 || result > 43) {
    resultContainer.classList.add('result-component-warning');
    resultContainer.classList.remove('result-component', 'result-component-danger');
    stateRange.innerText = result;
  }

  if (result <= 43) {
    resultContainer.classList.add('result-component-danger');
    resultContainer.classList.remove('result-component-warning', 'result-component');
    stateRange.innerText = result;
  }

}