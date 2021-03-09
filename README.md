# Format currency output

## Installation

```bash
$ npm install --save @touch4it/currency-format
```

## API

### `constructor(amount, [currency='USD'])`

Object constructor

__Options:__

- `amount` (**required**) - Price amount
- `currency` (*optional*, default: `USD`) - Price currency

### `toString([decimals])`

Print string with correct number of decimal places

__Options:__

- `decimals` (*optional*, default: calculated from currency) - Decimal places in output

__Return:__

Formatted string

### `add(amount)`

Add amount to previous amount

__Options:__

- `amount` (**required**) - Amount to be added

__Return:__

Object (this)

### `subtract(amount)`

Subtract amount from previous amount

__Options:__

- `amount` (**required**) - Amount to be subtracted

__Return:__

Object (this)

### `vat(vatPercent)`

Calculate VAT amount

__Options:__

- `vatPercent` (**required**) - Percent of VAT as number (e.g. `40` for 40%)

__Return:__

VAT amount as string with correct number of decimal places

### `addVat(vatPercent)`

Add VAT amount to previous amount

__Options:__

- `vatPercent` (**required**) - Percent of VAT (e.g. `40` for 40%)

__Return:__

Object (this)

## Example

See [tests](tests/)

## License

MIT

## Authors

- [Touch4IT, s.r.o. contributors](https://github.com/touch4it/currency-format/graphs/contributors)
