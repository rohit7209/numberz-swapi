import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from './containers/Layout';
import HomePage from './containers/HomePage';
import Explorer from './containers/Explorer';


ReactDOM.render(<Provider store={store}>
  <Router>
    <Layout>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/explorer/:type" component={Explorer} />
      {/* <Route exact path="/cdn/numberz/index.html" component={HomePage} />
      <Route exact path="/cdn/numberz/index.html/explorer/:type" component={Explorer} /> */}
    </Layout>
  </Router>
</Provider >, document.getElementById('root'));