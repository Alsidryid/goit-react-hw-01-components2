import StatisticsItem from '../StatisticsItem/StatisticsItem'
import styles from './Statistics.module.css'

function Statistics({title, stats}) {
    return (
    <section  className={styles.section}>
        {title && <h2  className={styles.title}>{title}</h2>}
        <ul className={styles.list}>
            {stats.map(stat => {
                return <StatisticsItem
                        key = {stat.id}
                        label={stat.label}
                        percentage={stat.percentage}
                        />
                })}
        </ul>
    </section>)
}

export default Statistics