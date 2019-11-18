using System;
using System.Linq;
using GestionClinique.Models;
using GestionClinique.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GestionClinique.Controllers
{
    public class UserController : Controller
    {
        // GET
        // ReSharper disable once FieldCanBeMadeReadOnly.Local
        private  UserRepository _userRepository;
        private DatabaseContext _databaseContext;
        public UserController(DatabaseContext databaseContext)
        {
            this._databaseContext = databaseContext;
        }
        public ActionResult Login(User userModel)
        {
            HttpContext.Session.Get("id");
            var user = _databaseContext.Users.FirstOrDefault(a => a.Username.Equals(userModel.Username) && a.Password.Equals(userModel.Password));
            if (user!=null)
            {
                HttpContext.Session.SetInt32("user_id",user.Id);
                return Redirect("/Home/Index");
            }
            return Redirect("/User/Login");
        }
       
    }
}