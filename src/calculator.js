
function calculate(monthlyRent, year) {

    let years = []
    var yearlyRent = monthlyRent * 12;
    var data = getData();
    var totalSaving = 0;

    // find the inflation by rent
    data.forEach(function (year, index) {
        // x * 1.04 = y, x= y/1.04
        yearlyRent /= (1 + (year.wageInflationRate/100));
        year.inflationTotalByRent = yearlyRent;        
      });

    // ring the inflation if it related to wage increase
    data.reverse().forEach(function (year, index) {
        yearlyRent *= (1 + (year.rentInflationRate/100));
        year.inflationTotalByWage = yearlyRent;
        if (year.year >= year) {
          totalSaving +=  year.inflationTotalByRent - year.inflationTotalByWage;
        }
      });

    
    output = {monthlyRent, year, totalSaving};

    return output;


}

function getData() {
    return [  
        { year: 2020, rentInflationRate: -0.3, wageInflationRate: 0.6},
        { year: 2019, rentInflationRate: -2.1, wageInflationRate: 3.3},
        { year: 2018, rentInflationRate: -0.4, wageInflationRate: 3.1},
        { year: 2017, rentInflationRate: -1.7, wageInflationRate: 3.0},
        { year: 2016, rentInflationRate: 2.3, wageInflationRate: 1.7},
        { year: 2015, rentInflationRate: 9.5, wageInflationRate: 0.1},
        { year: 2014, rentInflationRate: 4.2, wageInflationRate: 0.8},
        { year: 2013, rentInflationRate: 10.5, wageInflationRate: 0.4},
        { year: 2012, rentInflationRate: 3.3, wageInflationRate: 0.6},
                
    ]
}

module.exports = calculate;   