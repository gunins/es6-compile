/* globals describe, it, expect, beforeEach */
define([
    'chai',
    'App'
], function (chai, App) {
    var expect;

    expect = chai.expect;
    describe('App tests regards to compatability', function () {

        var view = new App({name: 'testName', surName: 'SurName'});
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