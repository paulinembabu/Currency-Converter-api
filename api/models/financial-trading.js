var CurrencyValue = require('./currency-value');
//var yr = require('./years');
//var yearVar = yr.year;


var yearVar = [2012,2013,2014,2015
];
var data =[];
for(var i =0; i<yearVar.length; i++){
  const FinancialTrading = {
    year: yearVar[i],
    revenue: CurrencyValue,
    profit: CurrencyValue,
    grossIncome: CurrencyValue,
  };
  data.push(FinancialTrading);
}
exports.data = data;
