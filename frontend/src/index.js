import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Welcome from './Welcome';
import Multistep from './Multistep';
import Portal from './Portal/main';


function App(){
    return <Welcome /> ;
}

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route exact path="/appointment" component={Multistep} />
      <Route exact path="/portal" component={Portal} />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
    
registerServiceWorker();