"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var flexbox_node_1 = require('./flexbox-node');
var flexbox_style_1 = require('./flexbox-style');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Flexboxer';
        this.currentLayout = {
            id: 1,
            slug: 'one-true-layout',
            title: 'One True Layout',
            description: 'Awesome basic website layout',
            nodes: [
                new flexbox_node_1.FlexboxNode(1, {
                    className: 'root',
                    childIds: [2, 3, 4],
                    styles: [
                        new flexbox_style_1.FlexboxStyle({ property: 'width', value: '900px' }),
                        new flexbox_style_1.FlexboxStyle({ property: 'margin', value: '0 auto' }),
                    ]
                }),
                new flexbox_node_1.FlexboxNode(2, { className: 'header', tagName: 'header' }),
                new flexbox_node_1.FlexboxNode(3, { className: 'main', tagName: 'main' }),
                new flexbox_node_1.FlexboxNode(4, { className: 'footer', tagName: 'footer' })
            ]
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <header><h1>{{title}}</h1></header>\n    <main>\n      <h2>{{currentLayout.title}}</h2>\n      <p>{{currentLayout.description}}</p>\n      <html-output [fbLayout]=currentLayout></html-output>\n    </main>\n    <footer>Built by Pete Otaqui</footer>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map