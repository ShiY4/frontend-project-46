// import * as fs from 'node:fs';
// import path from 'path';
import yaml from 'js-yaml';

const parser = (data, type) => {
  switch (type) {
    case '.yml':
    case '.yaml':
      return yaml.load(data);
    case '.json':
      return JSON.parse(data);
    default:
      return console.log(`Format ${type} is not supported!`);
  }
};

export default parser;
