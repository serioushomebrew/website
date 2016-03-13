/**
 * Created by Koen on 3/13/2016.
 */


var Create = {

    /**
     * Keep track of what we are creating
     */
    history : [],
    cubeIndex : 0,

    /**
     * Function to create a simple cube at a location, immedeatly adds it to the scene
     *
     * @param x location of the cube
     * @param y location of the cube
     * @param z location of the cube
     * @param angleX rotation of the cube
     * @param angleY rotation of the cube
     * @param angleZ rotation of the cube
     *
     * @returns {THREE.Mesh} After added to the scenes
     */
    cube : function(x,y,z, angleX, angleY, angleZ){
        var geometry = new THREE.BoxGeometry( 10, 10, 10 );

        geometry.verticesNeedUpdate = true;
        geometry.dynamic = true;

        var material = new THREE.MeshNormalMaterial();
        var mesh = new THREE.Mesh( geometry, material );

        this.cubeIndex++;

        mesh.name = 'cube-'+this.cubeIndex;
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 0;

        if(x !== undefined)
            mesh.position.x = x;

        if(y !== undefined)
            mesh.position.y = y;

        if(z !== undefined)
            mesh.position.z = z;

        if(angleX !== undefined)
            mesh.rotateX(angleX);

        if(angleY !== undefined)
            mesh.rotateY(angleY);

        if(angleZ !== undefined)
            mesh.rotateZ(angleZ);

        mesh.matrixAutoUpdate = true;
        mesh.updateMatrix();

        Create.history.push(mesh);
        Scene.instance.add(mesh);

        return mesh;
    },

    init : function(){

    },

};