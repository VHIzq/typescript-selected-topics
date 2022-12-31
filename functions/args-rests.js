"use strict";
(() => {
    const fullName = (firstName, ...args) => {
        return `${firstName} ${args.join(' ')} `;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Superman');
    console.log({ superman });
})();
