//import { createPopper } from 'node_modules/@popperjs/core';

var button = $('#BtnTest');
var div = $('#DivTest');

div.hide();

button.click(function() {

    var popper = new Popper(button, div, {
        placement: 'top'
    });


})





/*createPopper(button, div, {
    placement: 'right',
});*/
/*(function() {
    var Undefined = 'Prueba de IFFE';
    console.log(Undefined);
})();*/