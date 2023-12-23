import style from './User.module.css'


function Profile({ username, tag, location, avatar, stats:{followers,views,likes}}) {
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

export default Profile