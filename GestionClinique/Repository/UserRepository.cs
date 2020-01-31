/*
 * classe devrant servir à fetch des infos concernant le gars qui est connecté
 * et cette classe doit etre appelable dans nimporte quelle autre classe
 * une seule instance de la classe qu'importe les appels
 */

using System.Collections;
using System.Collections.Generic;
using System.Linq;
using GestionClinique.Models;
using GestionClinique.Repository.Interface;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Extensions.Logging;

// ReSharper disable All

namespace GestionClinique.Repository
{
    public sealed class UserRepository:IUserRepository
    {
        private readonly DatabaseContext _databaseContext;
        private static UserRepository _userRepository;
        private readonly ILogger<IUserRepository> _iuserRepo;
        
        public UserRepository(DatabaseContext databaseContext)
        {
            this._databaseContext = databaseContext;

        }

        public sudo GetUser(sudo userModel)
        {
            var user = this._databaseContext.sudo.Where(model => model.Username == userModel.Username)
                .First(model => model.Password == userModel.Password);
            return user;
        }

        /*function devrant me permetter de recuperrer la liste des
            zonnes de travaisl
         */
        public IEnumerable<Zone> GetWorkingAreas()
        {
            return this._databaseContext.Zones.ToList();
        }
    }
}