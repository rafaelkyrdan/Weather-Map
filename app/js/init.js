
function init2 () {

    var context = document.querySelector( '.content' );

    context.querySelector( ".closeWindow" ).onclick = function ( e ) {
        w("t", context);
        win.close();
        return false;

    };
}

//window.onload = init2;

var gui = require( 'nw.gui' );
var win = gui.Window.get();

win.on( 'loaded', function() {
    gui.Window.get().show();
});

function w ( a,b,c,d ) {
     console.log( a,b,c,d );
}

