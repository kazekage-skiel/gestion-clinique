using System.Linq;
using GestionClinique.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NToastNotify;

namespace GestionClinique.Controllers
{
    public class PatientController : Controller
    {
        // GET

        private IToastNotification _toastNotification;
        private readonly DatabaseContext _databaseContext;

        public PatientController(DatabaseContext context,IToastNotification notification)
        {
            this._databaseContext = context;
            this._toastNotification = notification;
        }

        public void updatePatient(Patient patient)
        {
            //TODO fonction de mise à jour du patient
        }

        public Patient GetPatientData(int patient_id)
        {
            var patient = this._databaseContext.Patients
                .Where((_patient, i) =>_patient.id==patient_id )
                .FirstOrDefault();
            return patient;
        }
    }
}