import './App.css';
import Profile from './components/task-1/Profile';
import user from './components/task-1/user.json';
import Statistics from './components/task-2/Statistics';
import statisticalData from './components/task-2/statistical-data.json';

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
    </div>
  );
}

export default App;