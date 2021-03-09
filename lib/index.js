const decimalPlaces = {"8":2,"12":2,"32":2,"36":2,"44":2,"48":3,"50":2,"51":2,"52":2,"60":2,"64":2,"68":2,"72":2,"84":2,"90":2,"96":2,"104":2,"108":0,"116":2,"124":2,"132":2,"136":2,"144":2,"152":0,"156":2,"170":2,"174":0,"188":2,"191":2,"192":2,"203":2,"208":2,"214":2,"222":2,"230":2,"232":2,"238":2,"242":2,"262":0,"270":2,"292":2,"320":2,"324":0,"328":2,"332":2,"340":2,"344":2,"348":2,"352":0,"356":2,"360":2,"364":2,"368":3,"376":2,"388":2,"392":0,"398":2,"400":3,"404":2,"408":2,"410":0,"414":3,"417":2,"418":2,"422":2,"426":2,"430":2,"434":3,"446":2,"454":2,"458":2,"462":2,"480":2,"484":2,"496":2,"498":2,"504":2,"512":3,"516":2,"524":2,"532":2,"533":2,"548":0,"554":2,"558":2,"566":2,"578":2,"586":2,"590":2,"598":2,"600":0,"604":2,"608":2,"634":2,"643":2,"646":0,"654":2,"682":2,"690":2,"694":2,"702":2,"704":0,"706":2,"710":2,"728":2,"748":2,"752":2,"756":2,"760":2,"764":2,"776":2,"780":2,"784":2,"788":3,"800":0,"807":2,"818":2,"826":2,"834":2,"840":2,"858":2,"860":2,"882":2,"886":2,"901":2,"927":4,"928":2,"929":2,"930":2,"931":2,"932":2,"933":2,"934":2,"936":2,"938":2,"940":0,"941":2,"943":2,"944":2,"946":2,"947":2,"948":2,"949":2,"950":0,"951":2,"952":0,"953":0,"967":2,"968":2,"969":2,"970":2,"971":2,"972":2,"973":2,"975":2,"976":2,"977":2,"978":2,"979":2,"980":2,"981":2,"984":2,"985":2,"986":2,"990":4,"997":2,"AFN":2,"EUR":2,"ALL":2,"DZD":2,"USD":2,"AOA":2,"XCD":2,"null":0,"ARS":2,"AMD":2,"AWG":2,"AUD":2,"AZN":2,"BSD":2,"BHD":3,"BDT":2,"BBD":2,"BYN":2,"BZD":2,"XOF":0,"BMD":2,"INR":2,"BTN":2,"BOB":2,"BOV":2,"BAM":2,"BWP":2,"NOK":2,"BRL":2,"BND":2,"BGN":2,"BIF":0,"CVE":2,"KHR":2,"XAF":0,"CAD":2,"KYD":2,"CLP":0,"CLF":4,"CNY":2,"COP":2,"COU":2,"KMF":0,"CDF":2,"NZD":2,"CRC":2,"HRK":2,"CUP":2,"CUC":2,"ANG":2,"CZK":2,"DKK":2,"DJF":0,"DOP":2,"EGP":2,"SVC":2,"ERN":2,"SZL":2,"ETB":2,"FKP":2,"FJD":2,"XPF":0,"GMD":2,"GEL":2,"GHS":2,"GIP":2,"GTQ":2,"GBP":2,"GNF":0,"GYD":2,"HTG":2,"HNL":2,"HKD":2,"HUF":2,"ISK":0,"IDR":2,"IRR":2,"IQD":3,"ILS":2,"JMD":2,"JPY":0,"JOD":3,"KZT":2,"KES":2,"KPW":2,"KRW":0,"KWD":3,"KGS":2,"LAK":2,"LBP":2,"LSL":2,"ZAR":2,"LRD":2,"LYD":3,"CHF":2,"MOP":2,"MKD":2,"MGA":2,"MWK":2,"MYR":2,"MVR":2,"MRU":2,"MUR":2,"MXN":2,"MXV":2,"MDL":2,"MNT":2,"MAD":2,"MZN":2,"MMK":2,"NAD":2,"NPR":2,"NIO":2,"NGN":2,"OMR":3,"PKR":2,"PAB":2,"PGK":2,"PYG":0,"PEN":2,"PHP":2,"PLN":2,"QAR":2,"RON":2,"RUB":2,"RWF":0,"SHP":2,"WST":2,"STN":2,"SAR":2,"RSD":2,"SCR":2,"SLL":2,"SGD":2,"SBD":2,"SOS":2,"SSP":2,"LKR":2,"SDG":2,"SRD":2,"SEK":2,"CHE":2,"CHW":2,"SYP":2,"TWD":2,"TJS":2,"TZS":2,"THB":2,"TOP":2,"TTD":2,"TND":3,"TRY":2,"TMT":2,"UGX":0,"UAH":2,"AED":2,"USN":2,"UYU":2,"UYI":0,"UYW":4,"UZS":2,"VUV":0,"VES":2,"VND":0,"YER":2,"ZMW":2,"ZWL":2};
const defaultCurrency = 'USD';

class Price {
  /**
   * Object constructor
   *
   * @param {string|Number} amount Price amount
   * @param {string} currency? Price currency
   */
  constructor(amount, currency = defaultCurrency) {
    this.amount = Number.parseFloat(amount);

    if (Number.isNaN(this.amount)) {
      throw new Error('Amount not number');
    }

    this.currency = currency;

    if (!(this.currency in decimalPlaces)) {
      throw new Error('Currency not found');
    }

    this.decimals = decimalPlaces[this.currency];
  }

  /**
   * Print string with correct number of decimal places
   *
   * @param {string|Number} decimals? Decimal places in output
   * @returns string Print string with correct number of decimal places
   */
  toString(decimals = this.decimals) {
    return Number.parseFloat(this.amount).toFixed(decimals);
  }

  /**
   * Add amount to previous amount
   *
   * @param {string|Number} amount Amount to be added
   * @returns Object this
   */
  add(amount) {
    this.amount += Number.parseFloat(amount);
    return this;
  }

  /**
   * Subtract amount from previous amount
   *
   * @param {*} amount Amount to be subtracted
   * @returns Object this
   */
  subtract(amount) {
    this.amount -= Number.parseFloat(amount);
    return this;
  }

  /**
   * Calculate VAT amount
   *
   * @param {string|Number} vatPercent Percent of VAT as number (e.g. `40` for 40%)
   * @returns string VAT amount as string with correct number of decimal places
   */
  vat(vatPercent) {
    const vatAmount = this.amount * Number(vatPercent) / 100;
    return vatAmount.toFixed(this.decimals);
  }

  /**
   * Add VAT amount to previous amount
   *
   * @param {string|Number} vatPercent Percent of VAT as number (e.g. `40` for 40%)
   * @returns Object this
   */
  addVat(vatPercent) {
    return this.add(this.vat(vatPercent));
  }
}

module.exports = {
  Price
};
