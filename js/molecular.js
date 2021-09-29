/*
 * @Author: kevin
 */
(function (global, factory) {
  // 检查环境
  if (!global.$) throw Error('本插件依赖JQuery.JS,请先引入!');
  // 判断引入方式
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() :
    typeof define === "function" && define.amd ? define(factory) : global.Molecular = factory()
})(this, function () {
  let camera, scene, renderer;
  let mesh, speed=0.01;
  // 初始化
  function init({ GLTFLoader, THREE,domId }) {
    const container = document.getElementById(domId);
    //相机
    camera = new THREE.PerspectiveCamera( 10, window.innerWidth*0.5 / window.innerHeight, 1, 10000 );
    camera.position.z = 110;
    // 环境
    scene = new THREE.Scene();
    // 加载模型
    load3D(GLTFLoader,THREE);
    renderer = new THREE.WebGLRenderer({alpha:true });
    renderer.setSize(window.innerWidth * 0.5, window.innerHeight);
    container.appendChild(renderer.domElement);
    // 鼠标移动事件
    // document.body.addEventListener( 'pointermove', onPointerMove );
    window.addEventListener('resize', onWindowResize);
  }
  // 加载模型
  function load3D(GLTFLoader,THREE){
      const loader = new GLTFLoader();
      loader.load("../static/gltf/syndy.glb", function (res) {
      mesh = new THREE.Object3D();
      const myMesh = res.scene.children[3];
      const light = new THREE.AmbientLight(0xffffff,0.9);
      directionalLight = new THREE.DirectionalLight( 0xffffff,0.2);
      directionalLight.position.set( -100, 0, 0 );
      mesh.position.set(0,0,3);
      myMesh.position.set(9,2,2);
      mesh.add(myMesh);
      mesh.add(light);
      scene.add( directionalLight );
      scene.add(mesh);
    } );
  }
// 重置页面大小
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth*0.5, window.innerHeight );

}
// 鼠标移动事件
function onPointerMove(event) {
  const mouseX= event.clientX - windowHalfX;
  const angle=mouseX <0?0.02:-0.02
  rotateMolecular(angle);
}
// 旋转分子
function rotateMolecular(angle) {
 if (angle) speed = angle;
}

// 动画
function animate() {
  requestAnimationFrame( animate );
  if (mesh) mesh.rotation.y += speed;
  if (speed > 0.01) speed -= 0.001;
  if (speed < 0.01) speed += 0.001;
  render();

}

function render() {

  renderer.render( scene, camera );

}
function Molecular(params) {
  init(params);
  animate();
  this.rotateMolecular = rotateMolecular;
}
  return Molecular;

})