using System;
using System.Linq;
using GestionClinique.Models;

namespace GestionClinique.Repository
{
    public class PatientRepository:IDisposable

    {
    public static PatientRepository _patientRepository;
    private DatabaseContext _databaseContext;


    public static PatientRepository Repository(DatabaseContext databaseContext)
    {
        if (_patientRepository == null)
        {
            _patientRepository = new PatientRepository();
        }

        return _patientRepository;
    }

    public PatientRepository()
    {
      
    }

    public Patient GetPatientData(int patient_id)
    {
        var patient = this._databaseContext.Patients
            .Where(_patient => _patient.id == patient_id)
            .FirstOrDefault();
        return patient;
    }

    public void Dispose()
    {
        _databaseContext?.Dispose();
    }
    }
}