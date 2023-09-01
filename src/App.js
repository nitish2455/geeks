
import './App.css';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Platforms from './components/Platforms/Platforms';
import Teams from './components/Teams/Teams';
import WorkList1 from './components/Work-list/WorkList1';
import WorkList2 from './components/Work-list/Worklist2';

function App() {
  return (
    <div>
      <div >

      <Header />
      </div>
      <WorkList1 />
      <WorkList2 />
      <Info />
      <Clients />
      <Platforms />
      <Teams />
      <Contact />
    </div>
  );
}

export default App;
