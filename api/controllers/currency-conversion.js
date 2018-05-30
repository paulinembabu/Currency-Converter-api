'use strict'
var cur = require('./currency');
var currencies =  cur.currencies;

var currencyRates = [];

for (var i = 0; i < currencies.length; i++) {
  currencies[i].currencyRates = [];
  for (var j = 0; j < currencies.length; j++) {
    if(currencies[i].isoCode != currencies[j].isoCode) {
        currencies[i].currencyRates.push({
          rate: Math.floor((Math.random() * 100) + 1)/ 100,
          currencyIsoCode: currencies[j].isoCode
        })
   }
  }
};


exports.get_currency_conversion = function (req, res) {
   res.status(200).json(currencies)
};

exports.get_currency_conversion_rate = function (req, res) {
  for (var i = 0; i < currencies.length; i++) {
    if (currencies[i].isoCode == req.params.base) {
      for (var j = 0; j < currencies[i].currencyRates.length; j++) {
        if (currencies[i].currencyRates[j].currencyIsoCode == req.params.target) {
          res.status(200).json({rate: currencies[i].currencyRates[j].rate})
          break;
        }
      }
      break;
    }
  }
  res.status(200).json({rate: 1})
};
