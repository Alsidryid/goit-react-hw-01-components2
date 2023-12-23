import FriendItem from "./FriendItem"
import styles from "./Friend.module.css"

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