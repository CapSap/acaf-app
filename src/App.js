import './App.css';
import Menubar from './components/Menu-bar';
import Registration from './components/Registration';
import Projectlist from './components/Project-lists';

function App() {
  return (
    <div>
      Title: Acaf member dashboard demo app
      <Menubar />
      <Registration />
      <Projectlist />
    </div>
  );
}

export default App;
