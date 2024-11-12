import React, { useState } from 'react';
import '../App.css';
import { addPatient } from '../API services/patientServices';

const CreatePatient = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phase: '',
    bloodGroup: '',
    contact: '',
    email:'',
    image:'',
    medicalHistory:'',
    allergies: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    // formData.allergies = formData.allergies.split(",")

    console.log(formData)
   

    addPatient(formData, () => {
      // Reset form data
      setFormData({
        name: '',
        age: '',
        gender: '',
        bloodGroup: '',
        contact: '',
        email: '',
        image: '',
        medicalHistory: '',
        allergies:''
      });
    });
  
  };

  return (
    <div className="parent-div">
      <br />
      <div className="heading-text">Registration Form</div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group sub-heading-text py-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                maxLength="20"
                required
              />
            </div>

            <div className="form-group sub-heading-text py-2">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group sub-heading-text py-2">
              <label htmlFor="gender">Gender</label>
              <select
                className="form-control"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

   
          </div>

          <div className="col-md-6">
  

            <div className="form-group sub-heading-text py-2">
              <label htmlFor="bloodGroup">Blood Group</label>
              <select
                className="form-control"
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                required
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            <div className="form-group sub-heading-text py-2">
              <label htmlFor="contact">Contact</label>
              <input
                type="tel"
                className="form-control"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group sub-heading-text py-2">
              <label htmlFor="email">Email</label>
              <input
                type="tel"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group sub-heading-text py-2">
          <label htmlFor="image">Image</label>

          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </div>
        <div className="form-group sub-heading-text py-2">
          <label htmlFor="image">Medical History</label>

          <input
            type="text"
            className="form-control"
            id="medicalHistory"
            name="medicalHistory"
            onChange={handleChange}
          />
        </div>
        <div className="form-group sub-heading-text py-2">
          <label htmlFor="image">Allergies</label>

          <input
            type="text"
            className="form-control"
            id="allergies"
            name="allergies"
            onChange={handleChange}
          />
        </div>




        <br/>

        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePatient;
