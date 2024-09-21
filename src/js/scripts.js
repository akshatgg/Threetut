import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

// Define the camera first
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Now initialize OrbitControls after defining the camera
const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 2, 5);
orbit.update();

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Create the box
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

// Animate the box
function animate(time) {
    box.rotation.y = time / 1000;
    box.rotation.x = time / 1000;
    
    // Render the scene with the updated camera
    renderer.render(scene, camera);
}

// Start the animation loop
renderer.setAnimationLoop(animate);
