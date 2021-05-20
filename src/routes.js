import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import CreatePet from './pages/CreatePet';
import DetailsPet from './pages/DetailsPet';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create-pet" component={CreatePet} />
        <Route exact path="/details-pet" component={DetailsPet} />
      </Switch>
    </BrowserRouter>
  )
}