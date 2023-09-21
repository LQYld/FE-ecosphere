import CardComponents from './components/card'
import EarthComponents from './components/earth'
import bodyBgcUrl from '../../../public/hero-bg.webp'
import greenLineSvg from '../../../public/greenLine.svg'
import pinkLineSvg from '../../../public/pinkLine.svg'
import yellowLineSvg from '../../../public/yellowLine.svg'
import purpleLineSvg from '../../../public/purpleLIne.svg'
import jsonLogo from '../../../public/json.png'
import aiSessionLogo from '../../../public/technical-support.png'
import languageLogo from '../../../public/language.png'
import { Toast, Collapse } from '@douyinfe/semi-ui'
import vsCodeThemeDemo from '../../../public/demo/react-theme-demo.png'
import chatSessionDemo from '../../../public/demo/chat-session.png'
import blogDemo from '../../../public/demo/blog.png'
import aggsearchDemo from '../../../public/demo/aggsearch.png'
import biographicalDemo from '../../../public/demo/biographical.png'

import qrcodeImg from '../../../public/qrcode.jpg'

// import rocket3DResource from '../../../public/spline/space-rocket.gif'
import astronaut3DResource from '../../../public/spline/astronaut.gif'
// import island3DResource from '../../../public/spline/Island.png'

import land3DResource from '../../../public/spline/land.splinecode'
import people3DResource from '../../../public/spline/people.splinecode'
import rocket3DResource from '../../../public/spline/rocket.splinecode'
import knowledge3DResource from '../../../public/spline/knowledge.splinecode'
import man3DResource from '../../../public/spline/man.splinecode'
import english3DResource from '../../../public/spline/english.splinecode'
import et3DResource from '../../../public/spline/et.splinecode'

import greenBranchImg from '../../../public/greenBranch.svg'
import redBranchImg from '../../../public/redBranch.svg'
import blueBranchImg from '../../../public/blueBranch.svg'

// import englishLogo from '../../../public/spline/englishLogo.png'
// import english from '../../../public/spline/english.png'
// import knowledgePlanet from '../../../public/spline/knowledgePlanet.png'

import { Chart } from '@antv/g2'
import professionalSkillsBook from '@/common/json/professionalSkillsBook.json'

// import manImg from '../../../public/spline/man.png'

import styles from './index.module.css'
import '@douyinfe/semi-ui/dist/css/semi.min.css'
import 'animate.css'
import '../../styles/github.css'
import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
  Suspense
} from 'react'
const Spline = React.lazy(() => import('@splinetool/react-spline'))

const projectMap = [
  {
    logo: languageLogo.src,
    name: 'Aggstranslate',
    url: '',
    introduce: `Translation has never been easier! Allowing you to communicate globally without barriers. Come and try it out!`
  },
  {
    logo: jsonLogo.src,
    name: 'Json conversion',
    url: '',
    introduce:
      'Our software allows you to edit, and generate JSON data, making your data management more efficient. Come and try it out!'
  },
  {
    logo: aiSessionLogo.src,
    name: 'Ai session',
    url: 'https://chat-session.fe-ecosphere.com/',
    introduce:
      'Talk to AI and explore infinite possibilities! Our AI will surprise you. Come and talk to our AI!'
  }
]

const ShowDemoDom = (url) => {
  return <img key={url} src={url} className={styles['poster-show-demo-img']} />
}

