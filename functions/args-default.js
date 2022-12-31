"use strict";
(() => {
    const fullName = (firtsName, lastName, toUpper = false) => {
        if (toUpper) {
            return ` ${firtsName}, ${lastName || '--'} `.toUpperCase();
        }
        else {
            return ` ${firtsName}, ${lastName || '--'} `.toLowerCase();
        }
    };
    const name = fullName('Rachel', 'Roth', true);
    console.log({ name });
})();
