'use strict';
module.exports = function(app) {
  var currencies = require('../controllers/currency');
  var data = require('../controllers/data');
  var currencyConversion = require('../controllers/currency-conversion');

  app.route('/currencies')
    .get(currencies.get_currencies);

  app.route('/financial-trading')
    .get(data.get_financial_trading);

  app.route('/financial-assets')
    .get(data.get_financial_assets);

  app.route('/agriculture-kpi')
    .get(data.get_agriculture_kpi);

  app.route('/currency-conversion')
    .get(currencyConversion.get_currency_conversion);

  app.route('/currency-conversion-rate/:base/:target')
      .get(currencyConversion.get_currency_conversion_rate);
};
