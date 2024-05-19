import { expect, test } from '@jest/globals';
import * as fs from 'node:fs';
import path from 'node:path';
import parser from '../src/parser.js';

const dirname = process.cwd();
console.log(dirname);

const getFixturePath = (filename) => path.join(dirname, '__tests__', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expected = readFile(`testing.txt`);
console.log(expected, 'expected');

const result = parser('./__tests__/__fixtures__/file1.json', './__tests__/__fixtures__/file2.json');

test('first-test', () => {
  expect(result).toBe(expected);
});
