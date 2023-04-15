import dataJson from './modules/data.js';

function findDuplicate(json) {
    let arr = JSON.parse(json);
    let prevNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (prevNum === arr[i]) {
            return JSON.stringify(prevNum);
        }
        prevNum = arr[i];
    }
    return null;
}

console.log(findDuplicate(dataJson));