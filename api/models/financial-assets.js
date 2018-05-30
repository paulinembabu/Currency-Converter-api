var currencyValue =  require('./currency-value');

var yearVar = [2012,2013,2014,2015
];
var data =[];
for(var i =0; i<yearVar.length; i++){
const financialAssets =  {
  year: yearVar[i],
  assets: currencyValue,
  liabilities: currencyValue,
};
data.push(financialAssets);
}
exports.data = data;
