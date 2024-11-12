import React, { useState, useEffect } from 'react';
import Add from '../components/add.component';
import UserCard from '../components/usercard.component';
import { getAllPatients } from '../API services/patientServices';


const People = () => {




    const [activeTab, setActiveTab] = useState('patients')
    const [patientsData, setPatientsData] = useState([]);


    const handleTabClick = (tab) => {
        console.log(tab)
        setActiveTab(tab)
    }

    useEffect(() => {
        getAllPatients(setPatientsData);
    }, []);

    const numbers = [1, 2, 3, 4, 5];

    return (

        <div className="parent-div">
            <br />

            <ul className="nav nav-fill tabs">
                <li className="nav-item tab left-rounded">
                    <a className={`nav-link  tab left-rounded ${activeTab === 'patients' ? 'active-tab' : ''}`} href="#" onClick={() => { handleTabClick('patients') }}>Patients</a>
                </li>
                <li className="nav-item tab right-rounded">
                    <a className={`nav-link tab right-rounded ${activeTab === 'doctors' ? 'active-tab' : ''}`} aria-current="page" href="#" onClick={() => { handleTabClick('doctors') }}>Doctors</a>
                </li>

            </ul>

            <br />
            <div className="row">

                {patientsData.map((patientData) => (
                    <div className="col-sm-3">
                        <UserCard patientData={patientData} />
                    </div>
                ))}
            </div>
            <Add navigateTo="/create/patient" />
        </div>
    );
};

export default People;
