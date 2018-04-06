var cube = undefined;
var gl = undefined;
var angle = 0;
var texture = undefined;

function init() 
{
  var canvas = document.getElementById( "webgl-canvas" );
  gl = WebGLUtils.setupWebGL( canvas );

  if ( !gl ) 
  {
    alert("Unable to setup WebGL");
    return;
  }

  gl.clearColor( 0, 0.8, 0.8, 1.0 );
  gl.enable( gl.DEPTH_TEST );

  cube = new Cube();
  texture = getTexture("CubeTexture.png");
  render();
}

function render() 
{
  if (texture && texture.webglTexture) 
  {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, cube_texture.webglTexture);
  }
	
  gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
  angle += 2.0; // degrees
  cube.MV = rotate( angle, [1, 1, 0] );
  cube.render();
  
  requestAnimationFrame( render ); // schedule another call to render()
}

var getTexture=function(image_URL)
{
    var image=new Image();

    image.src=image_URL;
    image.webglTexture=false;
	image.setAttribute('crossorigin','anonymous');

    image.onload = function(e) 
	{
var texture = gl.createTexture();

      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.bindTexture(gl.TEXTURE_2D, null);
      image.webglTexture=texture;
    };
    return image;
};

window.onload = init;