import React, { Component } from "react";
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onChangeInput = e => {
    this.setState({ inputValue: e.target.value.trim().toLowerCase() });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' })
  }


  render () {

    return (
      <header class="searchbar">
  <form class="form" onSubmit={this.handleSubmit}>
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      name='inputValue'
      value={this.state.inputValue}
      onChange={this.onChangeInput}
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>

    )
  }
}

export default Searchbar;

Searchbar.propType = {
  onSubmit: PropTypes.func,
}

