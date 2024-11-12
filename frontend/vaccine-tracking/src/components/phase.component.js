import { React, useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import PatientEntry from "./patientEntry.component";
import { Link } from "react-router-dom";

const Phase = ({patientsData, phase}) => {

    const [isOpen, setIsOpen] = useState(true);

    const colors = ["#ffffff", "#fcf6f5"]

    const handleCollapse = () => {
        setIsOpen((prev) => !prev);
    };


    return (<div>
        <div className="card phase-box ">
            <div >
                <div className="p-3 border-bottom d-flex justify-content-between">
                    <h6 className="heading-text parent-div ">Phase {phase}</h6>
                    <button type="button" className="btn" onClick={handleCollapse}>
                        {!isOpen ? (
                            <IoMdArrowDropdownCircle size={30} />
                        ) : (

                            <IoMdArrowDropupCircle size={30} />
                        )}
                    </button>
                </div>
            </div>

            <div className="border-bottom">
                {isOpen && (

                    <div>

                        {patientsData.map((patientData, index) => {
                            const curr_color = colors[index % 2];
                            return (
                                <Link to={`/patient/${patientData.patientID._id}`}  style={{ textDecoration: 'none', color:'black' }}>
                                <PatientEntry
                                    key={index}
                                    patientData={patientData}
                                    color={curr_color}
                                />
                                </Link>
                            );
                        })}

                      
                    </div>

                )}
            </div>

        </div>

    </div>);
}

export default Phase;