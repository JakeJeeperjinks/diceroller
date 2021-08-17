const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    const diceRolls = form.elements.diceRolls;

        e.preventDefault();
        diceLogic();

        diceRolls.value = '';
    
})
    
    

const diceLogic = () => {
    const diceRolls = form.elements.diceRolls;

    let rolls = form.elements.diceRolls.value;
    let numArrLow = [];
    let numArrHigh = [];

    let one = [];
    let two = [];
    let three = [];
    let four = [];
    let five = [];
    let six = [];


    for (let i = 0; i < rolls; i++) {
        let randNum = (Math.floor(Math.random() * 6) + 1);
    
        switch (randNum) {
            case 1:
                one.push(randNum)
                numArrLow.push(randNum)
                break;
            case 2: 
                two.push(randNum)
                numArrLow.push(randNum)
                break;
            case 3:
                three.push(randNum)
                numArrLow.push(randNum)
                break;
            case 4: 
                four.push(randNum)
                numArrHigh.push(randNum)
                break;
            case 5:
                five.push(randNum)
                numArrHigh.push(randNum)
                break;
            case 6:
                six.push(randNum)
                numArrHigh.push(randNum)
                break;
            default:
                console.log('ERROR!');
        }
            
    }


    diceRoll(diceRolls.value, numArrLow.length, numArrHigh.length, one.length, two.length, three.length, four.length, five.length, six.length)
    //So many arguments
}


const diceRoll = (roll, lowNum, highNum, one, two, three, four, five, six) => {
    const newRollData = document.createElement('li');
    newRollData.classList.add('dataList')
    const list = document.querySelector('#list');
    let totalNum = lowNum + highNum;
    const percentLow = Math.round((lowNum/totalNum*100));
    const percentHigh = Math.round((highNum/totalNum*100));
    

    newRollData.append(`You input ${roll} rolls. Out of those roles, ${lowNum} were low, and ${highNum} were high. Approximately ${percentLow}% were low numbers, and ${percentHigh}% were high numbers. ${one} ones were rolled, ${two} twos were rolled, ${three} three's were rolled, ${four} fours were rolled, ${five} fives were rolled, ${six} sixes were rolled.`)
    const dashLine = document.createElement('p');
    dashLine.append('------------------------------------')
    newRollData.append(dashLine)
    list.append(newRollData)
}




//Saving Data feature
const saveButton = document.querySelector('.saveData');
saveButton.addEventListener('click', () => {

    const lists = document.querySelectorAll('.dataList')
    const arrData = [];

    for (let list of lists) {
        arrData.push('\n' + list.innerText)
    }

    // console.log(arrData)

    const blob = new Blob([arrData],{
        type: 'text/plain;charset=utf-8',
        endings: 'transparent'
    });
    saveAs(blob, "data.txt");
})

