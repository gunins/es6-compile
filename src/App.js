/*global define*/
define(['./View'], (View) => {
    'use strict';

    class AppView extends View {
        constructor(...args) {
            super(...args);
        }

        render() {
            var template = super.render();
            console.log(template);
            console.log(this);
        }
    }

    var view = new AppView({name: 'testName', surName: 'SurName'});
    view.render();
    view.name = 'Other test';
    view.surName = 'Other Test SurName';

    view.render();

    return AppView;
});