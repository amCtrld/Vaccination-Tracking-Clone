import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import People from './pages/people.component';
import NavBar from './components/navbar.component';
import VaccineDetails from './pages/vaccineDetails.component';
import Vaccines from './pages/vaccines.component';
import PatientDetails from './pages/patientDetails.component';
import Home from './pages/home.component';
import CreatePatient from './pages/createPatient.component';
import CreatePatientRecord from './pages/createPatientRecord.component';
import CreateVaccine from './pages/createVaccine.component';


function App() {
  return (  
    <div>

      <Router>
        <NavBar />
        <Routes> 
          <Route path ='/' element={<Home/>}/>
          <Route path="/people" element={<People />} />
          <Route path="/vaccines" element={<Vaccines />} />
          <Route path="/patient/:id" element={<PatientDetails />} />
          <Route path="/vaccine/:id" element={<VaccineDetails />} />
          <Route path="/create/patient" element={<CreatePatient />} />
          <Route path="/create/patient-record/:id" element={<CreatePatientRecord/>}/>
          <Route path="/create/vaccine" element={<CreateVaccine/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
