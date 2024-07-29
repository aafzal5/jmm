const string = "Street";

const output = {};

for (let i = 0; i < string.length; i++) {
  if (output.hasOwnProperty(string[i].toLowerCase())) {
    output[string[i]]++;
  } else {
    output[string[i]] = 1;
  }
}

console.log(output);
