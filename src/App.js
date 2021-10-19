import './App.css';
import './styles/main.scss'
import 'rsuite/dist/styles/rsuite-default.css';   //use this default css for rsuite 
import { Switch, Route } from 'react-router';
import Signin from './pages/Signin';
import PrivateRouter from './Components/PrivateRouter';
import Home from './pages/Home';
import PublicRouter from './Components/PublicRouter';
function App() {
  return (
      <Switch>
        <PublicRouter path="/signin">
      <Signin/>
        </PublicRouter>
       <PrivateRouter path="/">     {/*privaterouter is a component created in components folder and we are giving path for exact router */}
        <Home/>
       </PrivateRouter>
      </Switch>
  );
}

export default App;
