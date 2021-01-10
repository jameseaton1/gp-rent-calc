
function calculate(monthlyRent, year) {

    let years = []

    console.log(getData());
    output = {monthlyRent, year};


    return output;


}

function getData() {
    return [  { year: 2012, rentInflationRate: 3.3, wageInflationRate: 0.6},
        { year: 2013, rentInflationRate: 10.5, wageInflationRate: 0.4},
                
    ]
}

module.exports = calculate;   