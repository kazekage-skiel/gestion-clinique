using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GestionClinique.Models;
using GestionClinique.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Net.Http.Headers;
using NToastNotify;

namespace GestionClinique.Controllers
{
    public class ConsultationController : Controller
    {

        private DatabaseContext _databaseContext;
        private readonly IToastNotification _toastNotification;
        private readonly PatientRepository _patientRepository;
        private PatientController _patientController;

        public ConsultationController(DatabaseContext dbContext,IToastNotification notification)
        {
            this._databaseContext = dbContext;
            this._toastNotification = notification;
            _patientRepository=PatientRepository.Repository(dbContext);
        }
        // GET
        public IActionResult Index()
        {
            return View("Index");
        }

        [HttpGet]
        public IActionResult CreateForm()
        {
            return View("create_consultation");     
        }
        
        
        [HttpPost]
        public ActionResult AddPatient(Patient patient)
        {
            /*upload */
          
            var _patient = new Patient
            {
                lname = patient.lname,
                fname = patient.fname,
                age = patient.age,
                birthdate =patient.birthdate,
                genre = patient.genre,
                poids = patient.poids,
                taille=patient.taille

            };
            this._databaseContext.Patients.Add(_patient);
            var statut= this._databaseContext.SaveChanges();
            if (statut==1)
            {
                _toastNotification.AddSuccessToastMessage("Cet patient a bien été ajouté à la file d'attente de consulation !" +
                                                          "Vous pouvez renseigner d'autres information sur cette page", new NotyOptions());
                return RedirectToAction("ShowConsultationPage","Consultation", new {Id = _patient.id});
            }

            return RedirectToAction("CreateForm");

        }
        
        /*
         * fontion d'ajout de consultation
         */


        public ActionResult ShowConsultationPage(int id)
        {
            Console.WriteLine("patient_id"+id);
            var patient = this.GetPatientData(id);
            Console.WriteLine("patient_data"+patient.fname);
            /*recuperation de toutes les infos concernant */
            ViewData["patient"] = patient;
            return View("single");
        }
        
        public Patient GetPatientData(int patient_id)
        {
            var patient = this._databaseContext.Patients
                .FirstOrDefault(_patient => _patient.id == patient_id);
            return patient;
        }


        public ActionResult ConsultationList()
        {
            var List = this._databaseContext.Consultations.ToList();
            return View("Index");
        }
        public void InitConsultation()
        {
            
        }

    }
}