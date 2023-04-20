import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
// import draco from 'three/examples/jsm/libs/draco/gltf'
// import earthBgcUrl from '../../../../../public/globe.jpg'
import gltfFile from '../../../../../public/scene.glb'
// import binFile from '../../../../../public/scene.bin'
import styles from './index.module.css'
import { useEffect, useRef } from 'react'
export default function EarthComponents() {
  const threeDom = useRef(null)
  useEffect(() => {
    let camera, scene, renderer
    init()
    render()
    function init() {
      const container = document.createElement('div')
      threeDom.current.appendChild(container)
      camera = new THREE.PerspectiveCamera(45, 1, 0.25, 20)
      camera.position.set(-1.8, 0.6, 2.7)

      scene = new THREE.Scene()

      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath('/public/')
      const loader = new GLTFLoader()
      loader.setDRACOLoader(dracoLoader)

      loader.load(gltfFile, function (gltf) {
        scene.add(gltf.scene)

        render()
      })

      renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.addEventListener('change', render) // use if there is no animation loop
      controls.minDistance = 2
      controls.maxDistance = 10
      controls.target.set(0, 0, -0.2)
      controls.update()

      window.addEventListener('resize', onWindowResize)
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)

      render()
    }

    //

    function render() {
      renderer.render(scene, camera)
    }
  }, [])
  return (
    <div className={styles.container} ref={threeDom}>
      {/* <img src={earthBgcUrl.src} /> */}
    </div>
  )
}
