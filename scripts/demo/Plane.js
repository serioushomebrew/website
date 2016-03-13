/**
 * Created by Koen on 3/13/2016.
 */

var Plane = {
    /**
     * Set up the geometry for the Plane
     */
    geometrySize : 2000,
    geometrySegments : 8,
    geometry : new THREE.PlaneGeometry( this.geometrySize, this.geometrySize, this.geometrySegments, this.geometrySegments),

    /**
     * Make the Plane visible or not
     */
    visible : false,

    /**
     * Set up the material for the Plane
     */
    materialOptions : {
        color : 0x000000,
        opacity : 0.25,
        transparent : true
    },
    material : new THREE.MeshBasicMaterial( this.materialOptions ),

    /**
     * Create the Instance of the Plane with
     * the given geometry and material
     */
    instance : new THREE.Mesh( this.geometry,  this.material),

    /**
     * Initialize the Plane
     */
    init : function (){
        this.instance.visible = this.visible;
        this.toScene();
    },

    /**
     * Add the Plane to the Scene
     */
    toScene : function(){
        Scene.instance.add(this.instance);
    }
};
