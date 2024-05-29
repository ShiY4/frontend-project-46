import * as fs from 'node:fs';
import path from 'path';
// import _ from 'lodash';

import parser from './parser.js';
// import normalizedOutput from './normalizedOut.js';
import getDifTree from './tree.js';
import formatter from './formatter/stylish.js';

const getPath = (way) => path.resolve(process.cwd(), way);

const getExtend = (filepath) => {
  const extend = path.extname(getPath(filepath));
  // console.log(extend, 'extend');
  return extend;
};

const getData = (filepath) => {
  const data = fs.readFileSync(getPath(filepath), 'utf-8');
  const parsedFile = parser(data, getExtend(filepath));
  return parsedFile;
};

// const inspectDiff = (filepath1, filepath2) => {
//   const data1 = getData(filepath1);
//   const data2 = getData(filepath2);
//   const keysData1 = Object.keys(data1);
//   const keysData2 = Object.keys(data2);
//   const allKeys = _.sortBy(_.union(keysData1, keysData2));

//   const result = [];
//   for (const key of allKeys) {
//     if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
//       if (data1[key] === data2[key]) {
//         result.push([`  ${key}`, data1[key]]);
//       } else {
//         result.push([`- ${key}`, data1[key]]);
//         result.push([`+ ${key}`, data2[key]]);
//       }
//     } else if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
//       result.push([`- ${key}`, data1[key]]);
//     } else {
//       result.push([`+ ${key}`, data2[key]]);
//     }
//   }

//   return normalizedOutput(result);
// };

const genDiff = (filepath1, filepath2) => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const differences = formatter(getDifTree(data1, data2));
  console.log(differences);
  return differences;
};

export default genDiff;
// export default inspectDiff;
