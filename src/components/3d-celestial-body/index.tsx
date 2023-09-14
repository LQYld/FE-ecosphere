import CardComponents from './components/card'
import EarthComponents from './components/earth'
import bodyBgcUrl from '../../../public/hero-bg.webp'
import greenLineSvg from '../../../public/greenLine.svg'
import pinkLineSvg from '../../../public/pinkLine.svg'
import yellowLineSvg from '../../../public/yellowLine.svg'
import jsonLogo from '../../../public/json.png'
import aiSessionLogo from '../../../public/technical-support.png'
import languageLogo from '../../../public/language.png'
import { Toast, Collapse } from '@douyinfe/semi-ui'
import vsCodeThemeDemo from '../../../public/demo/react-theme-demo.png'
import styles from './index.module.css'
import { useState } from 'react'

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
      'Our software allows you to quickly and conveniently read, edit, and generate JSON data, making your data management more efficient. Come and try it out!'
  },
  {
    logo: aiSessionLogo.src,
    name: 'Ai session',
    url: 'https://chat-session.fe-ecosphere.com/',
    introduce:
      'Talk to AI and explore infinite possibilities! Our AI will surprise you. Come and talk to our AI!'
  }
]

const show_demo = [
  {
    name: 'Doli Theme',
    introduce:
      'vscode Doli Dark Theme is a stylish, modern theme designed to increase development efficiency. It uses a dark background and bright text to make code more legible.',
    url: vsCodeThemeDemo.src,
    key: 'vscode-theme'
  }
]

export default function ThreeDCelestialBody() {
  const [currentShowDemo] = useState(show_demo[0])

  const pushWindow = (url: string) => {
    if (!url) {
      return Toast.warning({
        content: 'The website is still under construction',
        duration: 3
      })
    }
    window.open(url)
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
                <h2 className={styles['project-box-icon-name']}>{item.name}</h2>
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
          <div className={styles['poster-collapse']}>
            <Collapse accordion defaultActiveKey={currentShowDemo.key}>
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
              <img
                src={currentShowDemo.url}
                className={styles['poster-show-demo']}
              />
            </div>
          </div>
        </div>
        <div className={styles['footer']} />
      </div>
    </div>
  )
}
