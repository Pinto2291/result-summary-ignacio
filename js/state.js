let resultContainer = document.querySelector('.result-component');
let stateRange = document.getElementById('state-range');
let statusRandom = document.getElementById('status');
let paragraph = document.getElementById('result-paragraph');
let numbersContainer = document.getElementById('numbers-container');

let reaction = document.getElementById('reaction');
let memory = document.getElementById('memory');
let verbal = document.getElementById('verbal');
let visual = document.getElementById('visual');

/* percentajes */

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

    if(media >= 75) {
        resultContainer.classList.add('result-component');
        numbersContainer.classList.add('numbers');
        resultContainer.classList.remove('result-component-warning', 'result-component-danger');
        numbersContainer.classList.remove('numbes-warning', 'numbers-danger');
        stateRange.innerText = media;
        statusRandom.innerText = 'Great';
        paragraph.innerText = 'You are a great person, keep going';
    } else if (media <= 74 && media > 43){
        resultContainer.classList.add('result-component-warning');
        numbersContainer.classList.add('numbers-warning');
        resultContainer.classList.remove('result-component-warning', 'result-component-danger');
        numbersContainer.classList.remove('numbes-warning', 'numbers-danger');
        stateRange.innerText = media;
        statusRandom.innerText = 'Great';
        paragraph.innerText = 'You are a great person, keep going';
    }
}



button.addEventListener('click', () => {
    randomValues();
})