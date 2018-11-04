import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import AuthorCard from "./AuthorCard";

class AuthorsList extends Component {
  render() {
    const authorCards = this.props.auths.map(author => (
      <AuthorCard
        key={author.first_name + author.last_name}
        {...author}
        author={author}
      />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
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

export default connect(mapStateToProps)(AuthorsList);
