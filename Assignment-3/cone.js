var gl = null;
var cone = null;
function init() {
    var canvas = document.getElementById( "webgl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

	gl.clearColor( 1.0, 0.0, 1.0, 1.0 );
	cone = new Cone( gl, 8);
    render();
}

function render() {
	gl.clear( gl.COLOR_BUFFER_BIT );
	cone.render();
}

window.onload = init;
