import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
require("../sass/styles.scss");

const Main = React.createClass({
  render: function() {
    return (

       <div>

        {this.props.children}
       </div>

    )
  }
});

export default Main
