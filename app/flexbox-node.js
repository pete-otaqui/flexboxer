"use strict";
var FlexboxNode = (function () {
    function FlexboxNode(id, options) {
        this.tagName = 'div';
        this.styles = new Array();
        this.className = this.generateClassName();
        this.childIds = new Array();
        this.id = id;
        if (options) {
            if (options.tagName)
                this.tagName = options.tagName;
            if (options.styles)
                this.styles = options.styles;
            if (options.className)
                this.className = options.className;
            if (options.childIds)
                this.childIds = options.childIds;
            if (options.parentId)
                this.parentId = options.parentId;
        }
    }
    FlexboxNode.prototype.generateClassName = function (prefix) {
        if (prefix === void 0) { prefix = 'fb-'; }
        var random = Math.round(Math.random() * 1000000);
        return prefix + "-" + random;
    };
    return FlexboxNode;
}());
exports.FlexboxNode = FlexboxNode;
//# sourceMappingURL=flexbox-node.js.map