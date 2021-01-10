
function calculate(monthlyRent, year) {

    let years = []
    var yearlyRent = monthlyRent * 12;
    var data = getData();

    
    data.forEach(function (year, index) {
        // x * 1.04 = y, x= y/1.04
        yearlyRent /= (1 + year.wageInflationRate);
        year.rentDeflationTotal = yearlyRent;
      });

    data.reverse().forEach(function (year, index) {
        year.rentInflationTotal = yearlyRent * (1 + year.wageInflationRate)
      });

    console.log(data);
    output = {monthlyRent, year};


    return output;


}

function getData() {
    return [  
        { year: 2013, rentInflationRate: 10.5, wageInflationRate: 0.4},
        { year: 2012, rentInflationRate: 3.3, wageInflationRate: 0.6}
                
    ]
}

module.exports = calculate;   