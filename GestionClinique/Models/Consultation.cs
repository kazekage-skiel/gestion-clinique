

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestionClinique.Models
{
    public class Consultation
    {
        [Key]
        public int id { get; set; }
        
        [Column("date_consul")]
        private DateTime dateConsul { get; set; }

        private int PreConsultation_id { get; set; }
        private int User_id { get; set; }
        

    }
}