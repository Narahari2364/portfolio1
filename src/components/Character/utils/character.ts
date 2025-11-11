import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            const SHIRT_COLOR = 0xa8d5a8;
            const PANTS_COLOR = 0x3e2723;

            const tintMaterial = (
              material: THREE.Material | undefined,
              hex: number
            ) => {
              const mat = material as THREE.MeshStandardMaterial | undefined;
              if (mat && mat.color) {
                mat.color.setHex(hex);
                mat.needsUpdate = true;
              }
            };

            const tintMesh = (mesh: THREE.Mesh, hex: number) => {
              if (Array.isArray(mesh.material)) {
                mesh.material.forEach((m) => tintMaterial(m, hex));
              } else {
                tintMaterial(mesh.material, hex);
              }
            };

            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;

                const meshName = (mesh.name || "").toLowerCase();
                const matNames = (Array.isArray(mesh.material)
                  ? mesh.material
                  : [mesh.material]
                )
                  .map((m: any) => (m?.name || "").toLowerCase())
                  .join(" ");
                const probe = `${meshName} ${matNames}`;

                if (/shirt|top|jacket|hoodie|tshirt|cloth_top|upper/.test(probe)) {
                  tintMesh(mesh, SHIRT_COLOR);
                } else if (
                  /pant|trouser|jean|leg|cloth_bottom|lower/.test(probe)
                ) {
                  tintMesh(mesh, PANTS_COLOR);
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
