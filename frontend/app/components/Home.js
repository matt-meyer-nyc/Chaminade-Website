import React from 'react'
import { Link } from 'react-router'
import Menu from './Menu'
import Story from './Story'
import SpecialtyCakes from './SpecialtyCakes'
import Contact from './Contact'
import JoinTeam from './JoinTeam'
require("../sass/styles.scss");


const Home = React.createClass({
  render: function () {
    return (
    <div className='home'>
      <Link className="links" to='/'>Home</Link>
      <Link className="links" to='/menu'>Menu</Link>
      <Link className="links" to='/story'>Story</Link>
      <Link className="links" to='/specialty-cakes'>Specialty Cakes</Link>
      <Link className="links" to='/contact'>Contact</Link>
      <Link className="links" to='/join-team'>Join Team</Link>
    </div>
   )
  }
});

export default Home;
