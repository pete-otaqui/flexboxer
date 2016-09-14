"use strict";
var FlexboxStyle = (function () {
    function FlexboxStyle(options) {
        this.property = '';
        this.value = '';
        if (options) {
            if (options.property)
                this.property = options.property;
            if (options.value)
                this.property = options.value;
        }
    }
    return FlexboxStyle;
}());
exports.FlexboxStyle = FlexboxStyle;
//# sourceMappingURL=flexbox-style.js.map