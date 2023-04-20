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
            The best place to build, test,and discover front-end code.front-end
            code.
          </h1>
          <br />
          <p className={styles.message}>
            CodePen is a <strong>social development environment</strong> for
            front-end designers and developers. Build and deploy a website, show
            off your work, build test cases to learn and debug, and find
            inspiration.
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
