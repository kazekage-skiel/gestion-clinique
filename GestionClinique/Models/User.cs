using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestionClinique.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Fname { get; set; }
        
        public string Lname { get; set; }
        
        [Column("date_in")]
        public string DateIn { get; set; }
        
        [Column("date_out")]
        public string DateOut { get; set; }
        
        public string Username { get; set; }
        public string Password { get; set; }
        
        [Column("titre_id")]
        public int TitreId { get; set; }
        
        [Column("service_id")]
        public int ServiceId { get; set; }
        
        [Column("area_id")]
        public int AreaId { get; set; }
        
       


    }
}