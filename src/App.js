import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

import { Link, Route } from 'wouter';
function App() {
  return (
    <StaticContext.Provider value={{ name: 'jesusdavid', age: 45 }}>
      <div className="App">
        <section className="App-content">
          <Link href="/">
            <figure className="App-logo">
              <img alt="Giffy logo" src="./assets/logo.png" />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
