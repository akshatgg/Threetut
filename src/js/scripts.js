import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

// Define the camera first
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Now initialize OrbitControls after defining the camera
const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(-10, 30, 30);
orbit.update();

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Create the box
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);


const planegeometery= new THREE.PlaneGeometry(20,20);
const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF,
    side: THREE.DoubleSide
});
const plane=new THREE.Mesh(planegeometery,planeMaterial);
scene.add(plane);

plane.rotation.x= -0.5* Math.PI;


const sphereGeometery = new THREE.SphereGeometry(4);
const sphereMaterail =new THREE.MeshBasicMaterial({color:0x0000FF})
const sphere =new THREE.Mesh(sphereGeometery,sphereMaterail);
scene.add(sphere)
const gridHelper=new THREE.GridHelper(30);
scene.add(gridHelper);

// Animate the box
function animate(time) {
    box.rotation.y = time / 1000;
    box.rotation.x = time / 1000;
    
    // Render the scene with the updated camera
    renderer.render(scene, camera);
}

// Start the animation loop
renderer.setAnimationLoop(animate);
