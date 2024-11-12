import React, { useEffect, useState } from "react"



import {TbVaccine} from "react-icons/tb"
import {IoPeople} from "react-icons/io5"
import {HiDocumentReport} from "react-icons/hi"
import {FaFileSignature} from "react-icons/fa"

import "../App.css"

import { getDashboard } from "../API services/dashboardService";

import { ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



const Home = () => {

    const [dashboard, setDashBoard] = useState({});

    useEffect(() => {
        getDashboard(setDashBoard);

    }, [])



    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['Phase 1', 'Phase 2', 'Phase 3'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(75, 192, 192, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };


    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Gender distribution in clinical trials',
            },
        },
    };

    

    let labels = []
    let dataset1Data = []
    let dataset2Data = []

   if (dashboard.totalMaleFemaleCounts) {
  dashboard.totalMaleFemaleCounts.forEach((mfcount) => {
    labels.push(mfcount.vaccine);
    dataset1Data.push(mfcount.maleCount);
    dataset2Data.push(mfcount.femaleCount);
  });
}

    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    // const dataset1Data = [200, 400, 600, 800, 1000, 500, 300];
    // const dataset2Data = [500, 300, 800, 200, 900, 700, 400];

    const barData = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: dataset1Data,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: dataset2Data,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };



    return (
        <div className="parent-div">
            <br />
            <div className="dashboard">
                <div className="metric posts">
                    <p className="metric-number">{dashboard.totalVaccines}</p>
                    <p className="metric-text">
                        <span>

                            <TbVaccine /> Vaccines
                        </span>
                    </p>
                </div>
                <div className="metric answers">
                    <div className="side"></div>
                    <p className="metric-number">{dashboard.totalPatients}</p>
                    <p className="metric-text">
                        <span>
                            <IoPeople /> Patients
                        </span>
                    </p>
                </div>
                <div className="metric upvotes">
                    <p className="metric-number">{dashboard.totalPatientRecords}</p>
                    <p className="metric-text">
                        <span>
                            <HiDocumentReport /> In Study
                        </span>
                    </p>
                </div>
                <div className="metric downvotes">
                    <p className="metric-number">{dashboard.totalRecords}</p>
                    <p className="metric-text">
                        <span>
                            <FaFileSignature /> Patient reports
                        </span>
                    </p>
                </div>
            </div>

            <br /><br />
            <div className="d-flex justify-content-between">
                <div className=" dashboard p-3" style={{ width: '300px', height: '320px' }}>
                    <Doughnut data={data} />

                </div>


                <div className=" dashboard p-3" style={{ width: '800px', height: '320px' }}>
                    <Bar options={options} data={barData} />;
                </div>
            </div>
        </div>
    );
}

export default Home