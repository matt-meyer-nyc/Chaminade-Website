import React from 'react';
import React, {PropTypes} from 'react';
import Admin from '../components/Admin';
import axiosHelpers from '../utils/axiosHelpers';

const DeleteContainer = React.createClass({
  getInitialState: function() {
    return {
      name: ''
    }
  },

  userInput: function(e) {
    this.setState({
      name: e.target.value
    })
  },

  onSubmitDelete: function () {
    console.log('clicked');
  console.log("delete author", this.state.name);
  const name = {
  name: this.state.name
 };
 axiosHelpers.deleteContact(name)
 .then(function(response){
   console.log("response.data",response.data);
   this.setState({
     name: response.data
   });
 }.bind(this));
},

  render: function () {
    return (
      <Admin
        onChangeDelete={this.userInput}
        onSubmitDelete={this.onSubmitDelete}
        />
    )
  }
});


export default DeleteContainer
