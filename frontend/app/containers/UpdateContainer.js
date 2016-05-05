
import React, {PropTypes} from 'react';
import Admin from '../components/Admin'
import axiosHelpers from '../utils/axiosHelpers'

const UpdateContainer = React.createClass({
  getInitialState: function () {
    return {
      axiosResponse: [],
      name:'',
      email:'',
    }
  },

  handleName: function (e) {
    this.setState({
      name: e.target.value
    })
  },

  handleNewName: function(e) {
    this.setState({
      newName: e.target.value
    })
  },

  handleNewEmail: function(e) {
    this.setState ({
      newEmail: e.target.value
    })
  },

  onSubmitUpdate: function (e) {
    console.log("clicked");
    console.log("name change to", this.state.name, this.state.email);
    const updateContact = {
      name: this.state.name,
      newName: this.state.newName,
      newEmail: this.state.newEmail
    };
    axiosHelpers.updateContact(name)
    .then(function(response) {
      console.log('response.data', response.data);
      this.setState({
        axiosResponse: response.data
      });
    }.bind(this));
  },
  render: function() {
    return (
      <Contact
        onChangeName={this.handleName}
        onChangeNewName={this.handleNewName}
        onChangeNewEmail={this.handleNewEmail}
        onSubmitUpdate={this.onSubmitUpdate}
        />
    );
  }
});

export default UpdateContainer;
