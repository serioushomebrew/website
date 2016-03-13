/**
 * Created by Koen on 3/13/2016.
 */

var Light = {

    /**
     * Default color and intensity of the light
     * used in the default instance
     */
    color: 0xffffff,
    intensity: 1.5,

    /**
     * Instance of the Light with given color and intensity
     */
    instance: new THREE.SpotLight( this.color, this.intensity),

    /**
     * Initialize the Light
     */
    init: function () {
        Light.instance.position.set(0, 500, 2000);
        Light.instance.castShadow = true;

        Light.instance.shadow.camera.near = 200;
        Light.instance.shadow.camera.far = Camera.far;
        Light.instance.shadow.camera.fov = 50;

        Light.instance.shadow.bias = -0.00022;
        Light.instance.shadow.darkness = 0.5;

        Light.instance.shadow.mapSize.width = 2048;
        Light.instance.shadow.mapSize.height = 2048;

        Light.toScene();
    },

    /**
     * Add the Light to the Scene of the demo
     */
    toScene: function () {
        Scene.instance.add(this.instance);
    }

};
