import React from 'react';
import Routers from '../routers';
import Header from './shared/Header';
const App = () => (
  <div className="container-fluid">
    <Header />
    <Routers />
  </div>
)

export default App;