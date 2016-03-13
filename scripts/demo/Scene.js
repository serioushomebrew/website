/**
 * Created by Koen on 3/13/2016.
 */
var gridHelper;
var controls;
var Scene = {

    /**
     * Use the grid for debugging or not
     */
    showGrid : false,

    /**
     * Use the mouse controls in threejs or not
     */
    enableControls : false,

    /**
     * Width of the scene
     * This will be the max and minus
     *
     * So width 100 will be uses in axes -100 to 100
     */
    width : 1000,

    /**
     * Height of the scene
     * This will be the max and minus
     *
     * So width 100 will be uses in axes -100 to 100
     */
    height : 1000,

    /**
     * Depth of the scene
     * This will be the max and minus
     *
     * So width 100 will be uses in axes -100 to 100
     */
    depth : 1000,


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

        var maxCubes = ((this.width + this.height + this.depth) / 3) * 5; // average times 10
        for(i=0; i < maxCubes; i++){
            var x = Demo.randomIntFromInterval(-this.width,this.width);
            var y = Demo.randomIntFromInterval(-this.height,this.height);
            var z = Demo.randomIntFromInterval(-this.depth,this.depth);
            Create.cube(x,y,z,x,y,z);
        }

    },

    /**
     * Debug helper that creates a grid
     */
    addGrid : function(){
        gridHelper = new THREE.GridHelper( Scene.width, 1 );
        gridHelper.setColors( 0x303030, 0x303030 );
        gridHelper.position.set( 0, 0, 0 );
        Scene.instance.add( gridHelper );
    },

    /**
     * Debug helper that gives controls to the mouse to look around
     */
    addControls : function(){
        controls = new THREE.OrbitControls( Camera.instance, Render.instance.domElement );
        controls.update();
    }


};