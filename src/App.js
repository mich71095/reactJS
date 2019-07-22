import React from 'react';
import logo from './logo.svg';
import './App.css';

import SideBar from './components/sidebar'

function App() {
  var obj = {username: "Michael", password: "pass"};
  return (
    <div class="App" tag="345">
      <div>
        <div>
          test
        </div>
        <SideBar username="Michael" ddd={obj} />
      </div>
    </div>
  );
}

export default App;
