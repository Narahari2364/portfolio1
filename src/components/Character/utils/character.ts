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
            const palette: Array<{ pattern: RegExp; hex: number }> = [
              { pattern: /shirt|tshirt|jacket|hoodie|cloth_top|cloth_up/, hex: 0xa8d5a8 },
              { pattern: /pant|trouser|jean|cloth_bottom|cloth_low/, hex: 0x3e2723 },
              { pattern: /shoe|boot|sneaker|sandal/, hex: 0x1a120a },
              { pattern: /sock/, hex: 0xf5f5f5 },
              { pattern: /belt/, hex: 0x2a1a10 },
              { pattern: /hair|fur|brow/, hex: 0x3a2418 },
              { pattern: /tooth|teeth/, hex: 0xfafafa },
              { pattern: /tongue|gum/, hex: 0xe88a96 },
              { pattern: /lip|mouth/, hex: 0xc97064 },
              { pattern: /iris/, hex: 0x4a2a14 },
              { pattern: /pupil/, hex: 0x000000 },
              { pattern: /eye|sclera|cornea/, hex: 0xfafafa },
              { pattern: /nail/, hex: 0xe8b692 },
              { pattern: /skin|face|body|head|arm|hand|leg|foot|ear|neck/, hex: 0xe8b692 },
            ];

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

            const collectMaterials = (
              mesh: THREE.Mesh
            ): THREE.Material[] => {
              if (Array.isArray(mesh.material)) return mesh.material;
              return mesh.material ? [mesh.material] : [];
            };

            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;

                const meshName = (mesh.name || "").toLowerCase();
                const mats = collectMaterials(mesh);

                console.log(
                  "[character mesh]",
                  mesh.name,
                  "→ materials:",
                  mats.map((m: any) => m?.name || "(unnamed)")
                );

                mats.forEach((mat) => {
                  const matName = ((mat as any)?.name || "").toLowerCase();
                  const probe = `${matName} ${meshName}`;
                  const match = palette.find((p) => p.pattern.test(probe));
                  if (match) {
                    tintMaterial(mat, match.hex);
                  }
                });
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
