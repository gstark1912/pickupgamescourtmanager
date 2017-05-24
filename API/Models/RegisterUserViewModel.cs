using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class RegisterUserViewModel
    {
        public string idFacebook { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string birthDate { get; set; }
        public string gender { get; set; }
        public string photoUrl { get; set; }
    }
}