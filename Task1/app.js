import dataJson from "../Task1/modules/data.json" assert { type: "json" };

function canTransformNumber(startNum, endNum) {
  const queue = [[startNum, endNum]];

  while (queue.length > 0) {
    const [currentNum, targetNum] = queue.shift();

    const multByTwo = currentNum * 2;
    if (multByTwo === targetNum) {
      return JSON.stringify(`It's ${true}, ${startNum} AND ${endNum} by multiply by 2`);
    } else if (multByTwo < targetNum) {
      queue.push([multByTwo, targetNum]);
    }

    // перетворення за допомогою додавання одиниці
    const addOne = currentNum * 10 + 1;
    if (addOne === targetNum) {
      return JSON.stringify(`It's ${true},${startNum} ${endNum} by add 1 to right`);
    } else if (addOne < targetNum) {
      queue.push([addOne, targetNum]);
    }
  }

  return JSON.stringify(false);
}

const arr = JSON.parse(dataJson.array);

for (let i = 0; i < arr.length; i++) {
  const startNum = arr[i][0];
  const endNum = arr[i][1];
  console.log(canTransformNumber(startNum, endNum));
} 

// node app.js
