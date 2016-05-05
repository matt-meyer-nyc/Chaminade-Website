import React from 'react'
import { Link } from 'react-router'
import JoinTeam from './JoinTeam'
import Contact from './Contact'
import Admin from './Admin'
require("../sass/styles.scss");


const Footer = React.createClass({
  render: function () {
    return (
    <div className='footer'>
      <div className='footerText'>
      <Link className="linksF" to='/contact'>Hit Us Up</Link>
      <Link className="linksF" to='/join-team'>Join Team</Link>
      <Link className="linksA" to='/Admin'>Admin</Link>
    </div>
   </div>
   )
  }
});


export default Footer
