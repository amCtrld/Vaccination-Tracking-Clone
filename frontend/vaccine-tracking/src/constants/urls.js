const URLS = {

    baseUrl : "http://localhost:5000",
    
    //patients
    patients: "/patients",
    patientsAdd: "/patients/add",
    patientsUpdate: "/patients/update",
    patientsRecord: "/patients/records",

    //vaccine
    vaccines: "/vaccines",
    vaccinesAdd: "/vaccines/add", 
    vaccinePatientEntry: "/vaccines/entry/add",
    vaccinePatientEntryEdit: "vaccines/entry/edit",
    vaccineGetAllEntries: "vaccines/entry"
   
    
}

export {URLS}

// "/:patientId/records/add"
// "/records/:recordId/edit"
// "/records/:recordId/delete"
// 
//vaccine edit
// "/:id/edit"
// '/entry/edit/:id'
// '/entry/delete/:id'
// '/entry/:vaccineID'
 

