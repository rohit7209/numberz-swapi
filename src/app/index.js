import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Layout from './containers/Layout';
import HomePage from './containers/HomePage';
import Explorer from './containers/Explorer';

const About = () => <div>I am about <Link to="/topics">About</Link></div>;
const Topics = () => <div>I am topics <Link to="/">About</Link></div>;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = (e) => {
    this.props.onRequestDog();
  }

  render() {
    return (
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/explorer/:type" component={Explorer} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </Switch>
        </Router>
      </Layout>
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
