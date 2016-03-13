/**
 * Created by Koen on 3/13/2016.
 */

var Scene = {

    /**
     * Use the grid for debugging or not
     */
    showGrid : false,

    /**
     * Use the mouse controls in threejs or not
     */
    enableControls : true,

    /**
     * Width of the scene
     * This will be the max and minus
     *
     * So width 100 will be uses in axes -100 to 100
     */
    width : 1500,

    /**
     * Height of the scene
     * This will be the max and minus
     *
     * So width 100 will be uses in axes -100 to 100
     */
    height : 1500,

    /**
     * Depth of the scene
     * This will be the max and minus
     *
     * So width 100 will be uses in axes -100 to 100
     */
    depth : 1500,


    /**
     * Array of cubes in the scene
     */
    cubes : [],

    /**
     * Instance of the Scene
     * This is where most items will be added to and
     * where the animation will be rendered in
     */
    instance : new THREE.Scene(),

    /**
     * Initializing of the Scene
     */
    init : function(){

        if(this.showGrid)
            this.addGrid();

        if(this.enableControls)
            this.addControls();

        Scene.draw();
    },

    /**
     * Draw the scene
     * Note: This does not get animated here
     * Just a initializing scene with items
     */
    draw : function(){

        /**
         * The max cubes to create will be 5 times the  average
         * of the width height and depth
         */
        var maxCubes = ((this.width + this.height + this.depth) / 3) * 5;

        for(i=0; i < maxCubes; i++){

            /**
             * Create a random position for the cube between
             * the width, height and depth of the scene.
             */
            var x = Demo.random(-this.width, this.width);
            var y = Demo.random(-this.height, this.height);
            var z = Demo.random(-this.depth, this.depth);
            var cube = Create.cube(x,y,z,x,y,z);

            /**
             * Give the cube a random rotation speed
             */
            cube.rotationSpeed = Demo.random(1,10) / 100;
            Scene.cubes.push(cube);
        }

    },

    /**
     * Debug helper that creates a grid
     */
    addGrid : function(){
        var gridHelper = new THREE.GridHelper( Scene.width, 1 );
        gridHelper.setColors( 0x303030, 0x303030 );
        gridHelper.position.set( 0, 0, 0 );
        Scene.instance.add( gridHelper );
    },

    /**
     * Debug helper that gives controls to the mouse to look around
     */
    addControls : function(){
        var controls = new THREE.OrbitControls( Camera.instance, Render.instance.domElement );
        controls.update();
    }


};