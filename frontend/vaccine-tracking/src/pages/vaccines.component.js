import React, { useEffect, useState } from "react";
import VaccineCard from "../components/vaccinecard.component";
import Add from "../components/add.component";
import { Link } from "react-router-dom";

import { getAllVaccines } from "../API services/vaccineServices";


const Vaccines = () => {

    const [vaccines, setVaccines] = useState([]);

    useEffect(() => {
        getAllVaccines(setVaccines);
    }, []);

    // const vaccine = {
    //     "name": "Gardasil",
    //     "type": "HPV Vaccine",
    //     "phase": 1,
    //     "count": 10,
    //     "createdOn": "Dec 2022"
    // }
    // const numbers = [1,2,3,4,5,8,6]
    return (
        <div className="parent-div">
            <br />
            <div className="row">

                {vaccines.map((vaccine) => (
                    <div className="col-sm-3">

                        <Link to={`/vaccine/${vaccine._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <VaccineCard vaccine={vaccine} /> </Link>   </div>

                ))}
            </div>
            <Add navigateTo={`/create/vaccine`} />
        </div>)

}

export default Vaccines;