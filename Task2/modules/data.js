const arr = new Array(100).fill().map(() => Math.floor(Math.random() * 100) + 1);

const dataJson = JSON.stringify(arr);

export default dataJson;