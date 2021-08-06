# Dice Roller Website
A simple dice roller website that provides you with many stats such as how many of each number was rolled as well as the percentage of high/low numbers rolled. (Low Number = 1-3 / High Number = 4-6)

This was more of a DOM practice for me, so here's the code that manipulates the DOM elements:
```javascript
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
```
Of course this won't make sense unless you open the files and look at the actual values and whatnot but it's a future reference type thing.