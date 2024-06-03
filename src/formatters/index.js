import plain from './plain.js';
import stylish from './stylish.js';

const format = (data, fileFormat) => {
  switch (fileFormat) {
    case '':
      return stylish(data);
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return JSON.stringify(data, null, 2);
    default:
      throw new Error(`'${fileFormat}' is unknown format!`);
  }
};

export default format;
