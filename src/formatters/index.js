import plain from './plain.js';
import stylish from './stylish.js';

const format = (data, fileFormat) => {
  switch (fileFormat) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    default:
      return `'${fileFormat}' is unknown format!`;
  }
};

export default format;
