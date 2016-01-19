/* globals describe, it, expect, beforeEach */
define([
    'chai',
    'View'
], function (chai, View) {
    var expect;

    expect = chai.expect;
    describe('View tests regards to compatability', function () {

        var view = new View({name: 'testName', surName: 'SurName'});
        describe('Checking Class', function () {

            it('Checking if constructor took names', function () {
                expect(view.name).to.equal('testName');
                expect(view.surName).to.equal('SurName');
            });



            it('Check if getter and setter for name Surname works', function () {
                view.name = 'Other test';
                view.surName = 'Other Test SurName';
                expect(view.name).to.equal('Other test');
                expect(view.surName).to.equal('Other Test SurName');
            });


        });


    });
});