const show_demo = [
  {
    name: 'Doli Theme',
    introduce:
      'vscode Doli Dark Theme is a stylish, modern theme designed to increase development efficiency. It uses a dark background and bright text to make code more legible.',
    url: vsCodeThemeDemo.src,
    key: 'vscode-theme',
    dom: ShowDemoDom(vsCodeThemeDemo.src)
  },
  {
    name: 'Chat Session',
    introduce:
      'Talk to AI and explore infinite possibilities! Our AI will surprise you. Come and talk to our AI!',
    url: chatSessionDemo.src,
    key: 'chat-session',
    dom: ShowDemoDom(chatSessionDemo.src)
  },
  {
    name: 'Aggsearch',
    introduce:
      'One-stop search, giving you more answers! Our aggregated search website allows you to search multiple engines at once, providing you with more comprehensive and accurate search results. ',
    url: aggsearchDemo.src,
    key: 'aggsearch',
    dom: ShowDemoDom(aggsearchDemo.src)
  },
  {
    name: 'Blog',
    introduce:
      'Explore my world and share my thoughts! My Blog website is a platform to document my life, thoughts, and growth. Here, you can read my latest articles, insights, and opinions, and also share your ideas and feelings with me.',
    url: blogDemo.src,
    key: 'blog',
    dom: ShowDemoDom(blogDemo.src)
  },
  {
    name: 'Biographical',
    introduce:
      'A unique personal resume, showcasing your unique value! My resume will show you my professional ability, rich experience, and unique personal brand. ',
    url: biographicalDemo.src,
    key: 'biographical',
    dom: ShowDemoDom(biographicalDemo.src)
  }
]

const schedule_map = [
  {
    title: 'Burn fat, shape your perfect body !',
    color: 'red',
    isReversal: false
  },
  {
    title: 'Continuously improving, exceeding yourself !',
    color: 'blue',
    isReversal: true
  },
  {
    title:
      'Improve all aspects of your English skills and achieve your future !',
    color: 'green',
    isReversal: false
  }
]

