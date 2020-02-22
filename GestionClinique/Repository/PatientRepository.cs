using System;
using System.Collections.Generic;
using System.Linq;
using GestionClinique.Models;
using GestionClinique.Repository.Interface;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace GestionClinique.Repository
{
    public class PatientRepository:IPatientRepository

    {
    public static PatientRepository _patientRepository;
    private DatabaseContext _databaseContext;


    public static PatientRepository Repository(DatabaseContext databaseContext)
    {
        if (_patientRepository == null)
        {
            _patientRepository = new PatientRepository(databaseContext);
        }

        return _patientRepository;
    }

    public PatientRepository(DatabaseContext database)
    {
        this._databaseContext = database;
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

        public IEnumerable<Patient> GetPatients(string query)
        {

            var _patientList = this._databaseContext.Patients
                .Where(model => EF.Functions.Like(model.fname, "%" + query + "%")
                                || EF.Functions.Like(model.lname, "%" + query + "%"));
            /*var patients = from _patient in this._databaseContext.Patients
                where EF.Functions.Like(_patient.fname, "%"+query+"%",_patient.lname) 
                select _patient;*/
            return _patientList.ToList();
        }
    }
}