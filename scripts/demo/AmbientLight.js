/**
 * Created by Koen on 3/13/2016.
 */

var AmbientLight = {
    /**
     * Color of the ambient light
     */
    color : 0x505050,

    /**
     * Instance of the ambient light with the set color
     */
    instance : new THREE.AmbientLight( this.color ),

    /**
     * Initialize the Ambient
     */
    init : function(){
        this.toScene();
    },

    /**
     * Add the instance of the Ambient Light to
     * the Scene of the demo
     */
    toScene : function(){
        Scene.instance.add(this.instance);
    }

};
