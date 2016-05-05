import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'

require("../sass/styles.scss");


const Contact = React.createClass({
render: function() {
    return (
      <div>
       <Header />
       <p>We'd Love to Stay in Touch...Please Sign Up!</p>
        <div className="addContact">
         <form>
           <div className="form">
           <input className="name"placeholder="name" onChange={this.props.onChangeName}/><br></br>
           <input className="email" placeholder="email" onChange={this.props.onChangeEmail}/><br></br>
           <textarea rows="20" cols="50" placeholder="leave a note" onChange={this.props.onChangeMessage} /><br></br>
           </div>
           <button className="sbmCon" onClick={this.props.onSubmitInput}>Submit</button><br></br><br></br><br></br>
          </form>


        </div>
      <Footer />
      </div>
    )
  }
})

export default Contact
