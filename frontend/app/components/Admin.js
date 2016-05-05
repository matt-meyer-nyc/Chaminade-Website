import React from 'react'

const Admin = React.createClass({

  render: function () {

    return (
      <div>

      <form>
       <div className="form2">
       <input className="name"placeholder="enter name to delete" onChange={this.props.onChangeDelete}/><br></br>
       </div>
       <button className="sbmDel" onClick={this.props.onSubmitDelete}>Delete</button><br></br><br></br><br></br>
      </form>

       <form>
        <div className="form3">
        <input className="name" placeholder="name" onChange={this.props.onChangeName}/><br></br>
        <input className="newName" placeholder="update name" onChange={this.props.onChangeNewName}/><br></br>
        <input className="newEmail" placeholder="update email" onChange={this.props.onChangeNewEmail}/><br></br>
        </div>
        <button className="sbmUpd" onClick={this.props.onSubmitUpdate}>Update</button>
       </form>
      </div>
    )
  }
})


export default Admin
