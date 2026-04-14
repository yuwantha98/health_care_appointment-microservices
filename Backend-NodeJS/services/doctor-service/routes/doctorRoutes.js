const express = require("express");
const router = express.Router();
const {
  registerDoctor,
  getDoctorProfile,
  updateDoctorProfile,
  updateAvailability,
  getAllDoctors,
  verifyDoctor,
  acceptOrRejectAppointment,
  issuePrescription,
  viewPatientReports,
  getPatientPrescriptions,
} = require("../controllers/doctorController");
const { protect, authorize } = require("../middleware/auth");

// Public routes
router.post("/register", registerDoctor);
router.get("/", getAllDoctors);

// Protected routes (Doctor only)
router.get("/profile", protect, authorize("doctor"), getDoctorProfile);
router.put("/profile", protect, authorize("doctor"), updateDoctorProfile);
router.put("/availability", protect, authorize("doctor"), updateAvailability);

// Appointment management
router.put(
  "/appointments/:id/status",
  protect,
  authorize("doctor"),
  acceptOrRejectAppointment,
);

// Prescriptions
router.post("/prescriptions", protect, authorize("doctor"), issuePrescription);
router.get("/patients/:id/prescriptions", protect, getPatientPrescriptions);

// Patient reports
router.get(
  "/patients/:id/reports",
  protect,
  authorize("doctor"),
  viewPatientReports,
);

// Admin routes
router.put("/:id/verify", protect, authorize("admin"), verifyDoctor);

module.exports = router;
