import React, { useState, useEffect } from 'react';
import "../App.css";
import { addVaccine } from '../API services/vaccineServices';

const CreateVaccine = () => {

    const [formData, setFormData] = useState({
        name: '',
        type:  ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        

        addVaccine(formData, () => {
            setFormData({
                name: '',
                type: ''
            })
        })
    };

    return (
        <div className="parent-div">
            <br />
            <div className="heading-text">Add vaccine</div>
            <form onSubmit={handleSubmit}>
                
                <div className="section">
                    <div className="heading-text py-2">Name</div>
                    <div className="form-group ">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <br />

                <div className="section">
                    <div className="heading-text py-2">Type</div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            id="type"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                </div>
                <br />

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

export default CreateVaccine;
