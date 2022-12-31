"use strict";
(() => {
    let audioLevel;
    (function (audioLevel) {
        audioLevel[audioLevel["min"] = 3] = "min";
        audioLevel[audioLevel["med"] = 4] = "med";
        audioLevel[audioLevel["max"] = 10] = "max";
    })(audioLevel || (audioLevel = {}));
    console.log(audioLevel.med);
})();
