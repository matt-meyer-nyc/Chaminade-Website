import React from 'react';
import _ from 'lodash'
import Admin from '../components/Admin'
import axiosHelpers from '../utils/axiosHelpers'

const ListViewContainer = React.createClass({
  getInitialState: function() {

    console.log("get init state");
    return {
      allContacts: []
    }
  },
  componentWillMount: function () {
    console.log('component will mount');
  },
  // onUpdateList: function (e) {
  //   console.log(e.target.value);
  //   this.setState({
  //     name: e.target.value
  //   })
  // },
  componentDidMount: function() {
    console.log("did mount");
    axiosHelpers.listContacts()
    .then(function(response) {
      console.log(response.data);
      this.setState({
        allContacts: response.data
      });
    }.bind(this));
  },

  render: function () {
    console.log("render")
    return (

        <Admin
        contacts={this.state.allContacts}
        />

   )
  }
})

export default ListViewContainer;
