import { Toast } from '@douyinfe/semi-ui'
import aggsearchImg from '../../../../../public/aggsearch.png'
import toolBoxImg from '../../../../../public/tool-box.png'
import blogImg from '../../../../../public/blogging.png'
import browserImg from '../../../../../public/browser.png'
import styles from './index.module.css'
const opts = {
  content:
    'We are currently unable to use this feature as the website is still under construction',
  duration: 3
}
const cardList = [
  {
    icon: aggsearchImg,
    label: 'Aggsearch',
    url: 'https://aggsearch.fe-ecosphere.com/'
  },
  {
    icon: toolBoxImg,
    label: 'Aggstool',
    url: 'https://aggstool.fe-ecosphere.com/'
  },
  {
    icon: browserImg,
    label: 'Introduce',
    url: 'http://biographical.fe-ecosphere.com/'
  },
  {
    icon: blogImg,
    label: 'Blog',
    url: ''
  }
]
export default function CardComponents() {
  const pushWindow = (url: string) =>
    url ? window.open(url) : Toast.warning(opts)
  return (
    <div className="flex items-center">
      {cardList.map((itemCard, itemCardIndex) => {
        return (
          <div
            key={`${itemCard.label}_${itemCardIndex}`}
            className={`${styles.card} mx-4`}
            onClick={() => pushWindow(itemCard.url)}
          >
            <img
              src={itemCard.icon.src}
              className={`${styles['card-img']} mb-6`}
            />
            <div>{itemCard.label}</div>
          </div>
        )
      })}
    </div>
  )
}
