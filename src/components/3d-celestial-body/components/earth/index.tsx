import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import hdrFile from '../../../../../public/royal_esplanade_1k.hdr'
import gltfFile from '../../../../../public/scene.gltf'
import astrocatImgUrl from '../../../../../public/astrocat.png'
import '../../../../../public/scene.bin'
import styles from './index.module.css'
import { useEffect, useRef } from 'react'
export default function EarthComponents() {
  const threeDom = useRef(null)
  // const renderNumber = useRef(0)
  useEffect(() => {
    const threeDomChild = threeDom.current
    for (let i = 0; i < threeDomChild.children.length; i++) {
      const element = threeDomChild.children[i]
      element.remove() // threeDomChild.removeChild(element);
    }
    let camera, scene, renderer
    init()
    render()
    function init() {
      const container = threeDom.current
      camera = new THREE.PerspectiveCamera(50, 1, 1, 1000)
      camera.position.set(50, 0, 50)
      scene = new THREE.Scene()

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

      // scene.background = new THREE.Color(0xbbbbbb)
      // 设置渲染区域尺寸，本质就是设置输出canvas的尺寸
      renderer.setSize(700, 700)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(700, 700)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)

      // const controls = new OrbitControls(camera, renderer.domElement)
      // controls.addEventListener('change', render) // use if there is no animation loop
      // controls.minDistance = 2
      // controls.maxDistance = 1000
      // // controls.target.set(0, 0, -0.2)
      // controls.update()

      // window.addEventListener('resize', onWindowResize)

      new RGBELoader().load(hdrFile, function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping

        // scene.background = texture
        scene.environment = texture

        render()
        const loader = new GLTFLoader()
        loader.load(gltfFile, function (gltf) {
          scene.add(gltf.scene)
          gltf.scene.children[0].position.x = -50
          gltf.scene.children[0].position.y = -120
          gltf.scene.children[0].position.z = 20
          camera.lookAt(gltf.scene.children[0].position)
          // 注意相机控件参数同步
          // controls.target.copy(gltf.scene.children[0].position)
          render()
        })
      })
    }

    // function onWindowResize() {
    //   camera.aspect = 1
    //   camera.updateProjectionMatrix()

    //   renderer.setSize(700, 700)

    //   render()
    // }

    //

    function render() {
      renderer.render(scene, camera)
    }
  }, [])
  return (
    <div className="relative">
      <div className={styles.container} ref={threeDom}>
        {/* <img src={earthBgcUrl.src} /> */}
      </div>
      <img src={astrocatImgUrl.src} className={`${styles.people}`} />
    </div>
  )
}
