import Profile from "./User/User"
import user from "../data/user.json"
import Statistics from "./Statistics/Statistics"
import data from "../data/data.json"
import FriendList from "./Friends/Friends"
import friends from "../data/friends.json"
import TransactionHistory from './Transaction/Transaction'
import items from "../data/transactions.json"



export const App = () => {
  return (  
      <>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    /> 

      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList
      friends={friends}
      />
      <TransactionHistory
        items ={items}
      />
      </>
  );
};
