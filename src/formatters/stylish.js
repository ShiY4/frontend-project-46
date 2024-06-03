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
      switch (element.type) {
        case 'parent':
          return `${getIndent(depth)}  ${element.key}: {\n${iteration(element.children, depth + 1)}\n${getIndent(depth)}  }`;
        case 'stay same':
          return `${getIndent(depth)}  ${element.key}: ${makeString(element.value, depth)}`;
        case 'deleted':
          return `${getIndent(depth)}- ${element.key}: ${makeString(element.value, depth)}`;
        case 'added':
          return `${getIndent(depth)}+ ${element.key}: ${makeString(element.value, depth)}`;
        default:
          return `${getIndent(depth)}- ${element.key}: ${makeString(element.oldValue, depth)}\n${getIndent(depth)}+ ${element.key}: ${makeString(element.newValue, depth)}`;
      }
    });

    return result.join('\n');
  };
  return `{\n${iteration(array)}\n}`;
};

export default stylish;
