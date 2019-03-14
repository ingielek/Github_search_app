import React, { Component } from 'react';
import Sidebar from './components/sidebar/SideBar'
import RepositoriesTable from './components/tableComponent/repositoriesTable'
import './style/App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Sidebar/>
          <RepositoriesTable/>
        </div>
    );
  }
}

export default App;
