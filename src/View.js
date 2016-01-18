/*global define*/
define(()=> {
    'use strict';
    const name = Symbol();
    const surName = Symbol();
    class View {
        constructor(options) {
            this.name = options.name;
            this.surName = options.surName;
        }

        get name() {
            return this[name];
        }

        set name(newName) {
            if (newName) {
                this[name] = newName;
            }
        }
        get surName() {
            return this[surName];
        }

        set surName(newName) {
            if (surName) {
                this[surName] = newName;
            }
        }

        template() {
            return `template ${this.name}  ${this.surName} test`;
        }

        render() {
            return this.template();
        }
    }
    return View;
});