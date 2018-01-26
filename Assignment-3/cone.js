var gl = null;
var cone = null;
function init() {
    var canvas = document.getElementById( "webgl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }
	cone = new Cone( gl, 8);
	//gl.clearColor( 0.0, 0.0, 1.0, 1.0 );
	//cone.render();
    render();
}

function render() {
	gl.clear( gl.COLOR_BUFFER_BIT );
	cone.render();
}

window.onload = init;
