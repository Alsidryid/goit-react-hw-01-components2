import FriendItem from "../FriendItem/FriendItem"
import styles from "./FriendList.module.css"

function FriendList({ friends }) {
    return <ul className={styles.list}>
        {friends.map(friend => {
            return <FriendItem
                    avatar ={friend.avatar}
                    name ={friend.name}
                    isOnline ={friend.isOnline}
                    key ={friend.id }
                   />
        })}
        </ul>
}

export default FriendList