const getIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(spacesCount * depth - 2);

const makeString = (value, depth) => {
  if (!(typeof value === 'object' && value !== null && !Array.isArray(value))) {
    return value;
  }
  const keys = Object.keys(value);
  const result = keys.map((key) => {
    const newKey = value[key];
    return `${getIndent(depth + 1)}  ${key}: ${makeString(newKey, depth + 1)}`;
  });
  return `{\n${result.join('\n')}\n  ${getIndent(depth)}}`;
};

const stylish = (array) => {
  const iteration = (node, depth = 1) => {
    const result = node.map((element) => {
      if (element.type === 'parent') {
        return `${getIndent(depth)}  ${element.key}: {\n${iteration(element.children, depth + 1)}\n${getIndent(depth)}  }`;
      }
      if (element.type === 'stay same') {
        return `${getIndent(depth)}  ${element.key}: ${makeString(element.value, depth)}`;
      }
      if (element.type === 'deleted') {
        return `${getIndent(depth)}- ${element.key}: ${makeString(element.value, depth)}`;
      }
      if (element.type === 'added') {
        return `${getIndent(depth)}+ ${element.key}: ${makeString(element.value, depth)}`;
      }
      // if (element.oldValue === '') {
      //   return `${getIndent(depth)}- ${element.key}:\n${getIndent(depth)}+ ${element.key}: ${makeString(element.newValue, depth)}`;
      // }
      // // if (element.newValue === '') {
      // //   return `${getIndent(depth)}- ${element.key}: ${makeString(element.oldValue, depth)}\n${getIndent(depth)}+ ${element.key}:`;
      // // }
      return `${getIndent(depth)}- ${element.key}: ${makeString(element.oldValue, depth)}\n${getIndent(depth)}+ ${element.key}: ${makeString(element.newValue, depth)}`;
    });

    return result.join('\n');
  };
  return `{\n${iteration(array)}\n}`;
};

export default stylish;
