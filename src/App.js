import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            <AuthorsList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auths: state.authors,
    id: state.id
  };
};

export default connect(mapStateToProps)(App);
