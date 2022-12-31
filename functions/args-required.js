"use strict";
(() => {
    const fullName = (firtsName, lastName) => {
        return ` ${firtsName} ${lastName} `;
    };
    const name = fullName('Rachel', 'Roth');
    console.log({ name });
})();
