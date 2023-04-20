import CardComponents from './components/card'
import EarthComponents from './components/earth'
import bodyBgcUrl from '../../../public/hero-bg.webp'
import greenLineSvg from '../../../public/greenLine.svg'

import styles from './index.module.css'
export default function ThreeDCelestialBody() {
  return (
    <div className={styles.container}>
      <img className={`${styles['body-bgc']}`} src={bodyBgcUrl.src} />
      <div className={styles.main}>
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
            conversion tools, leisure and entertainment, as well as my personal
            profile and notes.
          </p>
        </div>
        <div className="pt-24 relative">
          <div className="relative z-10">
            <CardComponents />
          </div>
          <img src={greenLineSvg.src} className={styles['green-line-svg']} />
        </div>
      </div>
      <div className={`${styles.earth} top-32`}>
        <EarthComponents />
      </div>
    </div>
  )
}
