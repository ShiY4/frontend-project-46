import * as fs from 'node:fs';
import path from 'path';
import inspectDiff from './index.js';

const getPath = (way) => path.resolve(process.cwd(), way);

const parser = (filepath1, filepath2) => {
  const data1 = fs.readFileSync(getPath(filepath1)); // Читаем файл 1
  const data2 = fs.readFileSync(getPath(filepath2)); // Читаем файл 2
  const obj1 = JSON.parse(data1); // Парсим файл 1
  const obj2 = JSON.parse(data2); // Парсим файл 1

  return inspectDiff(obj1, obj2);
};

export default parser;
