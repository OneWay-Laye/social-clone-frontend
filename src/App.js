import { Route } from 'react-router-dom'

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeforeUser from './componets/BeforeUser/BeforeUser'
import SideNav from './componets/SideNav/SideNav'


function App() {
  return (
    <div className="App">
      <Route exact path='/' render={SideNav} />
      <Route exact path='/beforeUser' render={BeforeUser} />
    </div>
  );
}

export default App;
