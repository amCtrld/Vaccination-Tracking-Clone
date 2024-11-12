import React, { useState, useEffect } from 'react';
import "../App.css";
import { addPatientRecord } from '../API services/patientServices';

const CreatePatientRecord = () => {

    

    const [formData, setFormData] = useState({
        status: '',
        vitals: {
            bloodPressure: '',
            heartRate: '',
            temperature: '',
            respiratoryRate: ''
        },
        medication: '',
        observation: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleVitalsChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            vitals: { ...prevData.vitals, [name]: value }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const link = window.location.href;
        const patientId = link.slice(link.lastIndexOf("/") + 1);
        
        console.log(formData); // You can perform further actions with the form data

        addPatientRecord(patientId, formData, () => {
            setFormData({
                status: '',
                vitals: {
                    bloodPressure: '',
                    heartRate: '',
                    temperature: '',
                    respiratoryRate: ''
                },
                medication: '',
                observation: ''
            })
        })
    };

    return (
        <div className="parent-div">
            <br />
            <div className="heading-text">Add patient record</div>
            <form onSubmit={handleSubmit}>
                <div className="section">
                    <div className="heading-text py-2">Status</div>
                    <div className="form-group">
                        <select
                            className="form-control"
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="Stable">Stable</option>
                            <option value="Unstable">Unstable</option>
                        </select>
                    </div>
                </div>
                <br />

                <div className="section row sub-heading-text">
                    <div className="heading-text py-2">Vitals</div>
                    <div className="form-group col-md-6 py-2">
                        <label htmlFor="bloodPressure">Blood Pressure:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="bloodPressure"
                            name="bloodPressure"
                            value={formData.vitals.bloodPressure}
                            onChange={handleVitalsChange}
                            required
                        />
                    </div>
                    <div className="form-group col-md-6 py-2">
                        <label htmlFor="heartRate">Heart Rate:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="heartRate"
                            name="heartRate"
                            value={formData.vitals.heartRate}
                            onChange={handleVitalsChange}
                            required
                        />
                    </div>
                    <div className="form-group col-md-6 py-2">
                        <label htmlFor="temperature">Temperature:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="temperature"
                            name="temperature"
                            value={formData.vitals.temperature}
                            onChange={handleVitalsChange}
                            required
                        />
                    </div>
                    <div className="form-group col-md-6 py-2">
                        <label htmlFor="respiratoryRate">Respiratory Rate:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="respiratoryRate"
                            name="respiratoryRate"
                            value={formData.vitals.respiratoryRate}
                            onChange={handleVitalsChange}
                            required
                        />
                    </div>
                </div>
                <br />

                <div className="section">
                    <div className="heading-text py-2">Medication</div>
                    <div className="form-group ">
                        <textarea
                            type="text"
                            className="form-control"
                            id="medication"
                            name="medication"
                            value={formData.medication}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <br />

                <div className="section">
                    <div className="heading-text py-2">Observation</div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            id="observation"
                            name="observation"
                            value={formData.observation}
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

export default CreatePatientRecord;
