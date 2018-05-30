'use strict'

const currencies = [
  {
    currency: 'Kenya Shilling',
    isoCode: 'KES',
    symbol: 'Ksh'
  },
  {
    currency: 'US Dollar',
    isoCode: 'USD',
    symbol: '$'
  },
  {
    currency: 'Euro',
    isoCode: 'EUR',
    symbol: '€'
  },
  {
    currency: 'Ugandan Shilling',
    isoCode: 'UGX',
    symbol: 'Ush'
  },
  {
    currency: 'Tanzanian Shilling',
    isoCode: 'TZS',
    symbol: 'Tsh'
  }
];

exports.get_currencies = function(req, res) {
    res.status(200).json(currencies)
};

exports.currencies = currencies;
