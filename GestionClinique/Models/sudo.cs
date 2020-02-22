using System.ComponentModel.DataAnnotations;

namespace GestionClinique.Models
{
    public class sudo
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        
        public int Area_id { get; set; }


        public sudo()
        {
            
        }

        public sudo(string username, string password)
        {
            Username = username;
            Password = password;
        }

        public sudo(string username, string password, string areaId)
        {
            Username = username;
            Password = password;
            Area_id = int.Parse(areaId);
        }
    }
}