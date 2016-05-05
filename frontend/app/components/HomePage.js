import React from 'react';
import Header from './Header'
import Footer from './Footer'

require("../sass/styles.scss");

const HomePage = React.createClass({
  render: function() {
    return (

      <div>
       <Header />
          <div className="crossfade">
           <img className="cf1" src={'http://d2gk7xgygi98cy.cloudfront.net/14-3-large.jpg'} />
           <img className="cf2" src={'http://danielchocolates.com/wp-content/uploads/2015/11/shop-pastries-banner.jpg'}/>
           <img className="cf3" src={'https://afrostore.files.wordpress.com/2011/01/bread.jpg'} />
          </div>
        <Footer />
        </div>


    )
  }
});

export default HomePage
