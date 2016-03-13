/**
 * Created by Koen on 3/13/2016.
 */

var Camera = {

    /**
     * Basic camera configuration that will be used
     * in the instance by default, can always
     * be overwritten on the instance
     */
    fov : 75,
    aspect : window.innerWidth / window.innerHeight,
    near : 1,
    far : 2000,

    /**
     * Starting position for the camera
     */
    position : {
        x: 0,
        y: 30,
        z: -60
    },

    /**
     * Create the instance of the Camera
     */
    instance : new THREE.PerspectiveCamera(),

    /**
     * Initialize the Camera
     */
    init : function(){
        Camera.instance.position.x = this.position.x;
        Camera.instance.position.y = this.position.y;
        Camera.instance.position.z = this.position.z;

        Camera.instance.fov = this.fov;
        Camera.instance.aspect = this.aspect;
        Camera.instance.near = this.near;
        Camera.instance.far = this.far;

        Camera.instance.updateProjectionMatrix();


        Camera.instance.lookAt(new THREE.Vector3(0,0,0));

    }
};