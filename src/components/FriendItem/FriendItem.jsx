import styles from "./FriendItem.module.css"

function FriendItem({ avatar, name, isOnline }) {
    return <li className={styles.item} >
        <span className= { isOnline  ? styles.true:styles.false } ></span>
  <img className={styles.ava} src={avatar} alt={ name} width="48" />
        <p className={styles.nam}>{name}</p>
</li>
}

export default FriendItem