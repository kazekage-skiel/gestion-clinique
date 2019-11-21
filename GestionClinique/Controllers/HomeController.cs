using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using GestionClinique.Models;
using Microsoft.AspNetCore.Http;

namespace GestionClinique.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private DatabaseContext _databaseContext;

        public HomeController(ILogger<HomeController> logger,DatabaseContext databaseContext)
        {
            _logger = logger;
            _databaseContext = databaseContext;
        }

        public ActionResult Index()
        {
            
            if (HttpContext.Request.Method=="GET")
            {
                // The action is a POST.
                var zones = this._databaseContext.Zones.ToList();
                ViewBag.zonesBag = zones;
          
                if (HttpContext.Session.GetString("user_id")==null)
                {
                    return View("~/Views/Login.cshtml");
                }
            }

            return View("Index");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
