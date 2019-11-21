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
        public ActionResult AddPatient(string fname,string lname,int age,int genre,int taille,int poids,DateTime birthday)
        {
            /*upload */
            var file = Request.Form.Files;
            var fileName=ContentDispositionHeaderValue
                .Parse(file[0].ContentDisposition)
                .FileName
                .Trim();
            Console.WriteLine("**********");
                Console.WriteLine("fname"+fname);
                Console.WriteLine("lname"+lname);
                Console.WriteLine("age"+age);
                Console.WriteLine("genre"+genre);
                Console.WriteLine("taille"+taille);
                Console.WriteLine("Poids"+poids);
                Console.WriteLine("Birthdate"+birthday);
                Console.WriteLine("pp"+fileName);
            Console.WriteLine("**********");
           

            /*var patient=new Patient
            {
                age = consultationModel.Patient.age,
                birthdate = consultationModel.Patient.birthdate,
                fname = consultationModel.Patient.fname,
                lname = consultationModel.Patient.lname,
                genre = consultationModel.Patient.genre,
                poids = consultationModel.Patient.poids

            };
            this._databaseContext.Patients.Add(patient);*/
            return Ok();
        }
        
       
        public void InitConsultation()
        {
            
        }
        
       
       
    }
}