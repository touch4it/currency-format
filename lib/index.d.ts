declare class Price {
  constructor(amount: Number|string, currency?: string);
  toString(decimals?: Number): string;
  add(amount: Number|string): Price;
  subtract(amount: Number|string): Price;
  vat(vatPercent: Number|string): string;
  addVat(vatPercent: Number|string): Price;
}
