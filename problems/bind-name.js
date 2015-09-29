'use strict';

function bindName(firstName, lastName, func) {
    var name = firstName + " " + lastName;
    var firstName = 'Shirley';
    var lastName = 'Ashby';
    var func = func.bind(null, name);
    return func;
    };
 module.exports = bindName;
