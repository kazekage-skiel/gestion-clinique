using System.Collections;
using System.Collections.Generic;
using GestionClinique.Models;

namespace GestionClinique.Repository.Interface
{
    public interface IUserRepository
    {
        User GetUser(sudo sudo);
        IEnumerable<Zone> GetWorkingAreas();
    }
}