let panorama_arrow, panorama_main_gate, panorama_main_entrace, panorama_first_left, panorama_first_right, panorama_class1, panorama_class2, panorama_Libray;
const imageContainer = document.querySelector(".image-container");

const path = "static/icons/arrow-upward";
const format = '.png';

panorama_arrow = new PANOLENS.CubePanorama([
    path + format, path + format,
    path + format, path + format,
    path + format, path + format
]);

panorama_main_gate = new PANOLENS.ImagePanorama("static/images/image1.jpg");
panorama_main_entrace = new PANOLENS.ImagePanorama("static/images/image2.jpg");
panorama_first_left = new PANOLENS.ImagePanorama("static/images/image3.jpg");
panorama_first_right = new PANOLENS.ImagePanorama("static/images/image4.jpg");
panorama_class1 = new PANOLENS.ImagePanorama("static/images/image5.jpg");
panorama_class2 = new PANOLENS.ImagePanorama("static/images/image6.jpg");
panorama_Libray = new PANOLENS.ImagePanorama("static/images/image7.jpg");

// Linking panoramas
panorama_arrow.link(panorama_main_gate, new THREE.Vector3(-1007.50, 404.88, -5000.00));
panorama_main_gate.link(panorama_main_entrace, new THREE.Vector3(-5000, 0,2000));
panorama_main_entrace.link(panorama_first_left, new THREE.Vector3(-5000, 0,0));
panorama_main_entrace.link(panorama_first_right, new THREE.Vector3(-5000, 0,7000));
panorama_first_left.link(panorama_Libray, new THREE.Vector3(-4000, 0,2000));
panorama_first_right.link(panorama_class1, new THREE.Vector3(-4000, 0,7000));
panorama_class1.link(panorama_class2, new THREE.Vector3(2000,0,0)); // Adding link to class2

panorama_main_entrace.link(panorama_main_gate, new THREE.Vector3(7000, 0,-4700));
panorama_first_left.link(panorama_main_entrace, new THREE.Vector3(5000, 0,-5000));
panorama_first_right.link(panorama_main_entrace, new THREE.Vector3(1000, 0,-5000));
panorama_class1.link(panorama_first_right, new THREE.Vector3(-5500, 0,500)); // Adding link to class2
panorama_class2.link(panorama_class1, new THREE.Vector3(-5000, 0,0)); // Adding link to class2
panorama_Libray.link(panorama_first_left, new THREE.Vector3(1500, 0,-2000)); // Adding link to class2


// Initializing the viewer
const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    // autoRotate: true,
    // autoRotateSpeed: 0.8,
    // controlBar: false,
});

viewer.add(panorama_arrow, panorama_main_gate, panorama_main_entrace, panorama_first_left, panorama_first_right, panorama_class1, panorama_class2, panorama_Libray);
