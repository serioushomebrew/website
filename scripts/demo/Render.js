/**
 * Created by Koen on 3/13/2016.
 */

var Render = {
    options : {
        antialias : true
    },

    instance : new THREE.WebGLRenderer( this.options ),

    init : function() {

        Render.instance.setClearColor( 0x222222 );
        Render.instance.setSize( window.innerWidth, window.innerHeight );
        Render.instance.sortObjects = false;

        Render.instance.shadowMap.enabled = true;
        Render.instance.shadowMap.type = THREE.PCFShadowMap;
    },

    run : function() {
        Render.instance.render( Scene.instance, Camera.instance);
    }
};