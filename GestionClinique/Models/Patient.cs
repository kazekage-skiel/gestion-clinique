using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;

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
        
        public int state { get; set; }
        
        [NotMapped]
        public IFormFile ppFile { get; set; }


        public Patient()
        {
        }

        public Patient(int id, string fname, string lname, int age, int genre, int taille, int poids, DateTime birthdate, string ppUrl)
        {
            this.id = id;
            this.fname = fname;
            this.lname = lname;
            this.age = age;
            this.genre = genre;
            this.taille = taille;
            this.poids = poids;
            this.birthdate = birthdate;
            pp_url = ppUrl;
        }
    }
}