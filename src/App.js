import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { Account } from './components/Account';
import Status from './components/Status';
import Settings from './components/Settings';

function App() {
  return (
    <Account>
      <SignUp />
      <SignIn />
      <Status />
      <Settings />
    </Account>
  );
}

export default App;
