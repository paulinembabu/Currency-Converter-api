var CurrencyValue = require('./currency-value');

var yearVar = [
  {
  year:2012,
  value: 20
},
{
 year:2013,
 value:30
},
{
  year:2014,
  value:200
},
{
  year:2015,
  value: 40
}
];
var data =[];
for(var i =0; i<yearVar.length; i++){
const agricultureKPI  = {
  year: yearVar[i].year,
  price_per_acre: CurrencyValue,
  input_cost: CurrencyValue,
  number_acres: yearVar[i].value,
};
data.push(agricultureKPI);
}

exports.data= data;
