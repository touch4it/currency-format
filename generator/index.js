// Data from https://datahub.io/core/currency-codes

const fs = require('fs');

const data = fs.readFileSync('codes.json');
const inputCodes = JSON.parse(data);
const outputCodes = {};

for (const code of inputCodes) {
  const minor = Number(code.MinorUnit);
  if (code.WithdrawalDate || Number.isNaN(minor)) {
    continue;
  }

  outputCodes[code.AlphabeticCode] = minor;
  outputCodes[String(code.NumericCode)] = minor;
}

console.log(outputCodes);

fs.writeFileSync('decimal-places.json', JSON.stringify(outputCodes));
