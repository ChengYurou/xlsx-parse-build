const xlsx = require('node-xlsx');
const fs = require('fs');

const data = [
  [1, 2, 3],
  [true, false, null, 'sheetjs'],
  ['foo', 'bar', Date.now(), '0.3'],
  ['baz', null, 'qux']
];

const buffer = xlsx.build([{name: "mySheetName", data: data}]);
fs.writeFileSync('./build.xlsx', buffer);