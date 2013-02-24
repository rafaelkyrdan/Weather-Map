
function init () {
    App.initMap();
}

window.onload = init;

var gui = require( 'nw.gui' );
var win = gui.Window.get();

win.on( 'loaded', function() {
    gui.Window.get().show();
});


