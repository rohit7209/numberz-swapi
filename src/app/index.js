import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = (e) => {
    this.props.onRequestDog();
  }

  componentWillReceiveProps(nextProps) {
    console.log('next::', nextProps);
    this.setState({ image: nextProps.state.AppReducer.message });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        abcd
        <button onClick={this.submit}>submit</button>
        <div>abcd</div>
        <img src={this.state.image} />
      </div>
    );
  }
}

App.propTypes = {};

const mapStateToProps = state => ({
  state: state,
});

const mapDispatchToProps = dispatch => ({
  onRequestDog: () => dispatch({ type: "TEST" })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
