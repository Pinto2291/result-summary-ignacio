let resultContainer = document.querySelector('.result-component');
let stateRange = document.getElementById('state-range');
let statusRandom = document.getElementById('status');
let paragraph = document.getElementById('result-paragraph');
let numbersContainer = document.getElementById('numbers-container');

let reaction = document.getElementById('reaction');
let memory = document.getElementById('memory');
let verbal = document.getElementById('verbal');
let visual = document.getElementById('visual');

/* Porcentajes */

let reaction_percentaje = document.getElementById('reaction-percentaje');
let memory_percentaje = document.getElementById('memory-percentaje');
let verbal_percentaje = document.getElementById('verbal-percentaje');
let visual_percentaje = document.getElementById('visual-percentaje');

let button = document.querySelector('.button');


function randomValues() {

    let values = [];

    for(let i = 1; i <= 4; i++){
        let randomNumbers = Math.round((Math.random()*100) + 1)
        values.push(randomNumbers);
    }

    values.forEach((element, index) => {
        switch(index){
            case 0:
                reaction.innerText = element + ' / ';
                reaction_percentaje.innerText = '100';
                break;
            case 1:
                memory.innerText = element + ' / ';
                memory_percentaje.innerText = '100';
                break;
            case 2:
                verbal.innerText = element + ' / ';
                verbal_percentaje.innerText = '100';
                break;
            case 3:
                visual.innerText = element + ' / ';
                visual_percentaje.innerText = '100';
                break;
            
        }
    })

    const media = Math.round(values.reduce((prev, current) => {
        return (prev + current);
    })/values.length); 

    stateRange.innerText = media;

    if(media >= 80) {
        resultContainer.classList.add('result-component-incredible');
        numbersContainer.classList.add('numbers-incredible');
        resultContainer.classList.remove('result-component-warning', 'result-component-danger', 'result-component');
        numbersContainer.classList.remove('numbers-warning', 'numbers-danger', 'numbers');
        stateRange.innerText = media;
        statusRandom.innerText = 'Incredible';
        paragraph.innerText = 'You have an Incredible performance, amazing result';

    } else if (media >= 71 && media < 80) {
        resultContainer.classList.add('result-component');
        numbersContainer.classList.add('numbers');
        resultContainer.classList.remove('result-component-warning', 'result-component-danger','result-component-incredible');
        numbersContainer.classList.remove('numbers-warning', 'numbers-danger', 'numbers-incredible');
        stateRange.innerText = media;
        statusRandom.innerText = 'Great';
        paragraph.innerText = 'You are a great person, keep going, you are smart';
    } else if (media <= 70 && media > 43){
        resultContainer.classList.add('result-component-warning');
        numbersContainer.classList.add('numbers-warning');
        resultContainer.classList.remove('result-component', 'result-component-danger', 'result-component-incredible');
        numbersContainer.classList.remove('numbers', 'numbers-danger', 'numbers-incredible');
        stateRange.innerText = media;
        statusRandom.innerText = 'Fine';
        paragraph.innerText = 'You can improve your performance, study more';
    } else if (media <= 43) {
        resultContainer.classList.add('result-component-danger');
        numbersContainer.classList.add('numbers-danger');
        resultContainer.classList.remove('result-component', 'result-component-warning', 'result-component-incredible');
        numbersContainer.classList.remove('numbers', 'numbers-warning', 'numbers-incredible');
        stateRange.innerText = media;
        statusRandom.innerText = 'Bad';
        paragraph.innerText = 'You are not performing properly, please study';
    }
}



button.addEventListener('click', () => {
    randomValues();
})