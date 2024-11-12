import { React, useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

const PatientRecord = ({patientRecord}) => {

    const [isOpen, setIsOpen] = useState(true);


    const handleCollapse = () => {
        setIsOpen((prev) => !prev);
    };




    // const patientRecord = {
    //     "vitals": {
    //         "Blood pressure": 120,
    //         "Heart rate": 80,
    //         "Temperature": 98.9,
    //         "Respiratory rate": 16
    //     },
    //     "Observation": "The patient's blood pressure and heart rate remain stable throughout the clinical trial.There is a noticeable improvement in the patient's overall well-being and energy levels.The patient reports a decrease in pain intensity and frequency.Laboratory results indicate a decrease in tumor markers, suggesting a positive response to the cancer vaccine. The patient experiences mild nausea as a common side effect of the treatment. The patient's appetite has improved, leading to a healthy weight gain. Regular blood tests show a normal blood cell count, indicating a well-functioning immune system. The patient's sleep pattern has improved, reporting better quality and duration of sleep. The patient exhibits increased mobility and physical activity levels compared to the baseline assessment. Overall, the patient shows a positive response to the cancer vaccine, with signs of tumor regression and improved quality of life.",
    //     "Medication": "Cancer vaccine administration: Administered as per the clinical trial protocol. Antiemetic medication: Prescribed to manage nausea and prevent vomiting. Pain medication: Administered to alleviate any discomfort or pain experienced by the patient. Nutritional supplements: Prescribed to ensure adequate nutrition and support the patient's immune system during the clinical trial.",
    //     "Status": "Stable"
    // };
    let color = ""
    switch (patientRecord.status) {
        case "Stable":
            color = "#f78736"
            break;
        case "Unstable":
            color = "#30c97f"
            break;
    }


    return (<div>
        <div className="card phase-box ">
            <div >
                {console.log(patientRecord)}
                <div className="p-3 border-bottom d-flex justify-content-between">
                    <h6 className="heading-text parent-div ">Record {patientRecord.recordNumber}</h6>
                    <div className="sub-heading-text">{"25th Dec, 2022"}</div>
                    <div className="tag" style={{ backgroundColor: color }}> {patientRecord.status}</div>
                    <button type="button" className="btn p-0 m-0"  onClick={handleCollapse}>
                        {!isOpen ? (
                            <IoMdArrowDropdownCircle size={30} />
                        ) : (

                            <IoMdArrowDropupCircle size={30} />
                        )}
                    </button>
                </div>
            </div>

            <div className="border-bottom parent-div" >
                {isOpen && (

                    <div className="p-4">
                        <div className="heading-text py-2"> Vitals: </div>
                        <div className="sub-heading-text d-flex justify-content-between">
                            <div>Blood Pressure: {patientRecord.vitals.bloodPressure}  <br /> </div>
                            <div> Heart rate: {patientRecord.vitals.heartRate} <br /> </div>
                            <div>Temperature: {patientRecord.vitals.temperature} <br /></div>
                            <div>Respiratory rate: {patientRecord.vitals.respiratoryRate} <br /></div>

                        </div> <br/>
                        <div className="heading-text py-2"> Medication: </div>
                        <div className="sub-heading-text">{patientRecord.medication} </div><br />
                        <div className="heading-text py-2">Observation:</div>
                        <div className="sub-heading-text"> {patientRecord.observation}</div> <br />





                    </div>
                )}
            </div>

        </div>

    </div>);
}

export default PatientRecord;