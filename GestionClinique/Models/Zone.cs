using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace GestionClinique.Models
{
    public class Zone
    {
        [Key]
        public int id { get; set; }
        [Column("libele")]
        public string Libele { get; set; }
        
     
    }
}