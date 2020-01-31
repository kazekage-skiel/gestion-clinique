using System.Collections;
using System.Collections.Generic;
using GestionClinique.Models;

namespace GestionClinique.Repository.Interface
{
    public interface IUserRepository
    {
        sudo GetUser(sudo userModel);
        IEnumerable<Zone> GetWorkingAreas();
    }
}