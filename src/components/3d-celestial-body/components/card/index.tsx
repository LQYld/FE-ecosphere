import styles from './index.module.css'
export default function CardComponents() {
  return (
    <div className="flex items-center">
      <div className={`${styles.card} mx-4`}>Magic Card</div>
      <div className={`${styles.card} mx-4`}>Magic Card</div>
      <div className={`${styles.card} mx-4`}>Magic Card</div>
      <div className={`${styles.card} mx-4`}>Magic Card</div>
    </div>
  )
}
