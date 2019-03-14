import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from './components/sidebar/SideBar'
import RepositoriesTable from './components/tableComponent/repositoriesTable'
import './style/App.css';
import {connect} from "react-redux";

class App extends Component {
  render() {
      const {repositories} = this.props;
      console.log(repositories)
    return (
        <div className="App">
          <Sidebar/>
          <RepositoriesTable/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        repositories: state.repositories
    }
};

export default connect(
    mapStateToProps
)(App);
