'use strict'
var financialTrading = require('../models/financial-trading')
var financialAssets = require('../models/financial-assets')
var agricultureKPI = require('../models/agriculture-kpi')


exports.get_financial_trading = function(req, res) {
    res.status(200).json(
      financialTrading.data
    )
};

exports.get_financial_assets = function(req, res) {
  res.status(200).json(
    financialAssets.data
  )
};

exports.get_agriculture_kpi = function(req, res) {
  res.status(200).json(
    agricultureKPI.data
)
};
