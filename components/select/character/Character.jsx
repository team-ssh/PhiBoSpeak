import { GLTFLoader, Renderer } from "expo-three";
import { Asset } from "expo-asset";
import { View, Text } from "react-native";

function Character() {
  //   useEffect(() => {
  //     const loadGLB = async () => {
  //       const glbAsset = Asset.fromModule(
  //         require("../../../assets/3ds/Character-1.glb")
  //       );
  //       await glbAsset.downloadAsync();
  //       const loader = new GLTFLoader();
  //       const { scene } = await loader.parseAsync({
  //         uri: glbAsset.localUri || glbAsset.uri,
  //       });
  //       console.log(scene);
  //     };

  //     loadGLB();
  //   }, []);

  // const handleContextCreate = async (gl) => {
  //   const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
  //   const renderer = new Renderer({ gl });
  //   renderer.setSize(width, height);

  //   const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  //   camera.position.set(0, 0, 5);

  //   const controls = new OrbitControls(camera, gl.domElement);

  //   const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  //   scene.add(ambientLight);

  //   const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  //   directionalLight.position.set(0, 1, 0);
  //   scene.add(directionalLight);

  //   const animate = () => {
  //     requestAnimationFrame(animate);
  //     renderer.render(scene, camera);
  //     gl.endFrameEXP();
  //   };

  //   animate();
  // };
  return <View></View>;
}

export default Character;
