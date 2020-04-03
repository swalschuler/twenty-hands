import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchClips } from "../actions";

class SearchBar extends Component {
  onSubmit = formValues => {
    console.log(formValues);
    this.props.fetchClips(formValues);
  };

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form"
        >
          <Field
            name="searchTerm"
            component={this.renderInput}
            label="Search"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const formWrapped = reduxForm({
  form: "searchForm"
})(SearchBar);

export default connect(null, {
  fetchClips
})(formWrapped);
