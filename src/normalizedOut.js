const normalizedOutput = (resultArr) => {
  let output = '{';
  for (const [key, value] of resultArr) {
    output += `\n  ${key}: ${value}`;
  }
  output += '\n}';
  console.log(output);
  return output;
};

export default normalizedOutput;
