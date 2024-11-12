import React, { useState, useEffect } from "react";
import Add from "../components/add.component";
import Phase from "../components/phase.component";
import ProgressBar from "../components/progressBar.component";
import { getAvailablePatients, addPatientEntry, getVaccineRecordsByPhase, getVaccine } from "../API services/vaccineServices";
import { convertDate } from "../utility";



const VaccineDetails = () => {

    const vaccine1 = {
        "name": "Gardasil",
        "type": "HPV Vaccine",
        "phase": 1,
        "count": 10,
        "createdOn": "Dec 2022"
    }




    const [vaccineId, setVaccineId] = useState('')
    const [vaccine, setVaccine] = useState('')
    const [selectedPatient, setSelectedPatient] = useState('');
    const [patients, setPatients] = useState([]);

    const [phase1Records, setPhase1Records] = useState([]);
    const [phase2Records, setPhase2Records] = useState([]);
    const [phase3Records, setPhase3Records] = useState([]);

    useEffect(() => {

        const link = window.location.href;
        const vaccineId = link.slice(link.lastIndexOf("/") + 1);

        setVaccineId(vaccineId)

        getVaccine(vaccineId, setVaccine);



        getAvailablePatients(setPatients);
        getVaccineRecordsByPhase(vaccineId, 1, setPhase1Records);
        getVaccineRecordsByPhase(vaccineId, 2, setPhase2Records);
        getVaccineRecordsByPhase(vaccineId, 3, setPhase3Records);

    }, []);

    let capacity = 0
    let color = ""
    switch (vaccine1.phase) {
        case 1:
            capacity = 30;
            color = "#edc534"
            break;
        case 2:
            capacity = 200;
            color = "#f78736"
            break;
        case 3:
            capacity = 1000;
            color = "#30c97f"
            break;
    }

    const handleSelectPatient = (e) => {
        setSelectedPatient(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        // You can use the selectedPatient value for further processing

        const link = window.location.href;
        const vaccineId = link.slice(link.lastIndexOf("/") + 1);

        const entryData = {
            phase: "1",
            vaccineID: vaccineId,
            patientID: selectedPatient,
        }

        addPatientEntry(
            entryData, () => { console.log("added") })
    };


    return (
        <div className="parent-div">
            <br />

            <div className="card w-100">
                <div className="d-flex flex-row card-heading  justify-content-between">
                    <div className="heading-text">
                        {vaccine.name}
                    </div>
                    <div className="content-text">
                        { convertDate(vaccine.createdAt)}
                    </div>

                </div>

                <div className="card-img-container ">

                </div>
                <div className="card-body sub-heading-text">
                    <div>

                        <div className="d-flex justify-content-between">

                            <div className="p-1">{vaccine.type}</div>
                            <div className="p-1">

                                <div className="tag" style={{ backgroundColor: color }}> Phase {vaccine1.phase}</div>
                            </div>
                        </div>
                        <div className="p-1">{vaccine.count} participants</div>
                        {/* <div className="p-1">

                            <ProgressBar progress={(vaccine.count / capacity) * 100} />
                        </div> */}




                    </div>
                </div>

            </div>

            <br /><br />

            <form className="form-inline my-2 my-lg-0 parent-div" onSubmit={handleSubmit}>
                <div className="input-group">
                    <select className="form-control mr-sm-2" value={selectedPatient} onChange={handleSelectPatient}>
                        <option value="">Select Patient</option>
                        {patients.map((patient) => (
                            <option key={patient._id} value={patient._id}>
                                {patient.name}
                            </option>
                        ))}
                    </select>
                    <div className="input-group-append">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Add
                        </button>
                    </div>
                </div>
            </form>
            <br />


            <Phase patientsData={phase1Records} phase={1} />
            <Phase patientsData={phase2Records} phase={2}/>
            <Phase patientsData={phase3Records} phase={3} />
        </div>)
}

export default VaccineDetails;