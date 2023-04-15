import data from "./modules/data.json" assert { type: "json" }

let dataArr = Object.values(data).map((item) => parseFloat(item))

const plate = [0.5, 1, 2.5, 5, 10, 15, 20, 25, 4.53592, 11.3398, 15.8757, 20.4117];
const bar = 20;
const limitPlate = 12;

function minWeightForRecord(weight) {
    let combinations = [];
    findCombinations([], 0, weight);

    let eligibleCombinations = combinations.filter(combination => getWeight(combination) > weight);

    eligibleCombinations.sort((a, b) => getWeight(a) - getWeight(b));

    return JSON.stringify({
        plates: eligibleCombinations[0],
        weight: eligibleCombinations[0].reduce(function (a, b) { return (a + b) } ) + bar + " " + "KILLOGRAM"
    });

    function findCombinations(currentCombination, currentWeight, weight) {
        
        if (currentWeight + bar > weight) {
            combinations.push(currentCombination);
            return;
        }
        
        if (currentCombination.length >= limitPlate) {
            return;
        }

        for (let i = 0; i < plate.length; i++) {
            let newCombination = currentCombination.concat(plate[i], plate[i]);
            let newWeight = currentWeight + plate[i] * 2;
            findCombinations(newCombination, newWeight, weight);
        }
    }

    function getWeight(combination) {
        return combination.reduce((total, plateWeight) => total + plateWeight, 0) + bar * 2;
    }
}

for (let i = 0; i < dataArr.length; i++) {
    console.log(minWeightForRecord(dataArr[i]));
} 

