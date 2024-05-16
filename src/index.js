// import * as fs from 'node:fs';
import _ from 'lodash';

import normalizedOutput from './normalizedOut.js';

const inspectDiff = (data1, data2) => {
  const keysData1 = Object.keys(data1);
  const keysData2 = Object.keys(data2);
  const allKeys = _.sortBy(_.union(keysData1, keysData2));

  const result = [];
  for (const key of allKeys) {
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

  return normalizedOutput(result);
};

export default inspectDiff;
