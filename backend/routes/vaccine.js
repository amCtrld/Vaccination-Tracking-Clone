const router = require("express").Router();
const Vaccine = require("../models/vaccine.model");
const PatientEntry = require("../models/patientEntry.model");
const Patient = require("../models/patient.model");

router.route("/").get(async (req, res) => {
    try {
        const vaccines = await Vaccine.find()
        res.json(vaccines)
    }
    catch (err) {
        res.status(400).json("Error: " + err);
    }

});

router.route("/:id").get(async (req, res) => {
    try {
        const { id } = req.params;
        const vaccine = await Vaccine.findById(id)
        const count = await PatientEntry.countDocuments({ vaccineID: id });
        const vaccineWithCount = { ...vaccine._doc, count };

        res.json(vaccineWithCount);
    }
    catch (err) {
        res.status(400).json("Error: " + err);
    }

});



// router.route("/availablePatients").get(async (req, res) => {
//     try {
//       //const usedPatientIDs = await PatientEntry.distinct('patientID');
  
//       const availablePatients = await Patient.find();
  
//       res.status(200).json(availablePatients);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   });
  

  router.route("/available/patients/all").get(async (req, res) => {
    try {
        const usedPatientIDs = await PatientEntry.distinct('patientID');
        const patients = await Patient.find({ _id: { $nin: usedPatientIDs } });
        res.json(patients);
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});


router.route("/add").post(async (req, res) => {
    try {
        const { name, type } = req.body;

        const newVaccine = new Vaccine({
            name,
            type,
        });

        const savedVaccine = await newVaccine.save();
        res.json(savedVaccine);
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});


router.route("/:id/edit").put(async (req, res) => {
    try {
        const { id } = req.params;
        const { name, type } = req.body;

        const updatedVaccine = await Vaccine.findByIdAndUpdate(
            id,
            {
                name,
                type,
            },
            { new: true }
        );

        res.json(updatedVaccine);
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});

router.route("/:id").delete(async (req, res) => {
    try {
        const { id } = req.params;

        await Vaccine.findByIdAndDelete(id);
        res.json("Vaccine deleted.");
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});


// Add a new patient entry
router.route('/entry/add').post(async (req, res) => {
    const { phase, vaccineID, patientID, status } = req.body;

    const newPatientEntry = new PatientEntry({
        phase,
        vaccineID,
        patientID,
        status: "study",
    });

    try {
        const savedPatientEntry = await newPatientEntry.save();
        res.json(savedPatientEntry);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Edit a patient entry
router.route('/entry/edit/:id').put(async (req, res) => {
    try {
        const updatedPatientEntry = await PatientEntry.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedPatientEntry);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

// Delete a patient entry
router.route('/entry/delete/:id').delete(async (req, res) => {
    try {
        await PatientEntry.findByIdAndDelete(req.params.id);
        res.json('Patient entry deleted.');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});


// Get all patient entries for a vaccine
router.route('/entry/:vaccineID/:phaseID').get(async (req, res) => {
    try {
        const { vaccineID, phaseID } = req.params;
        const patientEntries = await PatientEntry.find({ vaccineID: vaccineID, phase: phaseID }).populate('patientID');;
        res.json(patientEntries);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router