const BranchDom = ({ color, isReversal, title }) => {
  let colorBranchLine = null

  const manSplineApp = useRef(null)
  const man3DRef = useRef(null)
  const [showMan3D, setShowMan3D] = useState(false)
  const manOnLoad = (spline) => {
    manSplineApp.current = spline
    spline.setZoom(1.2)
    man3DRef.current = spline.findObjectByName('Camera')
    if (man3DRef.current) {
      man3DRef.current.position.x = 3.43
      man3DRef.current.position.y = 293.0
      man3DRef.current.position.z = 739.58
      setShowMan3D(true)
    }
  }

  const englishSplineApp = useRef(null)
  const english3DRef = useRef(null)
  const [showEnglish3D, setShowEnglish3D] = useState(false)
  const englishOnLoad = (spline) => {
    englishSplineApp.current = spline
    spline.setZoom(0.5)
    english3DRef.current = spline.findObjectByName('Camera')
    if (english3DRef.current) {
      english3DRef.current.position.x = 290.38
      english3DRef.current.position.y = 798.16
      english3DRef.current.position.z = 816.52
      setShowEnglish3D(true)
    }
  }

  const etSplineApp = useRef(null)
  const et3DRef = useRef(null)
  const [showEt3D, setShowEt3D] = useState(false)
  const etOnLoad = (spline) => {
    etSplineApp.current = spline
    spline.setZoom(0.4)
    et3DRef.current = spline.findObjectByName('Camera')
    if (et3DRef.current) {
      et3DRef.current.position.x = 1065.68
      et3DRef.current.position.y = 1312.43
      et3DRef.current.position.z = 899.65
      setShowEt3D(true)
    }
  }

  useEffect(() => {
    if (color === 'blue') {
      const chart = new Chart({
        container: 'container',
        autoFit: true,
        width: 500,
        height: 500,
        marginTop: 0
      })
      chart
        .wordCloud()
        .data({
          value: professionalSkillsBook
        })
        .layout({
          spiral: 'rectangular',
          fontSize: 10
        })
        .encode('color', 'text')
      chart.options({
        legend: false
      })
      chart.render()
    }
  }, [])
  switch (color) {
    case 'red':
      colorBranchLine = {
        lineStyle: 'red-branch-line',
        img: redBranchImg.src,
        textStyle: `${styles['text-accent-primary']}`,
        contextDom: (
          <div className={styles['man-box']}>
            <div className="flex-1">
              <div>Shape</div>
              <div
                className={`${styles['main-box-type']} ${styles['text-accent-primary']}`}
              >
                Slightly fat type
              </div>
              <div>
                Persist in aerobic exercise and diet control, and the meat on
                your stomach will disappear immediately!
              </div>
            </div>
            {/* <img className={styles['man-img']} src={manImg.src} /> */}
            <div
              className={`${styles['man-img']} ${
                showMan3D ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Suspense>
                <Spline scene={man3DResource} onLoad={manOnLoad} />
              </Suspense>
            </div>
          </div>
        )
      }
      break
    case 'blue':
      colorBranchLine = {
        lineStyle: 'blue-branch-line',
        img: blueBranchImg.src,
        textStyle: `${styles['text-accent-primary-blue']}`,
        contextDom: (
          <div className={styles['technology-chart']} id="container"></div>
        )
      }
      break
    case 'green':
      colorBranchLine = {
        lineStyle: 'green-branch-line',
        img: greenBranchImg.src,
        textStyle: `${styles['text-accent-primary-green']}`,
        contextDom: (
          <div className={styles['english-box']}>
            <div
              className={`${showEnglish3D ? 'opacity-100' : 'opacity-0'} ${
                styles['english-img']
              }} h-full`}
            >
              <Suspense>
                <Spline scene={english3DResource} onLoad={englishOnLoad} />
              </Suspense>
            </div>
            <div
              className={`${
                showEt3D ? 'opacity-100' : 'opacity-0'
              } absolute w-full h-full`}
              style={{ bottom: '110%' }}
            >
              <Suspense>
                <Spline scene={et3DResource} onLoad={etOnLoad} />
              </Suspense>
            </div>
            {/* <img className={styles['english-img-logo']} src={englishLogo.src} />
            <img className={styles['english-img']} src={english.src} /> */}
          </div>
        )
      }
      break

    default:
      break
  }

  return (
    <div>
      <div
        className={`${styles['branch-line']} ${
          styles[colorBranchLine.lineStyle]
        } relative`}
      >
        <img
          className={`${styles['branch-line-img']} ${
            isReversal ? 'rotate-180 right-full' : ''
          }`}
          src={colorBranchLine.img}
        />
        <div
          className={`${styles['title-box']} ${
            isReversal ? styles['title-box-reversal'] : styles['left-50px']
          }`}
        >
          <div className={colorBranchLine.textStyle}>{title}</div>
          {colorBranchLine.contextDom}
        </div>
      </div>
    </div>
  )
}

export default function ThreeDCelestialBody() {
  const [currentShowDemo, setCurrentShowDemo] = useState(show_demo[0])

  const [contributions, setContributions] = useState(null)

  const pushWindow = (url: string) => {
    if (!url) {
      return Toast.warning({
        content: 'The website is still under construction',
        duration: 3
      })
    }
    window.open(url)
  }

  const collapseChange = (event: string) => {
    const changeKey = event[0]
    if (!changeKey || changeKey === currentShowDemo.key) return
    const newCurrentShowDemo = show_demo.find((item) => item.key === event[0])
    setCurrentShowDemo(newCurrentShowDemo)
  }

  const getContributions = async () => {
    try {
      const fetchResponse = await fetch('/api/github/githubRecord', {
        method: 'GET'
      })

      setContributions(await fetchResponse.text())
    } catch (error) {
      setContributions(null)
    }
  }

  // const initLand3dResource = () => {
  //   const canvas = document.getElementById('land3dResource')
  //   console.log(canvas, 'canvas')
  //   const app = new Application(canvas as HTMLCanvasElement)
  //   app.load(land3DResource)
  // }

  useEffect(() => {
    getContributions()
  }, [])

  useLayoutEffect(() => {
    // initLand3dResource()
  }, [])

  const landSplineApp = useRef(null)
  const land3DRef = useRef(null)
  const [showLand3D, setShowLand3D] = useState(false)
  const landOnLoad = (spline) => {
    landSplineApp.current = spline
    land3DRef.current = spline.findObjectByName('Camera')
    if (land3DRef.current) {
      land3DRef.current.position.x -= 2000
      land3DRef.current.position.y += 3500
      land3DRef.current.position.z += 4500
      setShowLand3D(true)
    }
  }

  const peopleSplineApp = useRef(null)
  const people3DRef = useRef(null)
  const [showPeople3D, setShowPeople3D] = useState(false)
  const peopleOnLoad = (spline) => {
    peopleSplineApp.current = spline
    people3DRef.current = spline.findObjectByName('Camera')
    spline.setZoom(0.9)
    if (people3DRef.current) {
      people3DRef.current.position.x = 69.93
      people3DRef.current.position.y = 61.31
      people3DRef.current.position.z = 1016.47
      setShowPeople3D(true)
    }
  }

  const rocketSplineApp = useRef(null)
  const rocket3DRef = useRef(null)
  const [showRocket3D, setShowRocket3D] = useState(false)
  const rocketOnLoad = (spline) => {
    rocketSplineApp.current = spline
    rocket3DRef.current = spline.findObjectByName('Camera')
    spline.setZoom(0.9)
    if (rocket3DRef.current) {
      rocket3DRef.current.position.x = 990.42
      rocket3DRef.current.position.y = 41.27
      rocket3DRef.current.position.z = -79.35
      setShowRocket3D(true)
    }
  }

  const knowledgeSplineApp = useRef(null)
  const knowledge3DRef = useRef(null)
  const [showKnowledge3D, setShowKnowledge3D] = useState(false)
  const knowledgeOnLoad = (spline) => {
    knowledgeSplineApp.current = spline
    knowledge3DRef.current = spline.findObjectByName('Camera')
    spline.setZoom(0.9)
    if (knowledge3DRef.current) {
      knowledge3DRef.current.position.x = 1906.41
      knowledge3DRef.current.position.y = 572.35
      knowledge3DRef.current.position.z = 3286.19
      setShowKnowledge3D(true)
    }
  }

  return (
    <div className={styles.container}>
      <img className={`${styles['body-bgc']}`} src={bodyBgcUrl.src} />
      <div className={styles.main}>
        <div className="pl-52">
          <div className="pt-32">
            <h1 className={styles.header}>
              FE-ecosphere
              <br />
              An ecosystem dedicated to front-end developers.
            </h1>
            <br />
            <p className={styles.message}>
              Full name: <strong>front-end ecosystem </strong>.The ecosystem
              includes aggregated search, aggregated translation, commonly used
              conversion tools, leisure and entertainment, as well as my
              personal profile and notes.
            </p>
          </div>
          <div className="pt-24 relative">
            <div className="relative z-10">
              <CardComponents />
            </div>
            <img src={greenLineSvg.src} className={styles['green-line-svg']} />
          </div>
        </div>
        <div className={`${styles.earth} pt-32`}>
          <EarthComponents />
        </div>
      </div>
      <div className={`${styles['introduce-box']}`}>
        <div className={`${styles.introduce}`}>
          <img src={pinkLineSvg.src} className={styles['pink-line-svg']} />
          <div className="w-full flex flex-nowrap justify-between pt-16">
            {projectMap.map((item, index) => {
              return (
                <div
                  className={styles['project-box']}
                  key={`project-box_${index}`}
                >
                  <div className={styles['project-box-icon']}>
                    <img
                      className={styles['project-box-icon-img']}
                      src={item.logo}
                    />
                  </div>
                  <h2 className={styles['project-box-icon-name']}>
                    {item.name}
                  </h2>
                  <p className={styles['project-box-icon-introduce']}>
                    {item.introduce}
                  </p>
                  <a
                    className={styles['project-box-icon-button']}
                    onClick={() => pushWindow(item.url)}
                  >
                    Get started immediately!
                  </a>
                </div>
              )
            })}
          </div>
          <img src={yellowLineSvg.src} className={styles['yellow-line-svg']} />
          <div className={styles.poster}>
            <div className={styles['poster-box']}>
              <div className={styles['poster-collapse']}>
                <Collapse
                  accordion
                  activeKey={currentShowDemo.key}
                  onChange={collapseChange}
                >
                  {show_demo.map((item, index) => {
                    return (
                      <Collapse.Panel
                        key={`poster_demo_${index}`}
                        header={item.name}
                        itemKey={item.key}
                      >
                        <p>{item.introduce}</p>
                      </Collapse.Panel>
                    )
                  })}
                </Collapse>
              </div>
              <div className={`${styles['poster-show-demo']}`}>
                <div className={styles['poster-show-demo-img-box']}>
                  <div className="relative h-full">
                    {show_demo.map((item, index) => {
                      return (
                        <div
                          key={`poster-show-demo-img_${index}`}
                          className={
                            item.key === currentShowDemo.key
                              ? `${styles['poster-show-demo-img-div']} ${styles['poster-show-demo-img-current']}`
                              : `${styles['poster-show-demo-img-previous']}`
                          }
                        >
                          {item.dom}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <img
              src={purpleLineSvg.src}
              className={`${styles['poster-purple-line']}`}
            />
          </div>
          <div
            className={`${styles.contributions} animate__animated animate__bounceIn`}
            dangerouslySetInnerHTML={{ __html: contributions }}
          ></div>
          <div
            className={`${styles.people} ${
              contributions ? 'margin-t-50' : 'margin-t-100'
            }`}
          >
            <div className={styles['people-img']}>
              <div
                className={`${
                  showPeople3D ? 'opacity-100 h-full' : 'opacity-0 h-full'
                }`}
              >
                <Suspense>
                  <Spline scene={people3DResource} onLoad={peopleOnLoad} />
                </Suspense>
              </div>
            </div>
            <img
              src={greenLineSvg.src}
              className={`${styles['green-line-svg']} ${styles['bottom-45']}`}
            />
          </div>
          <div className={styles['footer']} />
          <div className={styles['space-layer']}>
            <div id="rocket3dResource" className={styles['rocket-3d-resource']}>
              <div className={`relative ${styles['rocket-3d-resource-box']}`}>
                <div
                  className={`${styles['rocket-3d-resource-img']} ${
                    showRocket3D ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Suspense>
                    <Spline scene={rocket3DResource} onLoad={rocketOnLoad} />
                  </Suspense>
                </div>
                <div className={styles['rocket-3d-resource-context']}>
                  <h2 style={{ transitionDelay: '300ms' }}>
                    <p className={styles['text-accent-primary-green']}>
                      100-Day Challenge, witness the transformation !
                    </p>
                    I will fully commit myself to weight loss and professional
                    skill improvement over the next 100 days !
                  </h2>
                </div>
                <div className={styles['knowledge-planet']}>
                  {/* <img
                    src={knowledgePlanet.src}
                    className={styles['knowledge-planet-img']}
                  /> */}
                  <div
                    className={`${
                      showKnowledge3D ? 'opacity-100' : 'opacity-0'
                    } h-full`}
                  >
                    <Suspense>
                      <Spline
                        scene={knowledge3DResource}
                        onLoad={knowledgeOnLoad}
                      />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['schedule']}>
              {schedule_map.map((item, index) => {
                return (
                  <div key={`scheduleItem_${index}`}>
                    <BranchDom {...item} />
                  </div>
                )
              })}
            </div>
            <div
              id="astronaut3DResource"
              className={styles['rocket-3d-astronaut']}
            >
              <div className={`${styles['margin-l-500']} relative`}>
                <img
                  className={`${styles['rocket-3d-astronaut-img']}`}
                  src={astronaut3DResource.src}
                />
                <div className={styles['rocket-3d-astronaut-context']}>
                  <h2 style={{ transitionDelay: '300ms' }}>
                    <p className={styles['text-accent-primary']}>
                      How to find me ?
                    </p>
                    Scan my WeChat QR code and contact me anytime !
                  </h2>
                  <div className={styles['qrcode']}>
                    <div className={styles['qrcode-context']}>
                      <img
                        className={styles['qrcode-context-img']}
                        src={qrcodeImg.src}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['atmosphere']}>
            <div className={styles['island-3d-resource']}>
              <div
                id="land3dResource"
                className={`${styles['land-3d-resource-obj']} ${
                  showLand3D ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Suspense>
                  <Spline scene={land3DResource} onLoad={landOnLoad} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
