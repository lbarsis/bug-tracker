import React, { useState } from 'react';

function AddUserForm({ setDisplayAddUserForm, onAddUser }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    profileImage: ''
  })

  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:9292/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        profile_image: formData.profileImage
      })
    })
    .then(r => r.json())
    .then(user => onAddUser(user))
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function closeForm() {
    setDisplayAddUserForm(false)
  }

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Add User</h1>

        <div className='ticket-form-grid-container'>
          <div className='ticket-input-grid-item'>
            <label><b>First Name</b></label>
            <input
              type="text"
              placeholder="First Name..."
              name="firstName"
              required
              onChange={handleChange}
              value={formData.firstName}
            />
          </div>

          <div className='ticket-input-grid-item'>
            <label><b>Last Name</b></label>
            <input
              type="text"
              placeholder="Last Name..."
              name="lastName"
              required
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>

          <div className='ticket-input-grid-item'>
            <label><b>Phone</b></label>
            <input
              type="text"
              placeholder="XXX-XXX-XXXX..."
              name="phone"
              required
              onChange={handleChange}
              value={formData.phone}
            />
          </div>

          <div className='ticket-input-grid-item'>
            <label><b>Email</b></label>
            <input
              type="text"
              placeholder="abc@defgh.com..."
              name="email"
              required
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div className='ticket-input-grid-item'>
            <label><b>Profile Picture</b></label>
            <input
              type="text"
              placeholder="Upload a picture!"
              name="profileImage"
              onChange={handleChange}
              value={formData.profileImage}
            />
          </div>
        </div>
        <button type="submit" className="btn">Submit</button>
        <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
      </form>

    </div>
  );
}

export default AddUserForm;
