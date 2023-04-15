import dataJson from "../Task3_2/modules/data.json" assert { type: "json" };

const sizes = dataJson.aviableSizes;
const participants = dataJson.participants;

function calculateTshirts(sportsmens) {
  const availableSizes = { ...sizes };
  const tshirts = {};

  for (const participant of sportsmens) {
    for (const size of participant.sizes) {
      if (availableSizes[size] > 0) {
        if (!tshirts[participant.name]) {
          tshirts[participant.name] = [size];
        } else {
          tshirts[participant.name].push(size);
        }
        availableSizes[size]--;
        break;
      }
    }
  }

  // даємо другу футболку
  for (const participant of sportsmens) {
    if (participant.sizes.length === 2) {
      for (const size of participant.sizes) {
        if (availableSizes[size] > 0
          && !tshirts[participant.name].includes(size)) {
          tshirts[participant.name].push(size);
          availableSizes[size]--;
          break;
        }
      }
    }
  }

  return tshirts;
}
const tshirts = calculateTshirts(participants);
console.log(tshirts);