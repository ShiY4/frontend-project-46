import { expect, test, describe } from '@jest/globals';
import * as fs from 'node:fs';
import path from 'node:path';
import inspectDiff from '../src/index.js';

const dirname = process.cwd();
console.log(dirname);

const getFixturePath = (filename) => path.join(dirname, '__tests__', '__fixtures__', filename);

describe.each(['json-test'])('%s formatter', (formatter) => {
  const filepathOfExpected = getFixturePath(`${formatter}.txt`);
  const expected = fs.readFileSync(filepathOfExpected, 'utf-8');

  test.each([['json'], ['yml']])('%s files', (extension) => {
    const filepath1 = getFixturePath(`file1.${extension}`);
    const filepath2 = getFixturePath(`file2.${extension}`);

    const result = inspectDiff(filepath1, filepath2, formatter);

    expect(result).toBe(expected);
  });
});
