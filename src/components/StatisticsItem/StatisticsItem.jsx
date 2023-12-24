import getRandomHexColor from '../../helpers/RandomColor'
import styles from './StatisticsItem.module.css'


function StatisticsItem({label, percentage}) {
  return  <li style={{backgroundColor: getRandomHexColor(),}} className={styles.item}>
            <span >{label}</span>
            <span >{percentage}%</span>
          </li>
}

export default StatisticsItem