
function calculate(monthlyRent, startYear) {

    var yearlyRent = monthlyRent * 12;
    var data = getData();
    var totalSaving = 0;

    // find the inflation by rent
    data.forEach(function (year, index) {
        // No inflated values for 2020
        if (year.year === 2020) {
          year.realMonthlyRent = monthlyRent;
        } else {
          year.realMonthlyRent = data[index -1].realMonthlyRent / (1 + (data[index - 1].realInflationRate / 100));
        }
        year.inflationTotalByRent = yearlyRent;        
      });


    var totalOverpayment = 0;
    var totalOverpaymentForEveryone = 0;
    // find the inflation related to wage increase
    data.reverse().forEach(function (year, index) {
      if (year.year === 2011)  {
        year.wageMonthlyRent = year.realMonthlyRent;  //reset to a base value
      } else {
        year.wageMonthlyRent = data[index-1].wageMonthlyRent * (1 + (year.wageInflationRate/100));
          // if it's in the years we want add it to the total
          if (year.year >= startYear) {
            totalOverpayment +=  (year.realMonthlyRent * 12) - (year.wageMonthlyRent * 12);
            totalOverpaymentForEveryone += year.overpaymentForEveryone;
          }
        }
      });

    
    output = {"monthlyRent" : Math.round(monthlyRent), 
              startYear, 
              "totalOverpayment" : Math.round(totalOverpayment), 
              "correctedMonthlyRent" : Math.round(data[data.length -1].wageMonthlyRent),
              "montlhyOverpayedRent" : Math.round(data[data.length -1].realMonthlyRent - data[data.length -1].wageMonthlyRent),
              "totalOverpaymentForEveryoneByYear" : Math.round(totalOverpaymentForEveryone),
              "totalOverpaymentForEveryone" : "23,792,513,569"};

    return output;


}

function getData() {
    return [  
      { year: 2020, realInflationRate: -0.3, wageInflationRate: 0.6, overpaymentForEveryone: 1976024700 },
      { year: 2019, realInflationRate: -2.1, wageInflationRate: 3.3, overpaymentForEveryone: 2134937493 },
      { year: 2018, realInflationRate: -0.4, wageInflationRate: 3.1, overpaymentForEveryone: 2933029421 },
      { year: 2017, realInflationRate: -1.7, wageInflationRate: 3.0, overpaymentForEveryone: 3648550668 },
      { year: 2016, realInflationRate: 2.3, wageInflationRate: 1.7, overpaymentForEveryone: 4494047935 },
      { year: 2015, realInflationRate: 9.5, wageInflationRate: 0.1, overpaymentForEveryone: 3981292737 },
      { year: 2014, realInflationRate: 4.2, wageInflationRate: 0.8, overpaymentForEveryone: 2442373670 },
      { year: 2013, realInflationRate: 10.5, wageInflationRate: 0.4, overpaymentForEveryone: 1809835737 },
      { year: 2012, realInflationRate: 3.3, wageInflationRate: 0.6, overpaymentForEveryone: 372421209 },
      { year: 2011, wageInflationRate: 0.9}
                
    ]
}

module.exports = calculate;   