using System;
using System.ComponentModel.DataAnnotations;

namespace GestionClinique.Models
{
    public class PreConsultation
    {
        [Key]
        public int id { get; set; }
        public DateTime consul_at { get; set; }
        public int patient_id { get; set; }
        public int type_consultation { get; set; }
        public string commentaire { get; set; }
        public int service_id { get; set; }
        public int is_rdv;
    }
}