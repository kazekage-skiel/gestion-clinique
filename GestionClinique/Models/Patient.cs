using System;
using System.ComponentModel.DataAnnotations;

namespace GestionClinique.Models
{
    public class Patient
    {
        [Key]
        public int id { get; set; }
        
        public string fname { get; set; }
        
        public string lname { get; set; }
        public int age { get; set; }
        public int genre { get; set; }
        public int taille { get; set; }
        public int poids { get; set; }
        public DateTime birthdate { get; set; }
        public string pp_url { get; set; }
        public int hospitalise { get; set; }
    }
}