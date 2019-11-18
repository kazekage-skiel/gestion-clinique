using Microsoft.AspNetCore.Mvc;

namespace GestionClinique.Controllers
{
    public class SudoController : Controller
    {
        /*
         * GET retourne la vue correspondant au formulaire
         * du super admin
         */
        public IActionResult Index()
        {
            return View("~/Views/Login.cshtml");
        }
    }
}