import React, { useEffect, useState } from "react";
import PatientRecord from "../components/patientRecord.component";
import Add from "../components/add.component";
import {getPatient, getAllPatientRecords} from "../API services/patientServices"
import { convertDate } from "../utility";

const PatientDetails = () => {

    const [patientData, setPatientData] = useState({});
    const [patientRecords, setPatientRecords] = useState({});

    useEffect(() => {
        const link = window.location.href;
        const patientId = link.slice(link.lastIndexOf("/") + 1);
        getPatient(patientId, setPatientData);
        getAllPatientRecords(patientId, setPatientRecords);
        
      }, []);

    return (
        <div className="parent-div">
            <br />
            <div>
            <div className="card w-100">
            <div className="d-flex flex-row card-heading">
                <img src={patientData.image} className="shadow-1-strong me-3 mt-1 card-img" alt="Card" />
                <div>
                    <div className="heading-text ">

                    {patientData.name}
                    </div>
                    <div className="content-text ">
                        {patientData.age}, {patientData.gender}
                    </div>
                </div>
            </div>

           
            <div className="card-body sub-heading-text ">

                <div>
                    <p>Vaccine:</p>
                    <p>Phase:</p>
                    <p>Blood group: {patientData.bloodGroup}</p>
                    <p>Start date: {convertDate(patientData.createdAt)}</p>
                    <p>Contact: {patientData.contact}</p>
                    <p>Email: {patientData.email}</p>
                    <p>Allergies: {patientData.allergies}</p>
                    <p>History: {patientData.medicalHistory}</p>
                </div>
            </div>
        </div>

            </div>
            {
                  console.log(patientRecords)
            }
            {  
          
            patientRecords.length > 0 ?
            patientRecords.map((patientRecord) =>{
            return <PatientRecord patientRecord = {patientRecord} />
            }) :""}

            
            <Add navigateTo={`/create/patient-record/${patientData._id}`} />
        </div>)
}

export default PatientDetails;