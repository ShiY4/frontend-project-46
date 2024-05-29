const formatter = (obj) => {
  let out = '{';
  for (const key of obj) {
    // console.log(key.type);
    // console.log(key);
    if (key.type === 'parent') {
      formatter(key.children);
      out += `\n  ${key.key}: ${key.children}`;
      // console.log(children);
    }

    if (key.type === 'added') {
      out += `\n  + ${key.key}: ${key.value}`;
    }

    if (key.type === 'deleted') {
      out += `\n  - ${key.key}: ${key.value}`;
    }

    if (key.type === 'diffValue') {
      out += `\n  - ${key.key}: ${key.oldValue}`;
      out += `\n  + ${key.key}: ${key.newValue}`;
    }

    if (key.type === 'stay same') {
      out += `\n    ${key.key}: ${key.value}`;
    }
  }
  console.log(out);
};

export default formatter;
