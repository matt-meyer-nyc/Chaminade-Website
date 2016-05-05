import axios from 'axios'

const axiosHelpers = {
  listContacts: function() {
   return axios.get('http://localhost:3000/contacts.json')
  },
  addContact: function(contact) {
    return axios.post('http://localhost:3000/contacts.json', contact)
  },
  findContact: function() {
    return axios.get('http://localhost:3000/:id.json')
  },
  deleteContact: function(id) {
    return axios.delete('http://localhost:3000/:id', id)
  },
  updateContact: function(id) {
    return axios.put('http://localhost:3000/:id', id)
  }
}

export default axiosHelpers;
