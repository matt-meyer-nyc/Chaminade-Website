import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'
require("../sass/styles.scss");
import Drinks from './Drinks'
import Home from './Home'

const Cakes = React.createClass({
  render: function () {
  return (

    <div>
       <Header />

        <div>
          <Link className="links" to='/menu'>Pastries</Link>
          <Link className="links" to='/cakes'>Cakes</Link>
          <Link className="links" to='/drinks'>Drinks</Link>
        </div>
      <div className="crossfadeA">
        <img className="a1" src={'http://d2gk7xgygi98cy.cloudfront.net/14-3-large.jpg'} />
        <img className="a2" src={'http://danielchocolates.com/wp-content/uploads/2015/11/shop-pastries-banner.jpg'}/>
        <img className="a3" src={'https://afrostore.files.wordpress.com/2011/01/bread.jpg'} />
      </div>
      <div className="crossfadeB">
        <img className="b1" src={'http://d2gk7xgygi98cy.cloudfront.net/14-3-large.jpg'} />
        <img className="b2" src={'http://danielchocolates.com/wp-content/uploads/2015/11/shop-pastries-banner.jpg'}/>
        <img className="b3" src={'https://afrostore.files.wordpress.com/2011/01/bread.jpg'} />
      </div>
      <div className="crossfadeC">
        <img className="c1" src={'http://d2gk7xgygi98cy.cloudfront.net/14-3-large.jpg'} />
        <img className="c2" src={'http://danielchocolates.com/wp-content/uploads/2015/11/shop-pastries-banner.jpg'}/>
        <img className="c3" src={'https://afrostore.files.wordpress.com/2011/01/bread.jpg'} />
      </div>
      <div className="menuItem1">
 <p className="pastries"> CROISSANT  $2.75</p>
<p className="pastries"> CHOCOLATE CROISSANT $3.25</p>
<p className="pastries"> ALMOND CROISSANT $3.</p>
<p className="pastries"> SCONE $3.00</p>
<p className="pastries"> PAIN AU RAISIN $3.25</p>
<p className="pastries"> CARROT MUFFIN $2.75</p>
<p className="pastries"> BLUEBERRY MUFFIN $2.75</p>
<p className="pastries"> CHEESE DANISH $3.25</p>
<p className="pastries"> APPLE TURNOVER $3.50</p>
<p className="pastries"> CHOCOLATE BISCOTTI $1.50</p>
<p className="pastries"> ALMOND BISCOTTI $1.50</p>
<p className="pastries"> LINZER COOKIE $3.00</p>
<p className="pastries"> PALMIER $2.50</p>
<p className="pastries"> GRAND MACARON (SEASONAL FLAVORS) $3.00</p>
<p className="pastries"> APPLE GALETTE $4.00</p>
<p className="pastries"> CHOCOLATE FLOURLESS CAKE $4.00</p>
<p className="pastries"> APPLE DUTCH $4.50</p>
<p className="pastries"> APPLE ALMOND FRUIT CAKE $4.50</p>
<p className="pastries"> GRAND FINANCIER $1.75</p>
<p className="pastries"> ALMONDINE $4.00</p>
<p className="pastries"> FLORENTINE $3.00</p>
<p className="pastries"> COCONUT ROCHER $2.00</p>
<p className="pastries"> GRAND MADELEINE $1.25</p>
<p className="pastries"> AMERICAN CHOCOLATE CHIP COOKIE $2.25</p>
<p className="pastries"> PETITS GÂTEAUX </p>
<p className="pastries"> NAPOLEON $5.00</p>
<p className="pastries"> FRAISIER $5.50</p>
<p className="pastries"> CHOCOLATE MOUSSE $5.50</p>
<p className="pastries"> CHEESECAKE $5.00</p>
<p className="pastries"> BERRY TARTELETTE $5.00</p>
<p className="pastries"> APPLE DUTCH $4.50</p>
<p className="pastries"> TIRAMISU $6.00</p>
<p className="pastries"> OPERA $5.00</p>
<p className="pastries"> CHOCOLATE ÉCLAIR $4.00</p>
<p className="pastries"> VANILLA ÉCLAIR $4.00</p>
<p className="pastries"> SACHER TORTE $6.00</p>
<p className="pastries"> FLAN $4.00</p>
<p className="pastries"> FRUIT DIPLOMAT $4.50</p>
<p className="pastries"> PASSION FRUIT BERRY  $5.50</p>
<p className="pastries"> CHOCOLATE HAZELNUT ÉCLAIR $4.25</p>
<p className="pastries"> BANANA GIANDUJA CHOCOLATE  $5.50</p>
<p className="pastries"> CASSIS WHITE CHOCOLATE $5.50</p>
<p className="pastries"> BROWNIE $4.25</p>
<p className="pastries"> KEY LIME BERRY TARTELETTE $5.00</p>
<p className="pastries"> WHITE RASPBERRY TARTELETTE $5.00</p>
<p className="pastries"> RASPBERRY WHITE CHOCOLATE MOUSSE $5.50</p>
<p className="pastries"> PASSION CARAMEL CHOCOLATE $5.50</p>
<p className="pastries"> STRAWBERRY RHUBARB CRUMBLE TARTELETTE $5.00</p>
<p className="pastries"> RASPBERRY PASSION FRUIT CREAM MACARON $5.50</p>
<p className="pastries"> PRALINE CHOCOLATE DOME $5.50</p>
<p className="pastries"> APRICOT LEMON TARTELETTE $5.00</p>
</div>

<Footer />
</div>



  )
 }
})



export default Cakes
