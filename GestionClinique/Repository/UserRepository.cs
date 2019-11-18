/*
 * classe devrant servir à fetch des infos concernant le gars qui est connecté
 * et cette classe doit etre appelable dans nimporte quelle autre classe
 * une seule instance de la classe qu'importe les appels
 */

using System.Linq;
using GestionClinique.Models;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

// ReSharper disable All

namespace GestionClinique.Repository
{
    public sealed class UserRepository
    {
        private DatabaseContext _databaseContext;
        private static UserRepository _userRepository;

        public static UserRepository Instance(DatabaseContext databaseContext)
        {
               if (_userRepository==null)
                {
                    _userRepository=new UserRepository(databaseContext);
                }
                return _userRepository;
        }
        public UserRepository(DatabaseContext databaseContext)
        {
            this._databaseContext = databaseContext;
        }

        public sudo getUser(sudo userModel)
        {
            /*var user = this._databaseContext.Users.Where(model => model.Username == userModel.Username).
                First(model=>model.Password==userModel.Password);*/
            var user = this._databaseContext.sudo.Where(model => model.Username == userModel.Username)
                .First(model => model.Password == userModel.Password);
            return user;
        }
        
        
    }
}