import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header'
import Home from './Home';
import About from './About';

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Header />
        <div class="container-fluid">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;