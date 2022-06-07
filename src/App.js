import './App.css';
import React, { useState } from 'react';
import { Link, Route } from 'wouter';

import ListGifs from './components/ListGifs';

function App() {
  const [keyword, setKeyword] = useState('Colombia');
  return (
    <div className="App">
      <section className="App-content">
        <Link href="/gif/panda">Link a Pandas</Link>
        <Link href="/gif/the boys">Link a The boys</Link>
        <Link href="/gif/fortnite">Link a Fornite</Link>
        <Route path="/gif/:keyword" component={ListGifs} />
      </section>
    </div>
  );
}

export default App;
