import './App.css';
import Profile from './components/task-1/Profile';
import user from './components/task-1/user.json';
import Statistics from './components/task-2/Statistics';
import statisticalData from './components/task-2/statistical-data.json';
import FriendList from './components/task-3/FriendList';
import friends from './components/task-3/friends.json';
import TransactionHistory from './components/task-4/TransactionHistory';
import transactions from './components/task-4/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
