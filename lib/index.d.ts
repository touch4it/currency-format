export class Price {
    /**
     * Object constructor
     *
     * @param {string|Number} amount Price amount
     * @param {string} currency? Price currency
     */
    constructor(amount: string | number, currency?: string);
    amount: number;
    currency: string;
    decimals: any;
    /**
     * Print string with correct number of decimal places
     *
     * @param {string|Number} decimals? Decimal places in output
     * @returns string Print string with correct number of decimal places
     */
    toString(decimals?: string | number): string;
    /**
     * Return number in the smallest currency unit
     *
     * @param {string|Number} decimals? Decimal places in input
     * @returns Number Return number in the smallest currency unit
     */
    toSmallestUnit(decimals?: string | number): Number;
    /**
     * Add amount to previous amount
     *
     * @param {string|Number} amount Amount to be added
     * @returns Object this
     */
    add(amount: string | number): Price;
    /**
     * Subtract amount from previous amount
     *
     * @param {*} amount Amount to be subtracted
     * @returns Object this
     */
    subtract(amount: any): Price;
    /**
     * Calculate VAT amount
     *
     * @param {string|Number} vatPercent Percent of VAT as number (e.g. `40` for 40%)
     * @returns string VAT amount as string with correct number of decimal places
     */
    vat(vatPercent: string | number): string;
    /**
     * Add VAT amount to previous amount
     *
     * @param {string|Number} vatPercent Percent of VAT as number (e.g. `40` for 40%)
     * @returns Object this
     */
    addVat(vatPercent: string | number): Price;
}
