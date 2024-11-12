import React, { useState } from "react";
import { Link } from "react-router-dom";
import { convertDate } from "../utility";

const UserCard = ({ patientData}) => {
    return (
        <Link to={`/patient/${patientData._id}`}  style={{ textDecoration: 'none', color:'black' }}>
        <div className="card">
            <div className="d-flex flex-row card-heading">
                <img src={(patientData.image)} className="shadow-1-strong me-3 mt-1 card-img" alt="Card" />
                <div>
                    <div className="heading-text ">

                    {patientData.name}
                    </div>
                    <div className="content-text ">
                        {patientData.age}, {patientData.gender}
                    </div>
                </div>
            </div>

            <div className="card-img-container">

            </div>
            <div className="card-body sub-heading-text ">

                <div>
                    <p>Blood group: {patientData.bloodGroup}</p>
                    <p>Start date: { convertDate(patientData.createdAt)}</p>
                    <p>Contact: {patientData.contact}</p>
                    <p>Email: {patientData.email}</p>
                </div>
            </div>
        </div>
        </Link>


    );
};

export default UserCard;