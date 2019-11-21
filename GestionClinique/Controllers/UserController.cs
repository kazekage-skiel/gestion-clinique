using System;
using System.Linq;
using GestionClinique.Models;
using GestionClinique.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using NToastNotify;


namespace GestionClinique.Controllers
{
    public class UserController : Controller
    {
        private readonly IToastNotification _toastNotification;
        
        [TempData]
        public string Message { get; set; }
        // GET
        // ReSharper disable once FieldCanBeMadeReadOnly.Local
        private  UserRepository _userRepository;
        private DatabaseContext _databaseContext;
        public UserController(DatabaseContext databaseContext,IToastNotification toastNotification)
        {
            this._databaseContext = databaseContext;
            this._toastNotification = toastNotification;
        }
        [HttpPost]
        public ActionResult Login(MainModel mainModel)
        {
            var user = this._databaseContext.Users
                .Where(user1 => user1.Username.Equals(mainModel.User.Username))
                .FirstOrDefault(user1 => user1.Password.Equals(mainModel.User.Password));

            if (user!=null)
            {
                if (user.AreaId== mainModel.zone.id)
                {
                    HttpContext.Session.SetString("user_id",user.User_Id);
                    _toastNotification.AddSuccessToastMessage("Bienvenue dans votre espace de gestion", new NotyOptions());
                    Console.WriteLine("userFind"+user.Fname);
                }
                else
                {
                    _toastNotification.AddErrorToastMessage("Cet utilisateur n'est pas affilier à la zone selectionné !" +
                                                            "Pour toute reclamation veuillez contacter votre administrateur", new NotyOptions());
                    return RedirectToRoute("UserLogin");  
                }
            }
            _toastNotification.AddErrorToastMessage("Aucun utilisateur n'existe avec ces identifiants", new NotyOptions());
            return RedirectToRoute("UserLogin");

        }

    }
}