var assert = require('assert');
var expect = require('chai').expect;

var rentCalculator = require("../src/calculator");


describe("Rent Calculator", function() {
        let expectedMonthlyRent =   1639 ;
        let expectedYear = 2018;
        let rentcalculation = rentCalculator(expectedMonthlyRent, expectedYear);

        it('A should return the monthly rent', function() {
            expect(rentcalculation.monthlyRent).to.equal(expectedMonthlyRent);
        }),
        it('C should return the monthly wage corrected rent', function() {
            expect(rentcalculation.correctedMonthlyRent).to.equal(1468); //1472
        }),
        it('D should return the monthly overpayed rent', function() {
            expect(rentcalculation.montlhyOverpayedRent).to.equal(171); //168
        }) 
        it('E should return the total overpayed rent since ' + expectedYear, function() {
            expect(rentcalculation.totalOverpayment).to.equal((185 * 12) + (171 * 12) + (266 *12)); 
        }) 
        it('F should return the total overpayed', function() {
            expect(rentcalculation.totalOverpaymentForEveryoneByYear).to.equal(( 2933029421 + 2134937493 + 1976024700));
        }) 
  });