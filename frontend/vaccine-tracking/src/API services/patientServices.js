import {URLS} from "../constants/urls"
import axios from "axios"


const getAllPatients = (setData) => {
    const reqUrl = URLS.baseUrl + "/patient";
    
    axios.get(reqUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  const addPatient = (patientData, callback) => {
    const reqUrl = URLS.baseUrl + "/patient/add";

    console.log(patientData)

    
    axios.post(reqUrl, patientData)
      .then(response => {
        if (callback) {
          callback(response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  const updatePatient = (patientId, patientData, callback) => {
    const reqUrl = URLS.baseUrl + "/patient/update/" + patientId;
    
    axios.put(reqUrl, patientData)
      .then(response => {
        if (callback) {
          callback(response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  const deletePatient = (patientId, callback) => {
    const reqUrl = URLS.baseUrl + "/patient/" + patientId;
    
    axios.delete(reqUrl)
      .then(response => {
        if (callback) {
          callback(response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  const getPatient = (patientId, setData) => {
    const reqUrl = URLS.baseUrl + "/patient/" + patientId;
    
    
    axios.get(reqUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }


  const getAllPatientRecords = (patientId, setData) => {
    const reqUrl = URLS.baseUrl + "/patient/records/" + patientId;
    
    axios.get(reqUrl)
      .then(response => {
          console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  

  const addPatientRecord = (patientId, recordData, callback) => {
      console.log(patientId)
    const reqUrl = URLS.baseUrl + "/patient/records/add/"+patientId;
  
    axios.post(reqUrl, recordData)
      .then(response => {
        if (callback) {
          callback(response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  const updatePatientRecord = (recordId, recordData, callback) => {
    const reqUrl = URLS.baseUrl + "/patient/records/" + recordId + "/edit";
    
    axios.put(reqUrl, recordData)
      .then(response => {
        if (callback) {
          callback(response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  const deletePatientRecord = (recordId, callback) => {
    const reqUrl = URLS.baseUrl + "/patient/records/" + recordId + "/delete";
    
    axios.delete(reqUrl)
      .then(response => {
        if (callback) {
          callback(response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }



  const getPatientRecord = (recordId, setData) => {
    const reqUrl = URLS.baseUrl + "/patient/records/" + recordId;
    
    axios.get(reqUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
      
  
  export {getPatient, getAllPatients, addPatient, deletePatient, updatePatient, getPatientRecord, getAllPatientRecords, addPatientRecord, deletePatientRecord, updatePatientRecord}