import * as fs from 'node:fs';
import path from 'path';

import parser from './parser.js';
import getDifTree from './tree.js';
import format from './formatters/index.js';

const getPath = (way) => path.resolve(process.cwd(), way);

const getExtend = (filepath) => {
  const extend = path.extname(getPath(filepath));
  return extend;
};

const getData = (filepath) => {
  const data = fs.readFileSync(getPath(filepath), 'utf-8');
  const parsedFile = parser(data, getExtend(filepath));
  return parsedFile;
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const differences = format(getDifTree(data1, data2), formatName);
  return differences;
};

export default genDiff;
