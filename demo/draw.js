$(function(){    
    var canvas = document.getElementById('example')
    var gl = getWebGLContext(canvas)
    gl.clearColor(0.0,0.0,0.0,1.0)
    gl.clear(gl.COLOR_BUFFER_BIT)
})