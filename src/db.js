"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getItems() {
    // This is a dummy data example to demonstrate
    // all data is sanitized safely, however
    // you could imagine this would be data from a DB
    // in a real app
    return [
        'Item 0',
        'Item 1',
        'Item <script>alert(hack);</script>',
        'Item <!--injected!-->',
        'Just click to add more <b>bold</b>'
    ];
}
exports.getItems = getItems;
//# sourceMappingURL=db.js.map