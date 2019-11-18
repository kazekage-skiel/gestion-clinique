using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using GestionClinique.Models;
using GestionClinique.Repository;

namespace GestionClinique.Controllers
{
    public class AuthController : Controller
    {
        private UserRepository _userRepository;
        
        public AuthController(UserRepository userRepository,DatabaseContext databaseContext)
        {
            
        }
       
        public IActionResult UserLogin()
        {
            return View("~/Views/Login.cshtml");
        }
       
    }
}