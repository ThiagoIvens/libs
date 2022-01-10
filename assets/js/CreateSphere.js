


// CRIA A CENA PARA ADICIONAR OBJETOS
const scene = new THREE.Scene();
// CRIA A CAMERA JA DEFININDO A SUA PERSPECTIVA COM BASE NA TELA
const camera = new THREE.PerspectiveCamera( 75, innerWidth / innerHeight, 0.1, 1000);
// CRIA O RENDERISADOS DOS ELEMENTOS
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
// SETA O RENDERISADOR PARA O TAMANHO DA TELA
renderer.setSize(innerWidth, innerHeight);
// DEFINE AS PROPRIEDADES DO PIXEL PARA OS PIXEIS DO DISPOSITIVO
renderer.setPixelRatio(window.devicePixelRatio)
// ADICIONA O RENDERISADOR AO ELEMENTO DOM DO DOCUMENTO (HTML)
document.body.appendChild(renderer.domElement);
// CRIA UMA ESFERA COM BASE NA FORMA GEOMETRICA DE ESFERAS DO THREE JS, E TAMBEM DEFINE AS PROPRIEDADES QUE A MESMA VAI TER
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.ShaderMaterial(
        document.getElementById( 'vertexShader' ).textContent,
        document.getElementById( 'fragmentShader' ).textContent
    )
);
// ADICIONA A ESFERA NA CENA
scene.add(sphere);
// DEFINE A PROFUNDIDADE DA CAMERA NA CENA
camera.position.z = 10;
// CRIA UMA FUNÇAO PARA EXIBIR A CENA CRIADA COM PERSPECTIVA PELA POSICAO DE CAMERA CRIADA
function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
};
// RODA TUDO
animate();
