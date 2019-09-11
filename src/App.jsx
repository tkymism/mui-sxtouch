import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import navigations from './navigations';
import MainContainer from './modules/main/MainContainer';
import NotFoundContainer from './modules/error/NotFound'
import DrawerNavigation from './containers/organisms/drawernav/DrawerNavigation';

const App = () => {
  return (
      <BrowserRouter>
        <div>
            <Route exact path='/' component={Main} />
            <Route path='/readme' component={NotFound} />
            <Route path='/walk' component={NotFound} />
            <Route path='/guide' component={NotFound} />
        </div>
      </BrowserRouter>
  );
}

const Nav = props => {
  const { title } = props;
  return <DrawerNavigation navigations={navigations} navigationTitle={title}>{props.children}</DrawerNavigation>
}

const application_title = 'HOPE LifeMark-SX';
const not_found_title = 'Not Found!';

const Main = () => {
  return <Nav title={application_title}><MainContainer/></Nav>;
}

const NotFound = () => {
  return <Nav title={not_found_title}><NotFoundContainer/></Nav>;
}

export default App;