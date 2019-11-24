using System;
using System.Threading.Tasks;
using GestionClinique.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Net.Http.Headers;

namespace GestionClinique.Controllers
{
    public class ConsultationController : Controller
    {

        private DatabaseContext _databaseContext;

        public ConsultationController(DatabaseContext dbContext)
        {
            this._databaseContext = dbContext;
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
        public void AddPatient(Patient patient)
        {
            /*upload */
            var file = Request.Form.Files;
           
            Console.WriteLine("**********");
                Console.WriteLine("fname"+patient.fname);
              
               
            Console.WriteLine("**********");
           

            /*var patient=new Patient
            {
                age = age,
                birthdate = birthday,
                fname = fname,
                lname = lname,
                genre = genre,
                poids = poids

            };
            this._databaseContext.Patients.Add(patient);*/
         
        }
        
        /*
         * fontion d'ajout de consultation
         */
       
        public void InitConsultation()
        {
            
        }
        
       
       
    }
}