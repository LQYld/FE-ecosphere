import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import hdrFile from '../../../../../public/royal_esplanade_1k.hdr'
import gltfFile from '../../../../../public/scene.gltf'
import astrocatImgUrl from '../../../../../public/astrocat.png'
import '../../../../../public/scene.bin'
import styles from './index.module.css'
import { useEffect, useRef } from 'react'
export default function EarthComponents() {
  const threeDom = useRef(null)
  useEffect(() => {
    const threeDomChild = threeDom.current
    if(!threeDomChild) return;
    for (let i = 0; i < threeDomChild.children.length; i++) {
      const element = threeDomChild.children[i]
      element.remove()
    }
    let camera, scene, renderer, gltfClass
    init()
    function init() {
      const container = threeDom.current
      camera = new THREE.PerspectiveCamera(40, 1, 1, 700)
      // camera.position.set(50, 0, 50)
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
        const loader = new GLTFLoader()
        loader.load(gltfFile, function (gltf) {
          gltfClass = gltf
          scene.add(gltfClass.scene)
          gltfClass.scene.children[0].position.x = 0
          gltfClass.scene.children[0].position.y = -120
          gltfClass.scene.children[0].position.z = -20

          camera.position.x = 150
          // camera.position.y = 0
          camera.position.z = 50
          camera.lookAt(gltfClass.scene.children[0].position)
          // 注意相机控件参数同步
          // controls.target.copy(gltf.scene.children[0].position)
          console.log(camera.position)
          render()
        })
      })
    }

    function render() {
      renderer.render(scene, camera)
      gltfClass.scene.children[0].rotation.z -= 0.01
      requestAnimationFrame(render)
    }
  }, [])
  return (
    <div className="relative">
      <div className={styles.container} ref={threeDom}></div>
      <img src={astrocatImgUrl.src} className={`${styles.people}`} />
    </div>
  )
}
