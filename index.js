import { createPopper } from '@popperjs/core/lib/popper-lite.js';
var button = $('#BtnTest');
var div = $('#DivTest');

//div.hide();

createPopper(button, div, {
    modifiers: [preventOverflow, flip]
});





/*createPopper(button, div, {
    placement: 'right',
});*/
/*(function() {
    var Undefined = 'Prueba de IFFE';
    console.log(Undefined);
})();*/