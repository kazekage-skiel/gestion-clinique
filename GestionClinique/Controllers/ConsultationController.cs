using Microsoft.AspNetCore.Mvc;

namespace GestionClinique.Controllers
{
    public class ConsultationController : Controller
    {
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
        public void InitConsultation()
        {
            
        } 
       
    }
}