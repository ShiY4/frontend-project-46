const normalizedOutput = (resultArr) => {
  let output = '{';
  for (const [key, value] of resultArr) {
    output += `\n  ${key}: ${value}`;
  }
  output += '\n}';
  return console.log(output);
};

export default normalizedOutput;
