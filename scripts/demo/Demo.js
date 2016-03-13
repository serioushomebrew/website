
var Demo = {

    /**
     * Container to render the demo in
     */
    container : document.createElement( 'div' ),

    /**
     * Initializing of the demo
     */
    init : function(){
        /**
         * Set the function to listen to resize changes
         */
        window.addEventListener( 'resize', Demo.onWindowResize, false );

        /**
         * Run the initializing of the various objects that
         * we use in the Demo
         */
        Create.init();
        Scene.init();
        AmbientLight.init();
        Light.init();
        Plane.init();
        Camera.init();
        Render.init();

        /**
         * Add the container to the body and render
         * the demo inside the container
         */
        document.body.appendChild( Demo.container );
        Demo.container.appendChild(Render.instance.domElement);

        /**
         * Run the animation
         */
        Demo.animate();
    },

    /**
     * Get a random value between 2 integers
     *
     * @param min
     * @param max
     * @returns {number}
     */
    random : function (min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
    },

    /**
     * Called when browser window size is changed
     * Necessary for good camera handling and rendering
     */
    onWindowResize : function(){
        Camera.updateAspect(window.innerWidth / window.innerHeight);
        Camera.instance.updateProjectionMatrix();
        Render.instance.setSize( window.innerWidth, window.innerHeight );
    },

    /**
     * Called every frame, animates the Demo
     */
    animate : function() {

        var r = Date.now() * 0.0005;
        Camera.instance.position.x = 70 * Math.sin( r );
        Camera.instance.position.y = 70 * Math.cos( -r );
        Camera.instance.rotateX(Math.sin( r )*0.005);
        Camera.instance.rotateY(Math.sin( -r )*0.005);

        Scene.cubes.forEach(function(cube){
            cube.rotation.x += cube.rotationSpeed;
            cube.rotation.y += cube.rotationSpeed;
            cube.rotation.z += cube.rotationSpeed;
        });

        requestAnimationFrame( Demo.animate );
        Render.run();

    }
};


Demo.init();