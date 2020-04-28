using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GestionClinique.Models;
using GestionClinique.Repository;
using GestionClinique.Repository.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Net.Http.Headers;
using NToastNotify;

namespace GestionClinique.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class ConsultationController : Controller
    {
        
        private DatabaseContext _databaseContext;
        private readonly IToastNotification _toastNotification;
        private readonly IPatientRepository _patientRepository;
        private PatientController _patientController;
      

        public ConsultationController(DatabaseContext dbContext,IToastNotification notification,IPatientRepository patientRepository)
        {
            this._databaseContext = dbContext;
            this._toastNotification = notification;
            _patientRepository = patientRepository;
        }
      
        
        
        public Patient GetPatientData(int patient_id)
        {
            var patient = this._databaseContext.Patients
                .FirstOrDefault(_patient => _patient.id == patient_id);
            return patient;
        }

        
        
        /*methode de l'api*/
        [HttpGet("/searchPatient")]
        public IEnumerable<Patient> searchPatient([FromQuery(Name = "q")] string queryParams)
        {
            return this._patientRepository.GetPatients(queryParams);
        }

    }
}