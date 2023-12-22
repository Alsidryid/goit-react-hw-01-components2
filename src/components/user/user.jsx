import user from "../../data/user.json"
 import style from './user.module.css'

const { avatar, username, tag, location, stats } = user
const {followers, views, likes } = stats

function User() {
    return (<div className={style.profile}>
      <div className={style.profBox} >
        <div className={style.imageBox}>
    <img
      src = {avatar}
      alt={username}
      className={style.img}
          />
          </div>
    <p className={style.name}>{username}</p>
    <p className={style.inf}>{tag}</p>
        <p className={style.inf}>{location }</p>
  </div>

  <ul className={style.stats}>
    <li className={style.item}>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}>{followers}</span>
    </li>
    <li className={style.item}>
      <span className={style.label}>Views</span>
      <span className={style.quantity}>{views}</span>
    </li>
    <li className={style.item}>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}>{ likes}</span>
    </li>
  </ul>
</div>)
}

export default User