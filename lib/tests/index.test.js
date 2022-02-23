const app = require('../index');
const Price = app.Price;

test('Empty constructor', () => {
  const t = () => {
    new Price();
  };

  expect(t).toThrow(Error);
});

test('Text constructor', () => {
  const t = () => {
    new Price('a');
  };

  expect(t).toThrow(Error);
});

test('Incorrect currency', () => {
  const t = () => {
    new Price(1, 'XXX');
  };

  expect(t).toThrow(Error);
});

test('String constructor', () => {
  const price = new Price('1');

  expect(price.amount).toBe(1);
  expect(price.currency).toBe('USD');
});

test('One arg constructor', () => {
  const price = new Price(1);

  expect(price.amount).toBe(1);
  expect(price.currency).toBe('USD');
});

test('Two args constructor', () => {
  const price = new Price(1, 'EUR');

  expect(price.amount).toBe(1);
  expect(price.currency).toBe('EUR');
});

test('To string - 0 decimals by currency', () => {
  const price = new Price(1.0000000001, 'XOF');

  expect(price.toString()).toBe('1');
});

test('To string - 2 decimals by currency', () => {
  const price = new Price(1.0000000001, 'EUR');

  expect(price.toString()).toBe('1.00');
});

test('To string - 3 decimals by currency', () => {
  const price = new Price(1.0000000001, 'BHD');

  expect(price.toString()).toBe('1.000');
});

test('To string - 4 decimals by currency', () => {
  const price = new Price(1.0000000001, 'CLF');

  expect(price.toString()).toBe('1.0000');
});

test('To string - 0 decimals by option', () => {
  const price = new Price(1.0000000001, 'EUR');

  expect(price.toString(0)).toBe('1');
});

test('To string - 4 decimals by option', () => {
  const price = new Price(1.0000000001, 'EUR');

  expect(price.toString(4)).toBe('1.0000');
});

test('Add - number', () => {
  const price = new Price(1.0000000001, 'CLF');
  price.add(2.0000000002);

  expect(price.amount).toBe(3.0000000003);
});

test('Add - string', () => {
  const price = new Price(1.0000000001, 'CLF');
  price.add('2.0000000002');

  expect(price.amount).toBe(3.0000000003);
});

test('Subtract - number', () => {
  const price = new Price(3.0000000003, 'CLF');
  price.subtract(2.0000000002);

  expect(price.amount).toBe(1.0000000001);
});

test('Subtract - string', () => {
  const price = new Price(3.0000000003, 'CLF');
  price.subtract('2.0000000002');

  expect(price.amount).toBe(1.0000000001);
});

test('VAT - number', () => {
  const price = new Price(1);
  const vat = price.vat(20);

  expect(vat).toBe('0.20');
});

test('VAT - string', () => {
  const price = new Price(1);
  const vat = price.vat('20');

  expect(vat).toBe('0.20');
});

test('Add VAT - number', () => {
  const price = new Price(1);
  price.addVat(20);

  expect(price.amount).toBe(1.2);
});

test('Add VAT - string', () => {
  const price = new Price(1);
  price.addVat('20');

  expect(price.amount).toBe(1.2);
});

test('Smallest currency unit - no decimals', () => {
  const price = new Price(1);

  expect(price.toSmallestUnit()).toBe(100);
});

test('Smallest currency unit - one decimal', () => {
  const price = new Price(1.2);

  expect(price.toSmallestUnit()).toBe(120);
});

test('Smallest currency unit - full decimals', () => {
  const price = new Price(1.20);

  expect(price.toSmallestUnit()).toBe(120);
});

test('Smallest currency unit - currency with no decimals', () => {
  const price = new Price(120, 'JPY');

  expect(price.toSmallestUnit()).toBe(120);
});

test('Smallest currency unit - string price', () => {
  const price = new Price('120', 'JPY');

  expect(price.toSmallestUnit()).toBe(120);
});
