import getRandomHexColor from './RandomColor'
import styles from './Statistics.module.css'


function Item({label, percentage}) {
  return  <li style={{
                            backgroundColor: getRandomHexColor(),
                        }} className={styles.item}>
            <span >{label}</span>
      <span >{percentage}%</span>
         </li>
   
   
}

export default Item