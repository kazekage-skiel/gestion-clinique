using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using GestionClinique.Models;
using GestionClinique.Repository;
using GestionClinique.Repository.Interface;
using NToastNotify.Helpers;

namespace GestionClinique.Controllers
{
         [ApiController]
         [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private IUserRepository _userRepository;
        
        public AuthController(IUserRepository userRepository,DatabaseContext databaseContext)
        {
            _userRepository = userRepository;
        }

        [HttpGet("workingAreas")]
        public IEnumerable<Zone> GetWorkingAreas()
        {
            return this._userRepository.GetWorkingAreas();
        }
       
    }
}