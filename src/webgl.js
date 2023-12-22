import * as THREE from 'three';
import fragment from './assets/shaders/fragment.glsl';
import vertex from './assets/shaders/vertex.glsl';
import App from './App.vue';
import ProjetItem from './components/ProjetItem.vue';
import imagesLoaded from 'imagesloaded';
import fontFaceObserver from 'fontfaceobserver';

console.log(ProjetItem)
console.log(App)

export default class Sketch{
    constructor(options){
        this.time = 0;
        this.container = options.dom;
        this.scene = new THREE.Scene();
        console.log(fragment);

        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

        this.camera = new THREE.PerspectiveCamera(70, this.width/this.height, 10, 2000);
        this.camera.position.z = 600;
        this.camera.fov = 2*Math.atan((this.height/2)/600)*(180/Math.PI)

        this.renderer = new THREE.WebGLRenderer( {
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(this.width, this.height);
        this.container.appendChild(this.renderer.domElement);

        this.images = [...document.querySelectorAll('img')];
        console.log(this.images);

        const fontInter = new Promise(resolve => {
            new fontFaceObserver('Inter').load().then(()=> {
                resolve();
            });
        });

        const fontKihim = new Promise(resolve => {
            new fontFaceObserver('Kihim').load().then(()=> {
                resolve();
            });
        });

        const preloadImages = new Promise((resolve, reject) => {
            imagesLoaded(document.querySelectorAll('img'), {background:true}, resolve);
        });

        let allDone = [fontInter, fontKihim, preloadImages];

        Promise.all(allDone).then(()=>{
            this.addImages();
            this.resize();
            this.setPosition();
            this.setupResize();
            console.log(this.scene);
            this.addObjects();
            console.log(this.mesh);
            this.render();
            console.log(this.container);
        })
    }

    setupResize() {
        window.addEventListener('resize', this.resize.bind(this));
    }

    addImages(){
        this.imageStore = this.images.map(img => {
            let bounds = img.getBoundingClientRect();
            let geometry = new THREE.PlaneGeometry(bounds.width, bounds.height,1,1);
            
            let texture = new THREE.TextureLoader().load(img.src);
            texture.needsUpdate = true;
            console.log('img ' + img)

            let material = new THREE.MeshBasicMaterial({
                map: texture
            });
            let mesh = new THREE.Mesh(geometry,material);
            this.scene.add(mesh);
            return {
                img: img,
                mesh: mesh,
                top: bounds.top,
                left: bounds.left,
                width: bounds.width,
                height: bounds.height
            }

        });
        console.log('imageStore '+ this.imageStore);

    }

    setPosition() {
        this.imageStore.forEach(o=>{
            o.mesh.position.y = -o.top + this.height/2 - o.height/2;
            o.mesh.position.x = o.left - this.width/2 + o.width/2;
        })
    }

    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize( this.width, this.height);
        this.camera.aspect = this.width/this.height;
        this.camera.updateProjectionMatrix();
    }

    addObjects(){
        this.geometry = new THREE.PlaneGeometry(300,500,10, 10);
        this.material = new THREE.ShaderMaterial({
            side: THREE.DoubleSide,
            fragmentShader: fragment,
            vertexShader: vertex,
            wireframe: true
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);
    }

    render() {
        this.time+=0.05;
        this.mesh.rotation.x = this.time / 2000;
        this.mesh.rotation.y = this.time / 1000;

        this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.render.bind(this));
    }
}

new Sketch({
    dom: document.getElementById('canvas')
});

