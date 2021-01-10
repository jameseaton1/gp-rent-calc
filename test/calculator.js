var assert = require('assert');
var expect = require('chai').expect;

var rentCalculator = require("../src/calculator");


describe("Rent Calculator", function() {
        let expectedMonthlyRent = 1000;
        let expectedYear = 2012;
        let rentcalculation = rentCalculator(expectedMonthlyRent, expectedYear);

        it('A should return the monthly rent', function() {
            expect(rentcalculation.monthlyRent).to.equal(expectedMonthlyRent);
        }),
        it('C should return the monthly wage corrected rent', function() {
            expect(rentcalculation.year).to.equal(expectedYear);
        }),
        it('D should return the monthly overpayed rent', function() {

        }) 
        it('E should return the total overpayed rent since Year', function() {

        }) 
        it('F should return the total overpayed', function() {

        }) 
  });