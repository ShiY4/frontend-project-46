import * as fs from 'node:fs';
import _ from 'lodash';
// import { resolve } from 'path';

const normalizeOutput = (resultArr) => {
  let output = '{';
  for (const [key, value] of resultArr) {
    output += `\n  ${key}: ${value}`;
  }
  output += '\n}';
  console.log(output);
};

const inspectDiff = (data1, data2) => {
  // console.log(data1, data2);
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const result = [];
  for (const key of keys) {
    if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      if (data1[key] === data2[key]) {
        result.push([`  ${key}`, data1[key]]);
      } else {
        result.push([`- ${key}`, data1[key]]);
        result.push([`+ ${key}`, data2[key]]);
      }
    } else if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
      result.push([`- ${key}`, data1[key]]);
    } else {
      result.push([`+ ${key}`, data2[key]]);
    }
  }

  return normalizeOutput(result);
};

const parser = (filepath1, filepath2) => {
  // console.log('filepath1:', resolve(filepath1));
  // console.log('filepath2:', resolve(filepath2));
  const data1 = fs.readFileSync(filepath1); // Читаем файл 1
  const data2 = fs.readFileSync(filepath2); // Читаем файл 2
  const obj1 = JSON.parse(data1); // Парсим файл 1
  const obj2 = JSON.parse(data2); // Парсим файл 1

  inspectDiff(obj1, obj2);
};

export default parser;
