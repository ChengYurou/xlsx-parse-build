const xlsx = require('node-xlsx');
const fs = require('fs')

const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/demo.xlsx`));

console.log(JSON.stringify(workSheetsFromBuffer), 2);