import React, { useRef } from "react";
import { BiEdit } from "react-icons/bi"
import { RiDeleteBin6Line } from "react-icons/ri"
import {FiDownload} from "react-icons/fi"

import { convertDate } from "../utility";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";




const PatientEntry = ({ patientData, color }) => {


    const pdfRef = useRef();
    const colors = ["#32a852", "#f7b51b", "#d92f23"]

    const colorStatus = () =>{
        switch (patientData.status){
            case "approved": return colors[0];
            case "study": return colors[1];
            case "failed": return colors[2];
        }
    }



const downloadPDF = ()=>{
    const input = pdfRef.current;
    html2canvas(input).then((canvas)=>{
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p','mm','a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
        const imgX = (pdfWidth -imgWidth * ratio)/2;
        const imgY = 30;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save("downad.pdf");
    })
}
    return (
        <div style={{ backgroundColor: color }} ref={pdfRef}>
            <div className="parent-div justify-content-between d-flex patient-entry-box sub-heading-text">



                <div>
                <img src={(patientData.patientID.image)} style={{width:"30px"}} className="shadow-1-strong me-3 mt-1 rounded" alt="Card" />
            
                    {patientData.patientID.name}
                </div>

                <div className="tag" style={{backgroundColor:colorStatus()}}>
                    {patientData.status}
                </div>

                <div>
                    {convertDate(patientData.createdAt)}
                </div>

                <div>

                    <button className="btn btn-outline-secondary rounded-pill" onClick={downloadPDF}> 
                    <FiDownload/>
                     &nbsp; Download 
                    </button>
                </div>

                <div>
                    <BiEdit /> &nbsp; 
                    <RiDeleteBin6Line />
                </div>
            </div>


        </div>)
}

export default PatientEntry;